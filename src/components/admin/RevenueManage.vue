<template>
<div style="padding:0.5%;">

  <h2 style="margin:10px">지역별 예약 현황 페이지</h2>
  <v-divider></v-divider>
  <v-btn @click="onedaylist('y')" color="blue" style="margin:5px;float:right">어제 예약 보기</v-btn>
  <v-btn @click="onedaylist('t')" color="red" style="margin:5px;float:right">오늘 예약 보기</v-btn>
  <v-btn @click="weeklist()" color="orange" style="margin:5px;float:right">최근 일주일(오늘 제외) 예약 보기</v-btn>
  <v-row style="width:100%">
        <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          style="float:left;backgroundColor:#F0E5E2"
        >
        <line-chart :chart-data="ager"></line-chart>
        </v-card>
        </v-hover>
  <v-card
    class="mx-auto"
    style="float:right;backgroundColor:#F0E5E2;color:black"
  >
  <br>
  <h3 style="margin:10px"> {{day}} 예약 정보</h3>
  <br>
  <div float="right">
  <h4>총 예약 : {{today.length}}건</h4>
  <br>
  <h4>20대 여성 이용률: {{Math.floor(this.wgcounting('2')*100/this.today.length)}}%</h4>
  <h4>30대 여성 이용률: {{Math.floor(this.wgcounting('3')*100/this.today.length)}}%</h4>
  <h4>20대 남성 이용률: {{Math.floor(this.mgcounting('2')*100/this.today.length)}}%</h4>
  <h4>30대 남성 이용률: {{Math.floor(this.mgcounting('3')*100/this.today.length)}}%</h4>
  </div>
  </v-card>

  <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          style="float:right;backgroundColor:#F0E5E2"
        >
  <pie-chart :chart-data="gender"></pie-chart>
  </v-card>
        </v-hover>
        </v-row>
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          style="margin:10px;backgroundColor:#F0E5E2"
          max-height="500px"
        >
        <bar-chart :chart-data="barlist"></bar-chart>
        </v-card>
      </v-hover>
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
      this.onedaylist('t')
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
        barlist:null
      }
    },
    methods: {
      weeklist(){
        this.today = []
        this.day = '최근 일주일'
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
        return this.today.filter(t => (t.futsal.stadiumaddr.substr(0,2) == x)).length
      },
      rgcounting(x){
        return this.today.filter(t => (t.futsal.stadiumaddr.substr(0,2) == x && t.personseq.male == false)).length
      },
      gcounting(){
        return this.today.filter(t => (t.personseq.male == false)).length
      },
      acounting(a){
        return this.today.filter(t => (String(t.personseq.age).substr(0,1) == a)).length
      },
      wgcounting(a){
        return this.today.filter(t => (String(t.personseq.age).substr(0,1) == a && t.personseq.male == false)).length
      },
      mgcounting(a){
        return this.today.filter(t => (String(t.personseq.age).substr(0,1) == a && t.personseq.male == true)).length
      },
      onedaylist(t){
        this.today = []
        if(t == 'y'){
          this.day = this.yesterday
        }else{
          this.day = this.current
        }
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
          labels: ['전체 예약 현황','남성 예약 현황','여성 예약 현황'],
          fontColor : 'white',
          datasets: [
            {label: '서울 지역',
              backgroundColor: 'red',
              data: [this.rcounting('서울'),this.rcounting('서울')-this.rgcounting('서울'),this.rgcounting('서울')]},
             {label: '인천 지역',
              backgroundColor: 'orange',
              data: [this.rcounting('인천'),this.rcounting('인천')-this.rgcounting('인천'),this.rgcounting('인천')]},
              {label: '경기 지역',
              backgroundColor: '#64FFDA',
              data: [this.rcounting('경기'),this.rcounting('경기')-this.rgcounting('경기'),this.rgcounting('경기')]},
              {label: '세종 지역',
              backgroundColor: 'green',
              data: [this.rcounting('세종'),this.rcounting('세종')-this.rgcounting('세종'),this.rgcounting('세종')]},
              {label: '강원 지역',
              backgroundColor: '#76FF03',
              data: [this.rcounting('강원'),this.rcounting('강원')-this.rgcounting('강원'),this.rgcounting('강원')]},
              {label: '충남 지역',
              backgroundColor: 'blue',
              data: [this.rcounting('충남'),this.rcounting('충남')-this.rgcounting('충남'),this.rgcounting('충남')]},
              {label: '광주 지역',
              backgroundColor: '#4527A0',
              data: [this.rcounting('광주'),this.rcounting('광주')-this.rgcounting('광주'),this.rgcounting('광주')]},
              {label: '경상 지역',
              backgroundColor: '#8E24AA',
              data: [this.rcounting('경남'),this.rcounting('경남')-this.rgcounting('경남'),this.rgcounting('경남')]},
              {label: '대전 지역',
              backgroundColor: '#B388FF',
              data: [this.rcounting('대전'),this.rcounting('대전')-this.rgcounting('대전'),this.rgcounting('대전')]},
              {label: '대구 지역',
              backgroundColor: '#80D8FF',
              data: [this.rcounting('대구'),this.rcounting('대구')-this.rgcounting('대구'),this.rgcounting('대구')]},
              {label: '울산 지역',
              backgroundColor: '#8D6E63',
              data: [this.rcounting('울산'),this.rcounting('울산')-this.rgcounting('울산'),this.rgcounting('울산')]},
              {label: '부산 지역',
              backgroundColor: '#004D40',
              data: [this.rcounting('부산'),this.rcounting('부산')-this.rgcounting('부산'),this.rgcounting('부산')]},
              
          ]
        },
        this.gender = {
          labels:['남성 ', '여성'],
          datasets: [
            {
              label: this.$moment(new Date()).format('YYYY-MM-DD')+' 예약 성별 비율',
              backgroundColor: ['#4DD0E1','#FF4081'],
              data: [this.today.length-this.gcounting(), this.gcounting()]
            },
            ]
        },
        this.ager={
          labels:['10대 ', '20대', '30대', '40대'],
          
          datasets: [
            {
              label: '남성 예약',
              backgroundColor: ['rgba(38, 140, 194,0.8'],
              data: [this.mgcounting('1'), this.mgcounting('2'), this.mgcounting('3'), this.mgcounting('4')]
            },
            {
              label: '여성 예약',
              backgroundColor: ['rgba(212, 89, 61 ,0.8'],
              data: [this.wgcounting('1'), this.wgcounting('2'), this.wgcounting('3'), this.wgcounting('4')]
            }
          ]
        }
      }
    }
  }
</script>
