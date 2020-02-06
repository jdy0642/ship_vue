<template>
<div style="padding:0.5%;">
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
        <bar-chart :chart-data="barlist"></bar-chart>
        </v-card>
      </v-hover>
      <div style="margin-top:10px">
  <v-btn @click="onedaylist('y')" color="blue" style="margin:5px">어제 예약 보기</v-btn>
  <v-btn @click="onedaylist('c')" color="red" style="margin:5px">오늘 예약 현황 보기</v-btn>
  <v-btn @click="weeklist()" color="orange" style="margin:5px">최근 일주일 예약 현황 보기</v-btn>
  </div>
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
      this.onedaylist('c')
    },
    data () {
      return {
        current:this.$moment(new Date()).format('YYYY-MM-DD'),
        yesterday:this.$moment(new Date()).subtract(1,'d').format('YYYY-MM-DD'),
        day:'',
        todayslabels:[],
        today:[],
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
      weeklist(){
        this.today = []
        axios
        .get(`${store.state.context}/res/weeklist`)
        .then(res =>{
          this.today = res.data
          this.fillData()
          })
          .catch(e=>{
          alert('weeklist AXIOS FAIL'+e)
        })
      },
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
      onedaylist(t){
        if(t === 'y'){
          this.day = this.yesterday
        }else{
          this.day = this.current
        }
        this.today = []
        let url = `${store.state.context}/res/onedaylist/${this.day}`
        let data = {
          day : this.day
        }
        let headers= {
        'authorization': 'JWT fefege..',
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
        axios
        .get(url,data,headers)
        .then(res =>{
          this.today = res.data
          this.fillData()
          })
          .catch(e=>{
          alert('one AXIOS FAIL'+e)
        })
      },
      fillData () {
        this.barlist = {
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
      }
    }
  }
</script>
