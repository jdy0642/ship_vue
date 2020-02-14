<template>
<div id="app" >
  <v-btn color="green darken-1" dark center @click="dialog = !dialog"  style="font-size:15px" > 카드 정보 수정 </v-btn>
    <v-dialog v-model="dialog" width="600px">
      <v-card >
        <v-card-title class="green darken-1 " font-color="white" > 방 정보 수정 </v-card-title>
        <v-container fluid  >
          <v-layout wrap  >
            <v-flex xs8  >
              <v-text-field center  v-model="title" label="제목" ></v-text-field>
              <v-text-field  label="내용" v-model="contents"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="update()">UPDATE</v-btn>
        <v-btn text color="red" @click="dialog = false">CANCEL</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>

</template>
<script>
import { store } from '@/store'
import axios from "axios"
export default {
   data(){
      return {
        dialog: false,
        title : store.state.selectGame.title,
        contents : store.state.selectGame.contents,
        rhost: store.state.selectGame.rhost,
        summonername: store.state.person.summonername
      }
    },
   methods:{
      update(){
        if(this.rhost==this.summonername){
          let url = `${store.state.context}/lol/update/${store.state.selectGame.cardseq}`
        let data =  {
        cardseq : store.state.selectGame.cardseq,
        title : this.title,
        contents : this.contents
        }
        let headers= {
               'authorization': 'JWT fefege..',
               'Accept' : 'application/json',
               'Content-Type': 'application/json'
        }
      axios
      .put(url, data,headers)
      .then(()=>{
        alert('카드 수정 성공')
        this.$router.push({path: '/lol'})
      })
      .catch(()=>{
         alert('axios fail')
        })



          }else{
            alert('자신이 만든 카드만 수정할 수 있습니다.')
          }
      }
   }
}
</script>
<style scoped>
.layout {
  justify-content:center;
}
.theme--light.v-card{
  color:white;
}

</style>