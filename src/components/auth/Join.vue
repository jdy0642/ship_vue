<template>
<div id="app">
  <v-btn color="blue darken-2" dark fixed center @click="dialog = !dialog" style="font-size:15px"> 회원가입 </v-btn>
    <v-dialog id="dialog" persistent v-model="dialog" width="600px" height="auto">
      <v-card >
        <v-card-title class="red darken-2" style="font-color:white" > 회 원 가 입 </v-card-title>
  <v-container>   
    <v-layout justify-center >
      <v-flex >
        <v-form ref="form">
            <v-container >
              <v-layout wrap justify-center>

              <!-- <v-text-field center prepend-icon="people" v-model="userid" label="ID" required></v-text-field>
              <v-text-field prepend-icon="lock" label="PASSWORD" type="password" v-model="passwd"></v-text-field> -->

                <v-flex md8 style="padding:0px;">
                  <v-text-field style="margin:0px;" v-validate="'required|max:10'"  required="required" outlined
                  center v-model="userid" label="아이디" :rules="idRules"></v-text-field>
                  <h9 v-if="bts == true" style="color:orange">중복된 아이디 입니다.</h9>
                </v-flex>

                <v-flex xs8 md8 style="padding:0px;">
                  <v-text-field  style="margin:0px;" label="비밀번호" v-model="passwd" outlined
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" required
                    :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"></v-text-field>
                </v-flex>

                <v-flex  md8 style="padding:0px;">
                  <v-text-field v-model="name" style="margin:0px;" required label="이름" class="purple-input"></v-text-field>
                </v-flex>
                
                <v-flex xs8 md8 style="padding:0px;">
                    <v-text-field v-model="tel" style="margin:0px;" required label="전화번호"></v-text-field>
                </v-flex>

                <v-flex  md8 style="padding:0px;">
                  <v-text-field style="margin:0px;" v-validate="'required|max:10'"  required
                  center v-model="email" label="이메일" :rules="emailRules"></v-text-field>
                </v-flex>

                <v-flex xs8 md8>
                  <v-select v-model="male" :items="['남', '여']" label="성별" required></v-select>
                </v-flex>

               <v-flex xs8 md8 style="padding:0px;">
                    <v-text-field v-model="age" :rules="ageRules" style="margin:0px;" required label="나이"></v-text-field>
                </v-flex>
                <v-flex  md8 style="padding:0px;">
                  <v-text-field v-model="summonername" style="margin:0px;" required label="롤 소환사명" 
                  class="purple-input" :v-validate="btsn"></v-text-field>
                  <v-btn @click="checksname()">소환사명 유효성 체크</v-btn>
                </v-flex>
                <h8 style="color:yellow"><br>{{textmsg}}</h8>
                
              </v-layout>
            </v-container>
        </v-form>

        
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn text color="success" @click="$refs.form.validate()"></v-btn> -->
          <!-- <v-btn text color="warning" @click="con.log($refs.form)"> console</v-btn> -->
          <v-btn text color="warning" @click="$refs.form.reset()"> Reset</v-btn>
          <v-btn text color="primary" @click="join($refs.form)" v-if="btsn != true">Submit</v-btn>
          <v-btn text color="primary" @click="join($refs.form)" v-else>Submit</v-btn>
          <v-btn text color="error" @click="dialog = false">Cancel</v-btn>
        </v-card-actions>

      </v-flex>
    </v-layout>
  </v-container>
    </v-card>
  </v-dialog>
</div>
</template>
<script>
import axios from 'axios'
import { store } from '@/store'
export default {
  computed:{
    con(){
      return window.console
    },
    btsnCheck(){
      return this.btsn
    }
  },
    name: 'join',
    data () {
      return {
        dialog:false,
        bts:'',
        btsn: false,
        show1: false,
        checkbox:false,
        idRules: [
          v => !!v || '아이디를 입력해주세요',
          v => v.length <= 10 || '아이디는 10자를 넘을 수 없습니다',
          () => false
        ],
        emailRules: [
          v => !!v || '이메일을 입력해주세요',
          v => /.+@.+/.test(v) || '유효하지 않은 이메일 형태입니다',
        ],
        ageRules:[
          //v => !!v || '숫자를 입력해주세요',
          v => /[0-9]/.test(v) || '숫자를 입력해주세요.',
          v => v <= 120 || '나이는 120을 넘을수 없습니다.',
        ],
        summonernameRules:[
          v => !!v || '롤아이디가 없으면 소환사명에 "휴가롤"을 입력해주세요.',
          () => this.btsnCheck || '유효성 검사를 해주세요.'
        ],
        select: null,
        userid:'',
        passwd:'',
        name: '',
        tel:'',
        email:'',
        job:'',
        male:'',
        age: '',
        interest:'',
        context: store.state.context,
        summonername : '',
        textmsg : '소환사명 유효성 검사를 해주세요.'
        }
      },
      watch:{
        interest: function(param){
        if(param === '롤'){
        let temp = prompt('소환사 닉네임 입력','')
        confirm('소환사의 닉네임이 '+temp+'이(가) 맞습니까?')
        this.summonername = temp
        }else{
          this.summonername = null
        }
      },
        userid: function(param){
          let url = `${this.context}/idcheck/${param}`
          let data = {userid : param}
        axios
        .get(url, data)
        .then(res=>{
            if(res.data === "SUCCESS"){
                this.bts = true
            }else{
              this.bts = false
            }
            
      })
        }
      },
      methods:{
      join(x){
        if(x.validate() && this.btsn){
          alert('조인 진입')
          alert(this.interest)
          let url = `${this.context}/join`
          let data =  {
            userid : this.userid,
            passwd : this.passwd,
            name: this.name,
            tel:this.tel,
            email:this.email,
            job:this.job,
            male:this.male=="남" ? true :false,
            age:this.age,
            point: 0,
            interest:this.interest,
            summonername:this.summonername
          }
          let headers= {
                'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
          }
          x.reset()
        axios
        .post(url, data, headers)
        .then(res=>{
            
              if(res.data.result === "SUCCESS"){
                  this.dialog= false
                  this.$router.push({path:'/'})
                  
              }else{
                  alert(`조인 실패`)
                  this.$router.go({path: '/login'})
              }
          this.interest = ''
          this.result = res.data
        })
        .catch(()=>{
          alert('axios fail')
          })
        }else{alert('조건을 충족해주세요.')}
      },
      checksname(){
        if(this.summonername){
          let url = `${this.context}/lol/checksname/${this.summonername}`
          axios
          .get(url)
          .then(res=>{
            if(res.data == 'success'){
              this.btsn = true
              this.textmsg = '등록가능한 소환사명 입니다.'
            }else{
              this.btsn = false
              this.textmsg = '등록 불가능한 소환사명 입니다.'
            }
          }).catch(e=>{
            alert('check axios fail error code->'+e)
          })
        }
      }
   }
    }
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans';
.theme--light.v-card{
  color:white;
}
</style>