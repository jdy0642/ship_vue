<template>
<div style="padding:0.5%;">
  <div style="margin:10px">
  <!-- <v-btn @click="fillData()" color="red" style="margin:5px">월요일 예약 더미 100 생성</v-btn>
  <v-btn @click="fillData()" color="orange" style="margin:5px">화요일 예약 더미 100 생성</v-btn>
  <v-btn @click="fillData()" color="yellow" style="margin:5px">수요일 예약 더미 100 생성</v-btn>
  <v-btn @click="fillData()" color="green" style="margin:5px">목요일 예약 더미 100 생성</v-btn>
  <v-btn @click="fillData()" color="blue" style="margin:5px">금요일 예약 더미 100 생성</v-btn>
  <v-btn @click="fillData()" color="grey" style="margin:5px">토요일 예약 더미 100 생성</v-btn>
  <v-btn @click="fillData()" color="pupple" style="margin:5px">일요일 예약 더미 100 생성</v-btn> -->

  <!-- <v-combobox
          :items="days"
          solo
          label="요일 선택"    
         v-model="selectday"
         style="margin-top:40px;float:left;width:200px;margin-left:10px;"
        ></v-combobox>
      <v-btn style="margin-top:40px;float:left;height:50px;margin-left:10px;" @click="fillData()" color="green">검색</v-btn> -->
  </div>
  <v-card>
  <v-card-subtitle>지역별 예약 현황 페이지</v-card-subtitle>
  
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 20 : 2"
          class="mx-auto"
          style="margin:20px;background-color:white"
          width="95%"
          max-height="500px"
        >
        
        <bar-chart :chart-data="todays"></bar-chart>
        </v-card>
      </v-hover>
        <br /><br />
        <v-row style="width:100%">
          
        <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          max-width="350"
          style="float:left;background-color:white;margin:10px"
        >
        <line-chart :chart-data="ager"></line-chart>
        </v-card>
        </v-hover>
  <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          max-width="350"
          style="float:right;background-color:white;margin:10px"
        >
  <pie-chart :chart-data="gender"></pie-chart>
  </v-card>
        </v-hover>
        </v-row>
  </v-card>
    
</div>
</template>

<script>
  import BarChart from '@/chart/BarChart.js'
  import LineChart from '@/chart/LineChart.js'
  import PieChart from '@/chart/PieChart.js'
  import { store } from '@/store'
  import axios from 'axios'
  export default {
    components: {
      BarChart,
      LineChart,
      PieChart
    },
    created(){
      this.todaylist()
    },
    data () {
      return {
        todayslabels:[],
        today:{},
        selectday:'',
        datacollection: null,
        gender:null,
        ager:null,
/*         days: ['월요일', '화요일','수요일','목요일', '금요일', '토요일', '일요일'], */
/*         legion:['서울','경기','인천', '강원', '세종', '충청','대전','대구', '전라', '경상', '부산', '광주','울산' ] */
      }
    },
    mounted () {
      
    },
    methods: {

      rcounting(x){
        return this.today.filter(t => (t.futsalmatchseq.stadiumaddr.substr(0,2) == x)).length
      },
      gcounting(){
        return this.today.filter(t => (t.personseq.male == false)).length
        /* return alert(this.today.filter(t => (t.personseq.male) === true)) */
      },
      acounting(a){
        /* alert(this.today.filter(t => (String(t.personseq.age).substr(0,1) == a)).length) */
        return this.today.filter(t => (String(t.personseq.age).substr(0,1) == a)).length
      },
      async todaylist(){
        axios
        .get(`${store.state.context}/res/todaylist`)
        .then(res =>{
          this.today = res.data
          /* alert(this.today.filter(t => (t.futsalmatchseq.stadiumaddr.substr(0,2) === '서울')).length) */
          /* this.legion.push(this.today.filter(t=>t.futsalmatchseq.stadiumaddr.substr(0,2))) */
          /* this.today.filter(t =>  Array.from(new Set(t.futsalmatchseq.stadiumaddr.substr(0,2)))) */
          
          this.fillData()
          this.today.map(()=>{
            
            /* if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '서울'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '경기'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '인천'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '강원'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '부산'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '광주'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '세종'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '경상'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '충청'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '울산'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '대전'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '대구'){
              this.todayslabels.push(i)
            }else if(i.futsalmatchseq.stadiumaddr.substr(0,2) == '전라'){
              this.todayslabels.push(i)
            }else{
              alert(i.futsalmatchseq.stadiumaddr.substr(0,2))
            } */
            
            })
        })
        /* Array.from(new Set(this.todayslabels)) */
        .catch(e=>{
          alert('AXIOS FAIL'+e)
        })
      },
      fillData () {
        this.todays = {
          labels: [this.$moment(new Date()).format('YYYY-MM-DD')+' 예약 인원'],
          datasets: [
            {label: '서울 지역',
              backgroundColor: 'red',
              data: [this.rcounting('서울')]},
             {label: '인천 지역',
              backgroundColor: 'orange',
              data: [this.rcounting('인천')]},
              {label: '경기 지역',
              backgroundColor: 'yellow',
              data: [this.rcounting('경기')]},
              {label: '세종 지역',
              backgroundColor: 'green',
              data: [this.rcounting('세종')]},
              {label: '충청 지역',
              backgroundColor: 'blue',
              data: [this.rcounting('충청')]},
              {label: '전라 지역',
              backgroundColor: '#4527A0',
              data: [this.rcounting('전라')]},
              {label: '경상 지역',
              backgroundColor: '#8E24AA',
              data: [this.rcounting('경상')]},
              {label: '대전 지역',
              backgroundColor: '#4DB6AC',
              data: [this.rcounting('대전')]},
              {label: '대구 지역',
              backgroundColor: '#90A4AE',
              data: [this.rcounting('대구')]},
              {label: '울산 지역',
              backgroundColor: '#8D6E63',
              data: [this.rcounting('울산')]},
              {label: '부산 지역',
              backgroundColor: '#004D40',
              data: [this.rcounting('부산')]},
          ]
        },
        this.gender = {
          labels:['남성 ', '여성'],
          datasets: [
            {
              label: this.$moment(new Date()).format('YYYY-MM-DD')+' 예약 성별 비율',
              backgroundColor: ['#4DD0E1','#FF4081'],
              data: [this.today.length-this.gcounting(), this.gcounting()]
            }]
        },
        this.ager={
          labels:['10대 ', '20대', '30대', '40대'],
          datasets: [
            {
              label: '연령별 예약현황',
              backgroundColor: ['#EA80FC'],
              data: [this.acounting('1'), this.acounting('2'), this.acounting('3'), this.acounting('4')]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1))
      }
    }
  }
</script>
