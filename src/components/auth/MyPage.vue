<template>
<div style="height:940px;">
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title class="title">MY Page</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog1" persistent max-width="30%">
      <template v-slot:activator="{ on }">
        <v-btn color="green" dark v-on="on">회원정보수정</v-btn>
      </template>
      <v-card>
        <v-card-title class="green">
          <span class="headline">회원정보</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="아이디" v-model="userid" hint="변경불가" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="이름" v-model="name" hint="변경불가" ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" v-model="email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field :rules="rules" counter="25" label="Password*" 
                v-model="passwd" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="소환사명*" v-model="summonername" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="연락처*" v-model="tel" required></v-text-field>
              </v-col>
              
              <v-col cols="12"> 
                  <v-autocomplete v-model="interest" label="관심사" :items="['풋살', '야구(준비중입니다)', '테니스(준비중입니다)', '롤', 
                  '피파(준비중입니다)', '배틀그라운드(준비중입니다)', '오버워치(준비중입니다)']" required ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <medium>수정 완료후 저장버튼을 눌러주세요.</medium>
        </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="save()">저장</v-btn>
        <v-btn text color="red" @click="dialog1 = false">CANCEL</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar>
</v-card>
<v-card class="cardinfo" color="#26c6da"
  max-width="39%"
  max-height="18%">
  <v-card-title>
    <span class="font-weight-light">{{state.person.name}}</span>
    <v-card-text class="headline font-weight-bold">MY POINT
      <span>{{state.person.point}}원</span>
      <v-dialog v-model="dialog2" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">결제하기</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">결제 정보 입력</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                  :items="items"
                  v-model="value"
                  label="충전금액*"
                  required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>결제는 카카오페이로 진행됩니다</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog2 = false">취소</v-btn>
            <v-btn color="blue darken-1" text @click="pay(value)">결제</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-divider class="mx-4"></v-divider>
    </v-card-text>
  </v-card-title>
