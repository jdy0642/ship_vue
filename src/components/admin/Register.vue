<template>
<div>
<v-row style="margin:1%;float:left;text-align:center;">
<v-card style="text-align:center;width:650px;">
<h2>구장 등록 페이지</h2>
    <div style="margin:3%;padding:3%">
    <fut-map :style="`height: 500px; width:100%;`"
      :propSearchWord="`${searchWord} 풋살 경기장`"
      @sendStadiumName="setStadium"
      mandatory></fut-map>
      <br>
      <h6 v-if="city==''" style="color:orange">아래 필드에 지역을 검색 후 위의 지도에서 해당 구장을 선택해주세요!</h6>
    <v-text-field :value="stadiumName" @keyup.enter="submit"></v-text-field>
          <v-text-field
            label="등록자 이름"
            outlined
            v-model="state.person.name"
          ></v-text-field>
          <v-text-field
            label="등록자 연락처"
            v-model="state.person.tel"
            outlined
          ></v-text-field>
          <v-text-field
            label="등록자 이메일"
            v-model="state.person.email"
            outlined
          ></v-text-field>
          <v-text-field
            label="구장 주소"
            v-model="searchResult.address_name"
            outlined
          ></v-text-field>
          <v-text-field
            label="구장 연락처"
            v-model="searchResult.phone"
            outlined
          ></v-text-field>
          <v-card-text>
      <h2 class="title mb-1">경기장 옵션</h2>
      <v-sheet elevation="5" class="py-4 px-1">
      <v-chip-group
        v-model="selectitems"
        column
        multiple
      >
        <v-chip filter outlined value="wear">운동복 대여</v-chip>
        <v-chip filter outlined value="shoes">풋살화 대여</v-chip>
        <v-chip filter outlined value="park">주차 가능</v-chip>
        <v-chip filter outlined value="shower">샤워 가능</v-chip>
      </v-chip-group>
      </v-sheet>
      <h2 class="title mb-1">성별</h2>
    <v-sheet elevation="5" class="py-4 px-1">
      <v-chip-group
        v-model="gender"
        column
        solo
        mandatory
      >
        <v-chip filter outlined value="male">남성 매치</v-chip>
        <v-chip filter outlined value="female">여성 매치</v-chip>
      </v-chip-group>
      </v-sheet>
      <h3 class="title mb-1">난이도</h3>
      <v-sheet elevation="5" class="py-4 px-1">
      <v-chip-group
        v-model="difficulty"
        column
        solo
        mandatory
      >
        <v-chip filter outlined value="1">일반인  매치</v-chip>
        <v-chip filter outlined value="2">중급자 매치</v-chip>
        <v-chip filter outlined value="3">상급자 매치</v-chip>
      </v-chip-group>
      </v-sheet>
    </v-card-text>
<template>
  <v-card float="center">
<label class="col-md-3 col-form-label" for="disabled-input">경기 예약  비용</label>
<v-radio-group v-model="price" row :mandatory="true">
      <v-radio label="10000원" value="10000원"></v-radio>
      <v-radio label="15000원" disabled></v-radio>
      <v-radio label="20000원" disabled></v-radio>
      <v-radio label="25000원" disabled></v-radio>
      <v-radio label="30000원" disabled></v-radio>
    </v-radio-group>
</v-card>
</template>
<br />
<template>
  <v-card>
<label class="col-md-3 col-form-label" for="select1">경기 인원 선택</label>
<v-card-text>
      <v-slider
        v-model="num"
        :tick-labels="ticksLabels"
        :max="2"
        step="1"
        ticks="always"
        tick-size="3"
      ></v-slider>
    </v-card-text>
</v-card>
</template>
<br />
<v-textarea
          v-model="textbox"
          outlined
          name="input-7-4"
          label="구장 특이사항"
        ></v-textarea>
</div>
</v-card>

<div text-align="center" style="margin:50px" >
    <h3 class="card-title" >등록 날짜 & 시간 연동</h3>
 <v-date-picker 
  margin:auto
  v-model="picker"
  :allowed-dates="allowedDates"
  value
  left
  width="300"
  color = "blue"
  locale="ko"
  >
  <v-btn text outlined color="primary" @click="changedate()" bold>---------해당 날짜 날씨 연동---------</v-btn>
  </v-date-picker>
  <template>
