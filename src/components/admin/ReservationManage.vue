<template>
  <div style="margin:10px;">
  <div class="text-center" >
  </div>
   <v-card>
    <v-card-title style="padding-left:250px;color:black;background-color:#B0BEC5">
      <div><h2 style="font-weight:bold;">예약 현황</h2></div>
        <v-spacer></v-spacer>
        <v-text-field single-line v-model="search" append-icon="search" label="조건검색"></v-text-field>
    </v-card-title>
      <v-data-table :headers="headers" :items="lists" :search="search" :page.sync="page"
        :items-per-page="15" 
        @page-count="pageCount = $event" style="margin-top:30px;text-align-last:center">
        <template v-slot:item.resday="{item}">
          {{item.resday}}
        </template>
        <template v-slot:item.userid="{item}">
          <v-btn @click="openDialog(item)">{{item.userid}}</v-btn>
        </template>
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right" circle
          color="grey" v-model="page" :length="pageCount" total-visible="150"
          ></v-pagination>
      </div>
    </v-card>
    <v-dialog v-model="dialog" width="400px">
      <v-card class="pa-4" >
        <v-card-title class="blue darken-2" style="font-color:white" >{{`${selectUser} 고객 경기정보`}}</v-card-title>
        <v-text-field v-model="matchResult.score" :rules="numRules" label="넣은 골수" required/>
        <v-text-field v-model="matchResult.km" :rules="numRules" label="달린 거리 (km)" required/>
        <v-select v-model="matchResult.win" :items="['win', 'lose']" label="승 / 패" required/>
        <v-btn color="red" v-if="this.tempb.result == 'FAIL'" @click.prevent="addblack()">풋살 블랙리스트 추가</v-btn>
        
        <div v-else>
        <h6 >블랙 해제까지 남은 시간: {{blackcount}}</h6>
        <v-textarea v-model="blackreason" label="블랙 추가 사유" disabled=""></v-textarea>
        </div>
        <v-btn v-if="this.opend == true" @click="closed()">블랙 추가 안함</v-btn>
        <div v-if="opend == true">
        <v-textarea v-model="blackreason" label="블랙 추가 사유" placeholder="내용을 입력하지 않으시면 블랙리스트에 추가되지 않습니다."></v-textarea>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success"  @click="setMatchResult(selectUserId)">등록</v-btn>
          <v-btn color="warning"  @click="dialog = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import { store } from '@/store'
export default {
  created(){
    axios
    .get(`${this.context}/res/1`)
    .then(res =>{
      this.lists = res.data.map(i=>{i.resday = this.fnc.timeToDate(i.resdate)
        return i}).sort((a,b) =>
        a.resseq > b.resseq ? 1 : (a.resseq < b.resseq ? -1 : 0)).reverse()
    }).catch(e=>{
      alert('AXIOS FAIL'+e)
    })
  },
    data(){
      return{
        numRules: [v => /^[0-9]{1,8}$/.test(v) || '숫자를 입력해주세요.'],
        fnc: store.state.futsal.fnc,
        page: 1,
        pageCount: 10,
        itemsPerPage: 100,
        lists: [],
        black:false,
        search: '',
        headers: [
          { text: '예약 번호', value: 'resseq'},
          { text: '예약 일자', value: 'resday'},
          { text: '구장명', value: 'stadiumname'},
          { text: '유저 아이디', value: 'userid' },
        ],
        dialog: false,
        opend : false,
        selectUser: '',
        selectUserId : '',
        context: store.state.context,
        matchResult: {},
        blacktime : this.$moment(new Date()).add(3,'m').format('YYYY-MM-DD HH:mm:ss'),
        blackreason:'',
        temp: 'fail',
        tempb: {},
        blackcount:''
      }
    },
   methods:{
    closed(){
       this.opend = false
     },
    addblack(){
      this.opend = true
    },
    member(x){
      alert(x+'님 개인 설정')
    },
    checkblack(user){
      let url = `${this.context}/blackcheck/${user}`
      let data = {
        userid : user
      }
      axios
      .post(url,data)
      .then(res =>{
        this.tempb = res.data
       
        if(this.tempb.blackcount != null){
        
        this.opend = false
        }
        this.blackreason = this.tempb.blackreason
       this.blackcount = this.$moment(this.tempb.blacktime).fromNow(true)
      })
      .catch(e=>{
        alert('블랙 체크 실패 error code=>'+e)
      })
    },
    openDialog(item){
      this.blacktime = this.$moment(new Date()).add(3,'m').format('YYYY-MM-DD HH:mm:ss')
      this.checkblack(item.userid)
      let index = this.lists.indexOf(item)
      this.matchResult = item.km ?
        {resseq: item.resseq, km: item.km, win:item.win, score:item.score, index: index}
        : {resseq: item.resseq, km:'',win:'',score:'', index: index}
      this.selectUser = item.name
      this.selectUserId = item.userid
      this.dialog = true
      this.opend = false
    },
    setMatchResult(selectUserId){
      if(this.numRules[0](this.matchResult.score)==true && this.numRules[0](this.matchResult.km)==true){
        axios.put(`${this.context}/res/${this.matchResult.resseq}`,this.matchResult)
        .then(res=>{
          if(res){
            let result = this.matchResult
            let temp = this.lists[result.index]
            temp.km = result.km
            temp.win = result.win
            temp.score = result.score
            store.state.person.km = result.km
            store.state.person.win = result.win
            store.state.person.score = result.score
          }
          alert(res ? '경기결과 입력성공' : '경기결과 입력실패')
          if(this.opend == true){
            if(this.blackreason==''){
              this.opend = false
              
            }else{
              this.setBlack(selectUserId)
              alert('블랙리스트 등록 성공')
              
            }
          }
          this.dialog = false
          window.sessionStorage.removeItem('person')
          window.sessionStorage.setItem('person',JSON.stringify(store.state.person))
          if(window.localStorage.getItem('person')){
            window.localStorage.setItem('person',JSON.stringify(store.state.person))
          }
        })
      }
    },
    setBlack(user){
      let url=`${this.context}/addBlack/${user}/${this.blacktime}/${this.blackreason}`
      let data = {
        userid : user,
        blackreason : this.blackreason,
        blacktime : this.blacktime
      }
      axios
      .put(url,data)
      .then(()=>{
       this.opend = false,
       this.blacktime = this.$moment(new Date()).add(3,'m').format('YYYY-MM-DD hh:mm:ss')
        store.state.person.futblack = true
        store.state.person.blackreason = this.blackreason
        store.state.person.blacktime = this.blacktime
        this.blackreason=''
      }).catch(e=>{
        alert('블랙리스트 추가 실패 error code=>'+e)
      })
    }
  }
}
</script>
<style scoped>
</style>