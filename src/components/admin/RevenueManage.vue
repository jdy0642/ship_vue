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
  <v-card-subtitle>담당 구장 수익 분석 페이지</v-card-subtitle>
  
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 20 : 2"
          class="mx-auto"
          style="margin:20px;background-color:white"
          width="95%"
        >
        <bar-chart :chart-data="datacollection"></bar-chart>
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
  export default {
    components: {
      BarChart,
      LineChart,
      PieChart
    },
    data () {
      return {
        selectday:'',
        datacollection: null,
        gender:null,
        ager:null,
        days: ['월요일', '화요일','수요일','목요일', '금요일', '토요일', '일요일']
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['월요일', '화요일','수요일','목요일', '금요일', '토요일', '일요일'],
          datasets: [
            {
              label: '서울 경기장',
              backgroundColor: '#FF1744',
              data: [
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt()
              ]
            }, {
              label: '인천 경기장',
              backgroundColor: '#FF6D00',
              data: [
                this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt()
              ]
            }, {
              label: '강원  경기장',
              backgroundColor: '#FFD600',
              data: [
                this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt()
              ]
            }, {
              label: '수원 경기장',
              backgroundColor: '#64DD17',
              data: [
                this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt()
              ]
            }, {
              label: '부산 경기장',
              backgroundColor: '#0091EA',
              data: [
                this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt(), 
              this.getRandomInt()
              ]
            }
          ]
        },
        this.gender = {
          labels:['남성 ', '여성'],
          datasets: [
            {
              label: '여성',
              backgroundColor: ['#4DD0E1','#FF4081'],
              data: [this.getRandomInt(), this.getRandomInt()]
            }]
        },
        this.ager={
          labels:['10대 ', '20대', '30대', '40대'],
          datasets: [
            {
              label: '예약현황',
              backgroundColor: ['#EA80FC'],
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
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
