<template>
<div>
      <v-col>
      <v-combobox
          :items="tiers"
          solo
          label="티어 선택"
         v-model="selecttier"
         style="margin-top:40px;float:left;width:200px;margin-left:40px;"
        ></v-combobox>
      <v-combobox
          :items="positions"
          solo
          label="포지션 선택"    
         v-model="selectposition"
         style="margin-top:40px;float:left;width:200px;margin-left:10px;"
        ></v-combobox>
      <v-btn style="margin-top:40px;float:left;height:50px;margin-left:10px;" @click="find()" color="green">검색</v-btn>
      <v-btn style="margin-top:40px;float:right;margin-right:40px;height:50px" @click="createRoom()" top class="float-right" color="indigo">카드 생성하기</v-btn>
      </v-col>
    <br /><br />
    <div style="padding:50px;margin-top:30px">
   <v-row>
      <v-hover v-slot:default="{ hover }" v-for="(room, i) of rooms" :key="room.cardseq">
      <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" class="mx-auto" shaped style="width:300px;margin-bottom:10px">
      <v-img
      @click="joinRank(room)"
      style="width:300px;height:350px" 
      :src="require(`@/assets/img/lol/${room.imgurl}.jpg`)"
      >
      <div style="height:150px;width:100%;">
      </div>
      <div :color="{'on-hover':hover}" style="width:100%;height:200px;background-image:linear-gradient(to top, rgba(0, 0, 0, 0.6) 85%, transparent 190px)">
      <br />
      <h5>{{room.title}}</h5>
      <h6>소환사명 : {{room.rhost}}</h6>
      <h6>티어 : {{room.tier}}</h6>
      <h6>포지션 : {{room.position}}
      </h6>
      <h6>{{btime[i]}}</h6>
      </div>
      </v-img>
      </v-card>
      </v-hover>
      </v-row>
      </div>
       <a color="primary" href="javascript:scroll(0,0)">처음으로 돌아가기 </a>
