<template>
<div >
        <router-view> </router-view>

  <br>
  <br>
  <v-col>프로젝트: </v-col>
  <v-col >
    <v-btn @click="home()" >
      <router-link to="/home">
      프로젝트
      </router-link>
    </v-btn> 
    <v-btn >
      PPT
    </v-btn> 
    <v-btn>
      유튜브
    </v-btn> 
    <v-btn href="https://github.com/jdy0642/ship_vue">
      프론트엔드 깃허브
    </v-btn> 
    <v-btn href="https://github.com/jdy0642/ship_project2">
      백엔드 깃허브
    </v-btn> 
  </v-col>
</div>
</template>

<script>
export default {
  components: {
  },
  methods:{
    home(){
    },
  }

};
</script>
