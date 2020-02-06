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
         <!-- :click="filtersort()" -->
      <!-- <v-btn style="margin-top:40px;float:left;height:50px" @click="sorttier()" color="lime">티어</v-btn> -->

      <v-combobox
          :items="positions"
          solo
          label="포지션 선택"    
         v-model="selectposition"
         style="margin-top:40px;float:left;width:200px;margin-left:10px;"
        ></v-combobox>
      <v-btn style="margin-top:40px;float:left;height:50px;margin-left:10px;" @click="filtersort()" color="green">검색</v-btn>
      <v-btn style="margin-top:40px;float:right;margin-right:40px;height:50px" @click="createRoom()" top class="float-right" color="blue">카드생성하기</v-btn>
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
      <h6>방장: {{room.rhost}}</h6>
      <h6>티어: {{room.tier}}</h6>
      <h6>포지션: {{room.position}}
        <!--  <v-img :src="positionimg()" style="width:30px;height:30px"></v-img>  -->
      </h6>
      <h6>{{btime[i]}}</h6>
      </div>
      </v-img>
      </v-card>
      </v-hover>
      </v-row>
      </div>
       <a color="primary" href="javascript:scroll(0,0)">처음으로 돌아가기 </a>
      <!-- <v-btn  @click="back">처음으로 돌아가기</v-btn> -->
</div>
</template>
<script>
import axios from 'axios'
import {store} from '@/store'
export default {
   computed: {},
   mounted(){
      this.scroll()
   },
   created(){
      this.bringlist()
      // this.$moment.locale('ko')
      
   },
   data(){
      return{
         context:store.state.context,
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
      {text : '아이언', value : 'iron'},
      {text : '브론즈', value : 'bronze'},
      {text : '실버', value : 'silver'},
      {text : '골드', value : 'gold'},
      {text : '플레티넘', value : 'platinum'},
      {text : '다이아', value : 'diamond'},
      {text : '마스터', value : 'master'},
      {text : '그랜드 마스터', value : 'grandemaster'},
      {text : '챌린저', value : 'challenger'}],
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
      
      filtertier(){
      alert('filter! tier '+this.selecttier.value)
      this.list = []
      this.page = 1
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
            this.page += 1
            }else{
               this.rooms = this.list
               window.onscroll = null
            }
              this.timechange()
           })
           .catch(e=>{
              alert('tier AXIOS FAIL'+e)
           })
      },
      filterposition(){
      alert('filter! position '+this.selectposition.value)
      this.list = []
      this.page = 1
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
            this.page += 1
            }else{
               this.rooms = this.list
               window.onscroll = null
            }
              this.timechange()
           })
           .catch(e=>{
              alert('tier AXIOS FAIL'+e)
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
         }else{
            alert('select error!')
         }
      

      },
      filtertierposition(){
      alert('filter! tier: '+this.selecttier.value +' & '+'position: '+this.selectposition.value)
      this.list = []
      this.page = 1
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
            this.page += 1
            }else{
               this.rooms = this.list
               window.onscroll = null
            }
              this.timechange()
           })
           .catch(e=>{
              alert('tier AXIOS FAIL'+e)
           })
      },
      scroll(){
         window.onscroll = () => {
            let bottomOfWindow = Math.max(window.scrollY, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
            if (bottomOfWindow) {
            this.scrolledToBottom = true // replace it with your code
            this.bringlist()
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
            this.page += 1
            this.scroll()
            }else{
               this.rooms = this.list
               alert('마지막 페이지입니다.')
               window.onscroll = null
            }
              this.rooms = res.data
              this.timechange()
           })
           .catch(e=>{
              alert('AXIOS FAIL'+e)
           })
      },
      kal(){
         alert('칼바람은 준비중입니다.')
      },
      createRoom(){
         this.$router.push({path:'/createRoom'})
      },
      timechange(){
         for(let i=0;i<this.rooms.length;i++){
            this.btime.push(this.$moment(this.rooms[i].wtime).fromNow())
         }

         // this.btime = this.$moment(x).fromNow()
      }
   }
}
</script>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
  margin-top:10px;
  color:yellow;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
  color:white;
 }

</style>