</v-card>
<v-container class="gameinfo">
    <v-expansion-panels v-for="(item,i) of 1" :key="i">
      <v-expansion-panel>
        <v-expansion-panel-header>Match 1</v-expansion-panel-header>
        <v-expansion-panel-content>
    <v-row style="justify-content:center;">
          <v-card style="margin:3%;" width="13%">
            <br>
                <p class="text-break" style="max-width: 4rem;">
                  {{timeToDate(array[0].resdate)}}
                </p>
    </v-card >
      <v-card style="margin:3%" class="title font-weight-light" width="33%" >
        <p></p>
        <v-text>경기장</v-text>
        <p></p>
        <v-text >{{array[0].futsal.stadiumname}}</v-text>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>개인득점</v-text>
        <p></p>
        <v-text>{{array[0].score}}득점</v-text>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>뛴 거리</v-text>
        <p></p>
        <v-text>{{array[0].km}}KM</v-text>
    </v-card>
    </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Match 2</v-expansion-panel-header>
        <v-expansion-panel-content>
    <v-row style="justify-content: center;">
          <v-card style="margin:3%;" width="13%">
            <br>
          <p
      class="text-break"
      style="max-width: 4rem;"
    >
      {{timeToDate(array[1].resdate)}}
    </p>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="33%">
        <p></p>
        <v-text>경기장</v-text>
        <p></p>
        <v-text>{{array[1].futsal.stadiumname}}</v-text>
        <br>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>개인득점</v-text>
        <p></p>
        <v-text>{{array[1].score}}점</v-text>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>런닝</v-text>
        <p></p>
        <v-text>{{array[1].km}}KM</v-text>
    </v-card>
    </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

            <v-expansion-panel>
        <v-expansion-panel-header>Match 3</v-expansion-panel-header>
        <v-expansion-panel-content>
    <v-row style="justify-content: center;">
          <v-card style="margin:3%;" width="13%">
            <br>
          <p
      class="text-break"
      style="max-width: 4rem;"
    >
      {{timeToDate(array[2].resdate)}}
    </p>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="33%">
        <p></p>
        <v-text>경기장</v-text>
        <p></p>
        <v-text>{{array[2].futsal.stadiumname}}</v-text>
        <br>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>개인득점</v-text>
        <p></p>
        <v-text>{{array[2].score}}점</v-text>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>런닝</v-text>
        <p></p>
        <v-text>{{array[2].km}}KM</v-text>
    </v-card>
    </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

            <v-expansion-panel>
        <v-expansion-panel-header>Match 4</v-expansion-panel-header>
        <v-expansion-panel-content>
    <v-row style="justify-content: center;">
          <v-card style="margin:3%;" width="13%">
            <br>
          <p
      class="text-break"
      style="max-width: 4rem;"
    >
      {{timeToDate(array[3].resdate)}}
    </p>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="33%">
        <p></p>
        <v-text>경기장</v-text>
        <p></p>
        <v-text>{{array[3].futsal.stadiumname}}</v-text>
        <br>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>개인득점</v-text>
        <p></p>
        <v-text>{{array[3].score}}점</v-text>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>런닝</v-text>
        <p></p>
        <v-text>{{array[3].km}}KM</v-text>
    </v-card>
    </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Match 5</v-expansion-panel-header>
        <v-expansion-panel-content>
    <v-row style="justify-content: center;">
          <v-card style="margin:3%;" width="13%">
            <br>
          <p
      class="text-break"
      style="max-width: 4rem;"
    >
      {{timeToDate(array[4].resdate)}}
    </p>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="33%">
        <p></p>
        <v-text>경기장</v-text>
        <p></p>
        <v-text>{{array[4].futsal.stadiumname}}</v-text>
        <br>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>개인득점</v-text>
        <p></p>
        <v-text>{{array[4].score}}점</v-text>
    </v-card>
      <v-card style="margin:3%" class="title font-weight-light" width="15%">
        <p></p>
        <v-text>런닝</v-text>
        <p></p>
        <v-text>{{array[4].km}}KM</v-text>
    </v-card>
    </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</v-container>
