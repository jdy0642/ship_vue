<template>
<div id="app" >
<layout>
   <template #header>
    <v-app id="inspire" style="height:970px;">
  <fixed-header >

      <div >
        <v-toolbar class="sticky" color="blue darken-2">
          <v-toolbar-title class="white--text" style="margin-left:16%;" @click="home()" > 
            <v-img class="d-inline-flex" style="width:50px;margin-top:10px" src="@/assets/together2.png"></v-img>
            <h3 class="d-inline-flex" style="margin-left:5px;margin-bottom:10px">doGether</h3>
          </v-toolbar-title>

        <v-spacer></v-spacer>
          <v-toolbar-items  style="margin-right:12%;" >
            <v-row style="margin-right:85px; margin-top:12px;" v-if="!authCheck">
            </v-row>
            <v-row v-else>
              <v-btn text style="margin-right:3px;font-size:15px;margin-top:12px" class="white--text" @click="reservationmanage()">예약 관리</v-btn>
            </v-row>
            <v-row style="margin-right:85px; margin-top:12px;" v-if="!authCheck">
            </v-row>
            <v-row v-else>
              <v-btn text style="margin-right:3px;font-size:15px;margin-top:12px" class="white--text" @click="membermanage()">회원 관리</v-btn>
            </v-row>
            <v-row style="margin-right:85px; margin-top:12px;" v-if="!authCheck">
            </v-row>
            <v-row v-else>
              <v-btn text style="margin-right:3px;font-size:15px;margin-top:12px" class="white--text" @click="register()">구장 등록</v-btn>
            </v-row>
            <v-row style="margin-right:85px; margin-top:12px;" v-if="!authCheck">
            </v-row>
            <v-row v-else>
              <v-btn text style="margin-right:3px;font-size:15px;margin-top:12px" class="white--text" @click="revenuemanage()">예약 분석</v-btn>
            </v-row>
            <v-row style="margin-right:113px; margin-top:12px;" v-if="!authCheck">
              <join></join>
            </v-row>
            <v-row v-else>
              <v-btn text style="margin-right:3px;font-size:15px;margin-top:12px" class="white--text" @click="mypage()">마이페이지</v-btn>
            </v-row>
            <v-row style="margin-right:85px ; margin-top:12px"  v-if="!authCheck">
                <login></login>
            </v-row>
            <v-row style="margin-right:1px ; margin-top:12px" v-else >
                <v-btn text style="font-size:15px" class="white--text" @click="logout()">로그아웃</v-btn>
            </v-row>
            <v-row>
              <v-btn style="margin-top:12px;font-size:15px;margin-right:5px" color="blue darken-2" @click="$store.state.mainView = 'Intro'">개발자소개</v-btn>
            </v-row>
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn style="margin-top:12px;font-size:15px;margin-right:70px" color="blue darken-2" v-on="on">  컨텐츠  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item) of items" :key="item.title" @click="contgo(item.link)">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div >

          </v-toolbar-items>

        </v-toolbar>
      </div>
      </fixed-header>
        </v-app>
  </template>
   
<template #content> 
  <div id="app" style="width:67%;"  >
    <v-app id="inspire" >
        <v-card>
    <router-view></router-view>
      </v-card>
    </v-app>
  </div>
</template>
<template #footer>
</template>
  </layout>
</div>
</template>

<script>
import Login  from '@/components/auth/Login.vue'
import Join  from '@/components/auth/Join.vue'
import Layout from '@/components/cmm/Layout.vue'
import {store} from '@/store'
import FixedHeader from 'vue-fixed-header'
export default {
  name:'Home',
  components:{
    Layout, Login, Join, FixedHeader
  },
  data(){
   return{
     items: [
      { title: 'LOL' ,link:'/lol'},
      { title: 'FUTSAL', link:'/futsal' },
    ],
      state:store.state,
      hover: false,
      }
  },
  methods:{
    home(){
      this.$router.push({path:'/'})
    },
    logout(){
      this.state.person={}
      this.state.authCheck = false
      window.localStorage.removeItem('person')
      window.sessionStorage.removeItem('person')
      this.$router.push({path:'/'})
    },
    mypage(){
      this.$router.push({path:'/mypage'})
    },
    reservationmanage(){
      this.$router.push({path:'/reservationmanage'})
    },
    register(){
      this.$router.push({path:'/futsal/register'})
    },
    membermanage(){
      this.$router.push({path:'/membermanage'})
    },
    revenuemanage(){
      this.$router.push({path:'/revenuemanage'})
    },
    admin(){
      this.$router.push({path:'/admin'})
    },
    lol(){   
      this.$router.push({path:'/lol'})
    },
    futsal(){
      this.$router.push({path:'/futsal'})
    },
    sidego(x){
      this.$router.push({path:`${x}`})
    },
    contgo(x){
      this.$router.push({path:`${x}`})
    }, 
  },
  computed:{
    authCheck(){
      return store.state.authCheck}
  }
}
</script>
<style scoped>
.vue-fixed-header{
  z-index:1000;
  position: fixed;
  width: 100vw;
}
</style>