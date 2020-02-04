<template>
  <div style="margin:10px;">
  <div class="text-center" style="">
  </div>
   <v-card >
    <v-card-title style="padding-left:250px;color:black;background-color:#B0BEC5">
      <div><h2 style="font-weight:bold;">예약 현황</h2></div>
        <v-spacer></v-spacer>
        <v-text-field single-line v-model="search" append-icon="search" label="조건검색"></v-text-field>
    </v-card-title>
      <v-data-table :headers="headers" :items="lists" :search="search" :page.sync="page"
        :items-per-page="10" 
        @page-count="pageCount = $event" style="margin-top:15px;text-align-last:center">
        <template v-slot:item.resdate="{item}">
          {{fnc.timeToDate(item.resdate)}}
        </template>
        <template v-slot:item.personseq.userid="{item}">
          <v-btn @click="openDialog(item)">{{item.personseq.userid}}</v-btn>
        </template>
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right" circle
          color="grey" v-model="page" :length="pageCount" style="margin-bottom:15px;"></v-pagination>
      </div>
    </v-card>
    <v-dialog v-model="dialog" width="400px">
      <v-card class="pa-4" >
        <v-card-title class="blue darken-2" style="font-color:white" >{{`${selectUser}고객 경기정보`}}</v-card-title>
        <v-text-field v-model="matchResult.score" label="넣은 골수" required/>
        <v-text-field v-model="matchResult.km" label="달린 거리" required/>
        <v-select v-model="matchResult.win" :items="['win', 'lose']" label="승패" required/>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="setMatchResult()">Save</v-btn>
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
      this.lists = res.data.sort((a,b) =>
        a.resdate > b.resdate ? 1 : (a.resdate < b.resdate ? -1 : 0))
    })
    .catch(e=>{
      alert('AXIOS FAIL'+e)
    })
  },
    data(){
      return{
        fnc: store.state.futsal.fnc,
        page: 1,
        pageCount: 0,
        itemsPerPage: 100,
        lists: [],
        black:false,
        search: '',
        headers: [
          { text: '예약 번호', value: 'resseq'},
          { text: '예약 일자', value: 'resdate' },
          { text: '구장명', value: 'futsalmatchseq.stadiumname'},
          { text: '유저 아이디', value: 'personseq.userid' },
        ],
        dialog: false,
        selectUser: '',
        context: store.state.context,
        matchResult: {}
      }
    },
   methods:{
    blacklist(){
      alert('블랙 리스트 관리 창으로 이동  ')
    },
    member(x){
      alert(x+'님 개인 설정')
    },
    goto(){
      alert('search')
    },
    openDialog(item){
      let index = this.lists.indexOf(item)
      this.matchResult = item.km ?
        {resseq: item.resseq, km: item.km, win:item.win, score:item.score, index: index}
        : {resseq: item.resseq, km:'',win:'',score:'', index: index}
      this.selectUser = item.personseq.name
      this.dialog = true
    },
    setMatchResult(){
      axios.put(`${this.context}/res/${this.matchResult.resseq}`,this.matchResult)
      .then(res=>{
        if(res){
          let result = this.matchResult
          let temp = this.lists[result.index]
          temp.km = result.km
          temp.win = result.win
          temp.score = result.score
        }
        alert(res ? '입력성공' : '입력에러')
        this.dialog = false
      }).catch(e=> alert('액시오스 실패'+e))
    }
   }
  }
</script>
<style scoped></style>