<div class="center">
  <div class="card">
    <div class="additional">
      <div class="user-card">
        <div class="level center">
          FutSal
        </div>
        <!-- 이미지 -->
        <img width="70%" height="35%" src="http://mblogthumb4.phinf.naver.net/MjAxODA0MTdfMjYx/MDAxNTIzOTIzOTU2MTE0.tKtnqOKqJas0q4h-RdyVZOQA0CfIisbvIdazrbBPB4kg.bO4IRWlDtIiZthVG0NmuyjK2TjkBAKprDUALHuZKv0Mg.PNG.gaogirl/%EC%B6%95%EA%B5%AC%EA%B3%B5.png?type=w800"
        style="margin-top: 60%;">
      </div>
      <div class="more-info">
        <h1>HITMAP</h1>
          <img width="100%" height="45%" src="http://tcpschool.com/lectures/img_webbasic_28.png" style="margin-top: 2%;">
        <div class="stats">
          <div>
            <div class="title">전적</div>
            <i class="fa fa-trophy"></i>
            <div style="margin-top:5px" class="value">{{state.person.win}}승</div>
          </div>
          <div>
            <div class="title">득점</div>
            <i class="fa fa-gamepad"></i>
            <div style="margin-top:5px" class="value">{{state.person.score}}점</div>
          </div>
          <div>
            <div class="title">런닝</div>
            <i class="fa fa-heartbeat"></i>
            <div style="margin-top:5px" class="value">{{state.person.km}}Km</div>
          </div>
          <div>
            <div class="title">경기수</div>
            <i class="fa fa-futbol"></i>
              <v-icon>sports_soccer</v-icon>
            <div style="margin-top:5px" class="value infinity">10회</div>
          </div>
        </div>
      </div>
    </div>
      <img class="futsalimg" src="https://s3.eu-north-1.amazonaws.com/norkring/_articleLandscape/iStock-1149063259.jpg?mtime=20190925151000">
  </div>
  <div style="margin-top:40px" class="card green">
    <div class="additional">
      <div class="user-card">
        <div class="level center">
          League of Legends
        </div>
        <!-- 이미지 -->
        <img width="70%" height="35%" src="https://i.pinimg.com/originals/b8/3e/6f/b83e6fea403a390bd06ae17c187408e3.png"
        style="margin-top: 60%;">
      </div>
      <div class="more-info">
        <h1 style="margin-top:5px;margin-left:7px">Tier : {{tier}}</h1>
        <img width="200px" height="150px" src="https://opgg-static.akamaized.net/images/medals/challenger_1.png?image=q_auto&v=1" style="margin-left: 30px;">
        <div class="stats" style="margin-left:30px">
          <div>
            <div class="title">LP</div>
            <i class="fa fa-gamepad"></i>
            <div class="value">{{lp}}</div>
          </div>
          <div>
            <div class="title">승</div>
            <i class="fa fa-thumbs-up"></i>
            <div class="value">{{win}}</div>
          </div>
          <div>
            <div class="title">패</div>
            <i class="fa fa-thumbs-down"></i>
            <div class="value">{{lose}}</div>
          </div>
          <div>
            <div class="title">승률</div>
            <i class="fa fa-bar-chart"></i>
            <div class="value infinity">{{winratio}}</div>
          </div>
        </div>
      </div>
    </div>
    <img class="futsalimg" src="https://www.gamingdose.com/wp-content/uploads/2019/10/Qiyana-Louis-Vuitton-768x455.jpg">
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
import {store} from "../../store"
export default {
  name: 'Payment',
  computed: {
    con(){
      return window.console
    }
  },
  data() {
    return {
      context : store.state.context,
      dialog1 : false,
      dialog2 : false,
      rules: [v => v.length <= 25 || 'Max 25 characters'],
      items: [5000, 10000, 20000, 50000],
      value:'',
      state: store.state,
      userid: store.state.person.userid,
      name: store.state.person.name,
      email: store.state.person.email,
      summonername: store.state.person.summonername,
      tel: store.state.person.tel,
      passwd:'',
      interest:'',
      temp:'',
      tier:'',
      photo:'',
      lp:'',
      win:'',
      lose:'',
      winratio:'',
      array:''
    }
  },
  created(){
  if(this.$route.query.hasOwnProperty('pg_token')){
      this.con.log('1')
      axios({
        url:`${store.state.context}/kakaopay/respones`,
        method: "POST",
        data: {token: this.$route.query.pg_token}
      }).then(res =>{
        if(res.data.msg == "success"){
          this.con.log('2')
          store.state.person = res.data.person
          this.getLol()
          if(this.state.person.role != 'customer'){
              this.state.authCheck = true
          }else{
              this.state.authCheck = false
          }
        }
      })
    }else if(store.state.person.hasOwnProperty('personseq')){
      this.con.log('else1')
      axios
      .post(`${store.state.context}/login`,
        {userid: store.state.person.userid, passwd : store.state.person.passwd})
        //store.state.header)
      .then(res=>{
        if(res.data.result == "SUCCESS"){
          store.state.person = res.data.person
          this.getLol()
          if(this.state.person.role != 'customer'){
              this.state.authCheck = true
          }else{
              this.state.authCheck = false
          }
        }else{
          alert(`로그인 실패`)
          this.$router.go({path: '/login'})
        }
      }).catch(()=>{
         alert('axios fail')
      })
    }
  },
  methods : {
  
    timeToDate(param){
          const time = new Date(param)
          return `${time.getFullYear()}년 ${(time.getMonth()+1)}월 ${time.getDate()}일 ${time.getHours()}시`
        },
    save(){
        let url = `${store.state.context}/save/${this.userid}`
        let data =  {
          email: this.email,
          passwd: this.passwd,
          summonername: this.summonername,
          tel:this.tel,
          interest:this.interest
        }
        let headers= {
               'authorization': 'JWT fefege..',
               'Accept' : 'application/json',
               'Content-Type': 'application/json'
        }
      axios
      .put(url, data,headers)
      .then(()=>{
        alert("수정되었습니다. 창을 닫아주세요")
        this.$router.push({path: '/mypage'})
      })
      .catch(()=>{
         alert('axios fail')
        })
      },
    pay(value){
      if(store.state.person.hasOwnProperty('personseq')){
        axios.get(`${store.state.context}/kakaopay/request/${store.state.person.personseq}/${value}`)
        .then(res=>{
          this.state.tid = res.data.tid
          window.location.href = res.data.next_redirect_pc_url
        })
      }else{
        alert('로그인하세요')
      }
    },
    getLol(){
      axios
      .get(`${this.context}/lol/summoner/userName=${this.state.person.summonername}`)
      .then(res=>{
        this.temp = res.data[0]
        this.tier = this.temp.tier
        this.lp = this.temp.lp
        this.win = this.temp.win
        this.lose = this.temp.lose
        this.winratio = this.temp.winratio
        /* this.crawltier = this.temp.tier
        this.crawlrate = this.temp.rate
        this.img = this.temp.photo */ 
      })
      .catch(e=>{
        alert('axios fail'+e)
      })
      axios
      .get(`${this.context}/res/mymatch/${this.state.person.personseq}`)
      .then(res=>{
        this.array = res.data
      })
      .catch(e=>{
        alert('axios fail'+e)
      })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Abel');
html, body {
  background: #FCEEB5;
  font-family: Abel, Arial, Verdana, sans-serif;
}
.center {
  position: absolute;
  top: 60%;
  left: 20%;
  -webkit-transform: translate(-50%, -50%);
}
.card {
  width: 49%;
  height: 300px;
  background-color: #fff;
  background: linear-gradient(#F8F8F8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
}
.card h1 {
  text-align: center;
}
.card .additional {
  position: absolute;
  width: 30%;
  height: 100%;
  background: linear-gradient(#DE685E, #EE786E);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}
.card.green .additional {
  background: linear-gradient(#92BCA6, #A2CCB6);
}
.card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
}
.card .additional .user-card {
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
}
.card .additional .user-card::after {
  content: "";
  display: block;
  position: absolute;
  top: 10%;
  right: -2px;
  height: 80%;
  border-left: 2px solid rgba(0,0,0,0.025);
}
.card .additional .user-card .level,
.card .additional .user-card .points {
  left: 50%;
  top: 15%;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  background: rgba(0,0,0,0.15);
  padding: 0.125rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
}
.card .additional .user-card .points {
  top: 85%;
}
.card .additional .more-info {
  width: 300px;
  float: left;
  position: absolute;
  left: 150px;
  height: 100%;
  font-size: 30px;
}
.card .additional .more-info h1 {
  color: #fff;
  margin-bottom: 0;
}
.card.green .additional .more-info h1 {
  color: #224C36;
}
.card .additional .coords {
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
}
.card.green .additional .coords {
  color: #325C46;
}
.card .additional .coords span + span {
  float: right;
}
.card .additional .stats {
  font-size: 2rem;
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  top: auto;
  color: #fff;
}
.card.green .additional .stats {
  color: #325C46;
}
.card .additional .stats > div {
  flex: 1;
  text-align: center;
}
.card .additional .stats i {
  display: block;
}
.card .additional .stats div.title {
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}
.card .additional .stats div.value {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
}
.card .additional .stats div.value.infinity {
  font-size: 1.4rem;
}
.card .general .more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1em;
}
.cardinfo{
  margin-right: 60%;
  margin-top: 1%;
}
.gameinfo{
  width: 60%;
  margin-left: 40%;
}
.paybtn{
  float: right;
}
.futsalimg{
  width: 100%;
  height: 100%;
}
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

</style>