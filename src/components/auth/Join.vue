<template>
<div id="app">
  <v-btn color="indigo darken-1" dark fixed center @click="dialog = !dialog" style="font-size:15px"> 회원가입 </v-btn>
    <v-dialog v-model="dialog" width="600px"  >
      <v-card>
        <v-card-title class="red darken-2" style="font-color:white" > 아이디 생성 </v-card-title>
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

                <v-flex xs8 md8 style="padding:0px;">
                    <v-text-field v-model="job" style="margin:0px;" required label="직업"></v-text-field>
                </v-flex>

                <v-flex xs8 md8>
                  <v-select v-model="male" :items="['남', '여']" label="성별" required></v-select>
                </v-flex>

               <v-flex xs8 md8 style="padding:0px;">
                    <v-text-field v-model="age" style="margin:0px;" required label="나이"></v-text-field>
                </v-flex>

                <v-flex xs8 md8> 
                  <v-autocomplete v-model="interest" label="관심사" :items="['풋살', '야구(준비중입니다)', '테니스(준비중입니다)', '롤', 
                  '피파(준비중입니다)', '배틀그라운드(준비중입니다)', '오버워치(준비중입니다)']" required ></v-autocomplete>
                  <!-- <v-text-field
                  label="소환사 닉네임을 입력해주세요"
                  single-line
                  solo
                  v-if="inertest === '롤'"
                ></v-text-field>
                <div
                v-else
                ></div> -->
                </v-flex>

                <v-flex xs8 md8> 
                  <v-checkbox v-model="checkbox" :rules="[v => !!v || '선택하셔야 가입이 진행됩니다!']"
                            label="위의 정보를 제공하는 것에 동의하십니까?" required></v-checkbox>
                </v-flex>

              </v-layout>
            </v-container>
        </v-form>

        
        <v-card-actions >
          <v-spacer></v-spacer>
          <!-- <v-btn text color="success" @click="$refs.form.validate()"> validate</v-btn> -->
          <v-btn text color="warning" @click="$refs.form.reset()"> Reset</v-btn>
          <v-btn text color="primary" @click="join();$refs.form.reset()">Submit</v-btn>
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
    name: 'join',
    data () {
      return {
        dialog:false,
        show1: false,
        checkbox:false,
        idRules: [
          v => !!v || '아이디를 입력해주세요',
          v => v.length <= 10 || '아이디는 10자를 넘을 수 없습니다',
        ],
        emailRules: [
          v => !!v || '이메일을 입력해주세요',
          v => /.+@.+/.test(v) || '유효하지 않은 이메일 형태입니다',
        ],
        // date: null,
      //   trip: {
      //     name: '',
      //     location: null,
      //     start: null,
      //     end: null,
      // },
        select: null,
        userid:'',
        passwd:'',
        name: '',
        tel:'',
        email:'',
        job:'',
        male:'',
        age:'',
        interest:'',
        context: store.state.context,
        summonername : ''
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
      },
      methods:{
      join(){
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
          interest:this.interest,
          summonername:this.summonername
        }
        let headers= {
              'authorization': 'JWT fefege..',
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
        }
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