<v-card
    width="300"
   left
   style="margin-top:20px;"
  color="#303030"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{picker}} {{city}}</v-list-item-title>
        <v-list-item-subtitle >5 day / 3 hour forecast!</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <legend></legend>
  <div >
    <v-card-text >
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{Math.ceil(temp-273.15)}}&deg;c
        </v-col>
        <v-col>
          <v-img
          :src="imgUrl"
          width="64"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
    <v-list-item>
      <v-img style="color:white"
      src="@/assets/cloud.png"
      ></v-img><v-list-item-title>날씨: {{cloud}}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-img
      src="@/assets/wind.png"
      ></v-img><v-list-item-title>풍속: {{wind}}m/s</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-img
      src="@/assets/humidity.png"
      ></v-img><v-list-item-title>습도: {{humidity}}%</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-img
      src="@/assets/thermometer.png"
      ></v-img><v-list-item-title>최고온도: {{Math.ceil(maxtemp-273.15)}}&deg;c / 최저온도: {{Math.ceil(mintemp-273.15)}}&deg;c</v-list-item-title>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="leng"
      :tick-labels="labels"
      class="mx-4"
      ticks
      @click="timebars"
    ></v-slider>
    <v-card-subtitle>해당 시간 날씨 확인 & 선택 후 등록!</v-card-subtitle>
    <v-dialog style="margin-tp[" v-model="dialog" persistent max-width="290" >
      <template v-slot:activator="{ on }" >
        <v-btn color="primary" style="width:150px;height:60px; float : left; margin:0 auto" dark v-on="on">구장 등록하기</v-btn>
        <v-btn class="warning" style="width:150px;height:60px; float : right; margin:0 auto" @click="cancel()">취소</v-btn>
      </template>
      <v-card color="#546E7A" >
        <v-card-title >등록을 확인해주세요</v-card-title>
        <v-card-text color="black">등록한 경기장: {{stadiumName}}
        <br />등록한 시간: {{picker}} {{labels[time]}}시
        <br />등록 담당자: {{state.person.name}}
        <br />플레이어 1인당 경기 비용: {{price}}
        <br />경기인원: {{parseInt(num)+4}} vs {{parseInt(num)+4}}
        <br />구장 특이사항: {{textbox}}
        <br />경기 성별: {{gender}}
        <br />경기 난이도: {{difficulty}}
        <br />경기장 옵션: {{selectitems}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="success" @click="register()">등록하기</v-btn>
          <v-btn class="warning" text @click="dialog = false">돌아가기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
<br />
  </v-card>

</template>

</div>
</v-row>
</div>
</template>
<script>
import { store } from '@/store'
import axios from 'axios'
import FutMap from '@/components/contents/futsal/FutMap.vue'
export default {
  components:{
    FutMap
  },
  computed:{
    searchWord(){
      return this.stadiumName
    },
    arrNum(){
      return ['1','2','3','4','5','6','7','8','9','a','b','c'][parseInt(Math.random()*12)]
    }
  },
   data(){
      return{
      context: store.state.context,
      gender : 'male',
      difficulty : '1',
      selectitems : [],
      selectoptions : [],
      dialog : false,
      stadiumName : '신촌',
      searchResult : '',
      picker : this.$moment(new Date()).format('YYYY-MM-DD'),
      labels : [],
      temp : '',
      mintemp : '',
      maxtemp : '',
      city : '',
      img : '',
      imgUrl : '',
      adata : [], 
      bdata : [],
      wind : '',
      humidity : '',
      today:'',
      time:'',
      temptime:'',
      timebar:[],
      cloud:'',
      state:store.state,
      select: [],
      textbox:'',
      value: 0,
      num: 0,
      ticksLabels: [
        '4 vs 4',
        '5 vs 5',
        '6 vs 6',
      ],
      leng:'',
      price:'10000원',
      remain:'',
      fnc: store.state.futsal.fnc,
      }
    },
   methods:{
    bringWeather(){
      let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.searchResult.y}&lon=${this.searchResult.x}&APPID=cd9a51369c3fc19f9fb85b2f2508b5d5`
      axios
      .get(url)
      .then(res=>{
        this.adata = res.data
        this.city = this.adata.city.name
        this.adds()
      }).catch(()=> alert('날짜를 조정해주세요'))
    },
    setStadium(stadiumName){
      this.timebar = []
      this.searchResult = stadiumName
      this.stadiumName = stadiumName.place_name
      this.mapTogle = stadiumName==='' ? false : true
      this.bringWeather()
    },
    submit(event){
      this.stadiumName = event.target.value
    },
    show(x,y){
      this.temp=this.timebar[x][y].main.temp
      this.humidity = this.timebar[x][y].main.humidity
      this.maxtemp=this.timebar[x][y].main.temp_max
      this.mintemp=this.timebar[x][y].main.temp_min
      this.img = this.timebar[x][y].weather[0].icon
      this.wind = this.timebar[x][y].wind.speed
      if(parseInt(this.timebar[x][y].clouds.all)<25) {
        this.cloud = '맑음'
      }else if(parseInt(this.timebar[x][y].clouds.all)<45){
        this.cloud = '구름 조금'
      }else if(parseInt(this.timebar[x][y].clouds.all)<65){
        this.cloud = '흐림'
      }else{
        this.cloud = '매우 흐림'
      }
      this.imgUrl = `http://openweathermap.org/img/wn/${this.img}@2x.png`
    },
    register(){
      if(this.city == ''){
        alert('구장을 선택해주세요')
      }else{
        this.dialog = false
      let url = `${this.context}/futsal/register`
      this.selectitems.push('size')
      let data =  {
        stadiumname : this.stadiumName,
        time : this.timebar[this.temptime][this.time].dt*1000,
        stadiumtel : this.searchResult.phone,
        stadiumaddr : this.searchResult.address_name,
        adminname : store.state.person.name,
        num : this.num + 4,
        shoes : 'shoes1',
        stadiumimg : `${this.arrNum}1,${this.arrNum}2,${this.arrNum}3`,
        remain : (this.num + 4) * 2 + 4,
        gender : this.gender,
        difficulty : this.difficulty,
        stadiumfacility : 
          ['size','shower','park','shoes','wear'].map(i=>
            this.selectitems.includes(i) ? `${i}1` : `${i}0`
          ).join()
      }
      let headers= {
        'authorization': 'JWT fefege..',
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
      axios
      .post(url, data, headers)
      .then(res=>{
        alert(res.data ? '등록 성공' : '등록 실패')
        this.$router.push({path:'/futsal'})
      })
      .catch(e=>{
         alert('방 생성 실패 error code=>'+e)
      })
      }
      
    },
      cancel(){
         alert('취소 버튼 ')
    },
      refresh(){
         alert('초기화  버튼 ')
    },
    timebars(){
      this.show(this.temptime,this.time)
    },
    adds(){
        for(let i=0;i<40;i++){
        if(parseInt(this.$moment(this.adata.list[i].dt*1000).format('H'))===0){
          this.bdata.push(i)
          }
        }
      this.timebar.push(this.adata.list.slice(0,this.bdata[0]))
      this.timebar.push(this.adata.list.slice(this.bdata[0],this.bdata[1]))
      this.timebar.push(this.adata.list.slice(this.bdata[1],this.bdata[2]))
      this.timebar.push(this.adata.list.slice(this.bdata[2],this.bdata[3]))
      this.timebar.push(this.adata.list.slice(this.bdata[3],this.bdata[4]))
      this.timebar.push(this.adata.list.slice(this.bdata[4],40))
      this.changedate()
    },
    changedate(){
      // alert((new Date(this.picker)-new Date(this.$moment(new Date()).format('YYYY-MM-DD')).getTime())/86400000)
      this.temptime =(new Date(this.picker)-new Date(this.$moment(new Date()).format('YYYY-MM-DD')).getTime())/86400000
      this.time=0
      this.leng = this.timebar[this.temptime].length-1

      this.show(this.temptime,this.time)
      this.timebar[this.temptime,this.time]; 
      this.labels = []
      this.timebar[this.temptime].map(i=>{    
          this.labels.push(this.$moment(i.dt*1000).format('H'))
      })
      

      /* for(let i=0;i<40;i++){
        this.labels.push(this.$moment(this.timebar[this.temptime][i].dt*1000).format('H'))
      } */
      // for(let i=parseInt(this.bdata[4]);i<40 ;i++){
      //   this.labels.push(this.$moment(this.timebar[4][i].dt*1000).format('H'))
      // }
      
    },
    allowedDates(val){
      let nowDate = this.fnc.utc(Date.now())
      let valDate = this.fnc.utc(Date.parse(val))
      return nowDate <= valDate && valDate <= (nowDate + 3600*1000*24*5)
    }
  },
}
</script>
<style scoped>

</style>