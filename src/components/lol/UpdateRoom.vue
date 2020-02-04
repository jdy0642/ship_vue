<template>
<div id="app" >
  <v-btn color="green darken-1" dark center @click="dialog = !dialog"  style="font-size:15px" > 방 정보 수정 </v-btn>
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
import axios from 'axios'
import {store} from '../../store'
export default {
   data(){
      return {
        context:store.state.context,
        checkbox: false,
        dialog: false,
        selectGame:store.state.selectGame,
        result : '',
        state : store.state,
        title : this.state.selectGame.title,
        contents : this.state.selectGame.contents,
      }
    },
   methods:{
      update(){
        let url = `${this.context}/lol/update`
        let data =  {
         title : this.title,
         contents : this.contents
        }
        let headers= {
               'authorization': 'JWT fefege..',
               'Accept' : 'application/json',
               'Content-Type': 'application/json'
        }
      axios
      .post(url, data,headers)
      .then(res=>{
        alert(res)
            this.$router.go({path: '/lol'})
      })
      .catch(()=>{
         alert('axios fail')
        })
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