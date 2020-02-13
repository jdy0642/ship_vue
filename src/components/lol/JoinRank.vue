<template>
<div>
    <v-row>
    <v-col>
    <v-responsive style="width:300px;margin-left:40px;margin-top:30px;height:650px">
      <v-card class="mx-auto" style="margin-top:10px;height:700px"> 
        <v-img style="width:300px;height:600px" :src="require(`@/assets/img/lol/${state.selectGame.imgurl}.jpg`)">
          <div style="width:300px;height:600px;background-image:linear-gradient(to top, rgba(0, 0, 0, 0.7) 100%, transparent 160px)">
          <br />
            <!-- <v-img style="width:80px;" :src="state.selectGame.img" alt="" /> -->
            <!-- <v-img style="width:90px;" src="https://www.mobachampion.com/static/imgs/mid_icon.59083eeab24c.png"></v-img> -->
            <v-icon >mdi-crown</v-icon>
            <v-card-text> 소환사명: {{state.selectGame.rhost}}</v-card-text>
            <v-card-text>티어 : {{state.selectGame.crawltier}}</v-card-text>
                <v-card-text>승률 : {{state.selectGame.crawlrate}}</v-card-text>
                <v-card-text>카드 번호: {{state.selectGame.cardseq}}</v-card-text>
                <v-card-text>카드 제목: {{state.selectGame.title}}</v-card-text>
                <v-card-text>카드 내용: {{state.selectGame.contents}}</v-card-text>
          </div>
        </v-img>
      </v-card>
    </v-responsive>
      <v-row style="margin-left:55px">
        <update-room></update-room>
        <v-btn color="red" center style="margin-left:30px" @click="deleteRoom()"> 카드 삭제</v-btn>
      </v-row>
      
    </v-col>

    <v-col>

      <v-responsive style="width:380px;margin-left:10px;margin-top:35px;height:600px" v-if="!userCheck">
        <v-card color="grey darken-2" style="color:white;margin-right:5px;margin-top:5px;width:320px;height:650px">
          <v-btn fab dark color="indigo" style="margin-top:250px" @click="invite()">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-card>
      </v-responsive>
      
      <v-responsive style="width:300px;margin-left:40px;margin-top:30px;height:650px" v-else>
      <v-card class="mx-auto" style="margin-top:10px;height:700px"> 
        <v-img style="width:300px;height:600px" :src="require(`@/assets/img/lol/${state.selectGame.imgurl}.jpg`)">
          <div style="width:300px;height:600px;background-image:linear-gradient(to top, rgba(0, 0, 0, 0.7) 100%, transparent 160px)">
          <br />
            
            <!-- <v-img style="width:90px;" src="https://www.mobachampion.com/static/imgs/mid_icon.59083eeab24c.png"></v-img> -->
            <br>
            <v-card-text>소환사명: {{user}}</v-card-text>
            <v-card-text>티어 : {{temp2.tier}}</v-card-text>
            <v-card-text>승률 : {{temp2.rate}}</v-card-text>
            <v-card-text>모스트 챔피언 : {{temp2.most}}</v-card-text>
            <v-img style="width:80px;" :src="temp2.photo"/>
          </div>
        </v-img>
      </v-card>
    </v-responsive>

    <v-text-field type="text" v-model="user" style="width:300px;margin-left:10px;text-align-last:center"> </v-text-field>
            <v-btn @click="champCrawl()">유저 검색</v-btn>
            <br>
      <br>
      <p> 두게더봇에게 "어떤 기능이 있니?"" 라고 물어보세요! -> </p>
    </v-col>
  <v-responsive>
    <iframe src="https://frogue.danbee.ai/?chatbot_id=3ea62809-b698-4f16-aabb-e623a9227fe0" style="margin-top:25px;margin-bottom:50px;margin-right:30px" width="450px" height="860px" frameborder="0"></iframe>
  </v-responsive>
    
        <!-- <v-flex style="margin-right:5px; margin-top:5px">
          <v-card color="grey lighten-3">
            <v-toolbar dark color="primary darken-1">
              <v-toolbar-title center>채팅</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
        <v-list ref="chat" id="logs">
          <template v-for="(item, index) of logs">
            <v-subheader v-if="item" :key="index">{{ item }}</v-subheader>
          </template>
        </v-list>
            </v-card-text>
            <v-card-actions>
              <v-form @submit.prevent="submit">
              <v-text-field  xs12 v-model="msg" label="Message" single-line solo-inverted class="d-flex"></v-text-field>
              <v-btn x-large class="float-right" fab dark small color="primary" type="submit">
                <v-icon small dark>send</v-icon>
              </v-btn>
                </v-form>
            </v-card-actions>
          </v-card>
        </v-flex> -->
  </v-row>
</div>

</template>
<script>
import axios from "axios"
import { store } from "@/store"
import UpdateRoom from "@/components/lol/UpdateRoom.vue"
export default {
  components:{UpdateRoom},
  data(){
    return {
      dialog:false,
      state:store.state,
      context:store.state.context,
      temp:'',
      champ:'',
      champ2:'',
      user:'',
      temp2:'',
      selectGame:''
    }
  },
  created(){
    if(!store.state.selectGame.hasOwnProperty('cardseq')){
      axios.get(`${this.context}/lol/${this.$route.params.game}`)
      .then(res =>{
        store.state.selectGame = res.data
        this.selectGame = res.data
      })
    }
  },
  methods: {
    champCrawl(){
      let url = `${this.context}/lol/summoner/userName=${this.user}`
      axios
      .get(url)
      .then(res =>{
        this.state.userCheck = true  
        this.temp2 = res.data[0]
        if(this.temp2==undefined){
          alert('배치를 치지 않은 유저입니다')
        }
      })
      .catch(e=>{
        alert(e)
      })
    },
    invite(){
      alert("친구 초대 준비중")
    },
    deleteRoom(){
     let result = confirm("지우시겠습니까?");
      if(result){
        let url = `${this.context}/lol/delete/${this.state.selectGame.cardseq}`
           let headers = {
              'authorization': 'JWT fefege..',
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
                }
           let data = {
             cardseq: this.state.selectGame.cardseq
           }
           axios
           .delete(url, data, headers)
           .then(res =>{
              this.result = res.data
              // alert('방생성 완료!')
              this.$router.push({path:`/lol`})
           })
           .catch(e=>{
              alert('AXIOS FAIL'+e)
           })
      }else{
        alert("방 삭제를 실패하였습니다. ");
    }
          
      },
    // submit() {
    //   this.logs.push(this.msg);
    //   this.msg = "";
    // },
    lol(){
      this.$router.push({path:'/lol'})
    }
  },
  computed:{
    userCheck(){
      return store.state.userCheck}
  }
  // watch: {
  //   logs() {
  //     setTimeout(() => {
  //       this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
  //     }, 0);
  //   }
  // }
}
</script>
<style scoped>
#logs {
  height: 230px;
}

</style>