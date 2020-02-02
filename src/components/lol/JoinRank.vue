<template>
<div>
<iframe src="https://tpc.googlesyndication.com/simgad/13058373737539427901?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkOn-z1pVHCuSOzCRSLZr5o1dOtvw" style="margin-top:30px" width="970px" height="300px" frameborder="0"></iframe>
    <v-row>
    <v-col>
    <v-responsive style="width:450px;margin-left:20px;">
      <v-card class="mx-auto"> 
      <v-img
      style="width:650px;height:350px"
      :src="require(`@/assets/img/lol/${state.selectGame.imgurl}.jpg`)" 
      >
      <div style="width:300px;height:350px;background-image:linear-gradient(to top, rgba(0, 0, 0, 0.7) 100%, transparent 160px)">
      <br />
      <v-img style="width:80px;" :src="state.selectGame.img" alt="" />
      <v-img style="width:20px;" src="https://www.mobachampion.com/static/imgs/mid_icon.59083eeab24c.png"></v-img>
      <v-card-text><v-icon >mdi-crown</v-icon> {{state.selectGame.rhost}}</v-card-text>
      <v-card-text>티어 : {{state.selectGame.crawltier}}</v-card-text>
          <v-card-text>승률 : {{state.selectGame.crawlrate}}</v-card-text>
          <v-card-text>내용: {{state.selectGame.contents}}</v-card-text>
          <v-card-text>타이틀: {{state.selectGame.title}}</v-card-text>
          <v-card-text>카드시퀀스: {{state.selectGame.cardseq}}</v-card-text>
      </div>
      </v-img>
      </v-card>
    </v-responsive>
      <v-btn center style="margin-top:30px" @click="deleteRoom()"><v-icon>mdi-close</v-icon></v-btn>
  <v-responsive style="width:300px;margin-left:30px;margin-top:10px">
    <v-card style="color:white;margin-right:5px;margin-top:5px;width:300px;height:400px">
      <v-btn fab dark color="indigo" style="margin-top:150px" >
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-card>
  </v-responsive>
  </v-col>
  <v-responsive>
    <iframe src="http://localhost:3000" style="margin-top:10px" width="450px" height="800px" frameborder="0"></iframe>
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
import {store} from "@/store"
export default {
  data(){
    return {
      state:store.state,
      // logs: [],
      // msg: null,
      context:'http://localhost:8080',
      temp:'',
    }
  },
  methods: {
    modifyRoom(){
      this.$router.push({path:`/login`})
      },
    deleteRoom(){
     let result = confirm("지우시겠습니까?");
      if(result){
        let url = `/lol/delete/${this.state.selectGame.cardseq}`
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
        alert("저런~ ");
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
  created(){
    // let url = `http://localhost:8080/lol/summoner/userName=${this.state.person.summonername}`
    // axios
    // .get(url)
    // .then(res=>{
    //   this.temp = res.data[0]
    //   this.summonername = res.data[0].summonername
    // })
    let url2 = `http://192.168.5.46:3000`
    axios
    .get(url2)
    
  },
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