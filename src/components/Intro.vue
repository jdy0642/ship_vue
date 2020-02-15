<template>
<div>
  
  <v-col>프로젝트: </v-col>
  <v-col >
    <v-btn @click="home()" >
      프로젝트
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
      this.$emit('send','Home')
    },
  }

};
</script>