</div>
</template>
<script>
import axios from 'axios'
import {store} from '@/store'
export default {
   computed: {},
   created(){
      this.bringlist()
   },
   data(){
      return{
         context:store.state.context,
         scrolledToBottom:false,
         length:'',
         row: 'rank',
         rooms:[],
         temps:{},
         state: store.state,
         ntime: this.$moment(new Date()).format('YYYY-MM-DD HH:MM:SS'),
         btime: [],
         page: 1,
      list: [],
      selecttier:'',
      selectposition:'',
      positionimgsrc : '',
      tiers: [{text : '티어 선택 없음', value : ''},
      {text : '아이언', value : 'Iron'},
      {text : '브론즈', value : 'Bronze'},
      {text : '실버', value : 'Silver'},
      {text : '골드', value : 'Gold'},
      {text : '플레티넘', value : 'Platinum'},
      {text : '다이아', value : 'Diamond'},
      {text : '마스터', value : 'Master'},
      {text : '그랜드 마스터', value : 'Grandmaster'},
      {text : '챌린저', value : 'Challenger'}],
      positions: [
      {text : '포지션 선택 없음', value : ''},
      {text : '탑', value : 'top', img : 'https://www.mobachampion.com/static/imgs/top_icon.4653e3c00f50.png'},
      {text : '정글', value : 'jungle', img : 'https://www.mobachampion.com/static/imgs/jungle_icon.c706202f19c5.png'},
      {text : '미드', value : 'mid', img : 'https://www.mobachampion.com/static/imgs/mid_icon.59083eeab24c.png'}, 
      {text : '봇(원딜)', value : 'bot', img : 'https://www.mobachampion.com/static/imgs/bottom_icon.ee962758ee88.png'},
      {text : '서포터', value : 'supporter', img : 'https://www.mobachampion.com/static/imgs/support_icon.e1cdf53bc3a3.png'}]
      }
   },
   methods:{
      find(){
         this.page = 1
         this.filtersort()
      },  
      filtertier(){

      this.list = []
      let url = `${this.context}/lol/filtertierlist/tier=${this.selecttier.value}/page=${this.page}`
      let data = {
         page : this.page,
         tier : this.selecttier.value
      }
      let headers = {
              'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                }
      axios
           .get(url, data, headers)
           .then(res =>{
            this.list = []
            this.list = res.data
            if((this.list.length)%9===0){
            this.rooms = this.list
            this.scroll()
            }else{
               this.rooms = this.list
               window.onscroll = null
            }
              this.timechange()
           })   
      },
      filterposition(){
      this.list = []
      let url = `${this.context}/lol/filterpositionlist/position=${this.selectposition.value}/page=${this.page}`
      let data = {
         page : this.page,
         position : this.selectposition.value
      }
      let headers = {
              'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                }
      axios
           .get(url, data, headers)
           .then(res =>{
            this.list = []
            this.list = res.data
            if((this.list.length)%9===0){
            this.rooms = this.list
            this.scroll()
            }else{
               this.rooms = this.list
               window.onscroll = null
            }
              this.timechange()
           })
      },
      filtersort(){
         if((this.selecttier == null || this.selecttier === '' || this.selecttier.value === '') &&
          (this.selectposition == null || this.selectposition === '' || this.selectposition.value === '') 
          ){
            this.bringlist()
         }else if((this.selecttier != null || this.selecttier !== '' || this.selecttier.value !== '') &&
          (this.selectposition == null || this.selectposition === '' || this.selectposition.value === '')){
            this.filtertier()
         }else if((this.selecttier == null || this.selecttier === '' || this.selecttier.value === '') &&
          (this.selectposition != null || this.selectposition !== '' || this.selectposition.value !== '')){
            this.filterposition()
         }else if((this.selecttier != null || this.selecttier !== '' || this.selecttier.value !== '') &&
          (this.selectposition != null || this.selectposition !== '' || this.selectposition.value !== '')){
            this.filtertierposition()
         }
      },
      filtertierposition(){
      this.list = []
      let url = `${this.context}/lol/filtertplist/tier=${this.selecttier.value}/position=${this.selectposition.value}/page=${this.page}`
      let data = {
         page : this.page,
         tier : this.selecttier.value,
         position : this.selectposition.value
      }
      let headers = {
              'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                }
      axios
           .get(url, data, headers)
           .then(res =>{
            this.list = []
            this.list = res.data
            if((this.list.length)%9===0){
            this.rooms = this.list
            this.scroll()
            }else{
               this.rooms = this.list
               window.onscroll = null
            }
              this.timechange()
           }) 
      },
      scroll(){
         window.onscroll = () => {
            let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
            if (bottomOfWindow) {
            this.scrolledToBottom = true // replace it with your code
            this.page += 1
            this.filtersort()
            }
         }
      },
      joinRank(param){
         store.state.selectGame = param
         this.$router.push({name : 'joinrank', params:{ game: param.cardseq}})
      },
      bringlist(){
         let url = `${this.context}/lol/listpage=${this.page}`
         let data = {
            page: this.page
         }
         let headers = {
              'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
                }
         axios
           .get(url, data, headers)
           .then(res =>{
            this.list = res.data
            if((this.list.length)%9===0){
               this.rooms = this.list
               this.scroll()
            }else{
               this.rooms = this.list
               window.onscroll = null
            }
              this.rooms = res.data
              this.timechange()
           })
           .catch(e=>{
              alert('게시판 불러오는 것을 실패하였습니다. '+e)
           })
      },
      kal(){
         alert('칼바람은 준비중입니다.')
      },
      createRoom(){
         if(this.state.person.userid != null){
            this.$router.push({path:'/createRoom'})
         }else{
            alert('로그인해야 사용할 수 있는 기능입니다.')
         }
      },
      timechange(){
         this.btime = []
         for(let i=0;i<this.rooms.length;i++){
            this.btime.push(this.$moment(this.rooms[i].wtime).fromNow())
         }
      }
   }
}
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
  margin-top:10px;
  color: #ffff66;
}
.v-card:not(.on-hover) {
  opacity: 0.7;
  color:white;
 }
</style>