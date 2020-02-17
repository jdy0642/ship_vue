<template>
<div>
  <component :is="$store.state.mainView"></component>
</div>
</template>
<script>
import Home from '@/components/Home.vue'
import Intro from '@/components/Intro.vue'
export default {
  components: {
    Home,Intro
  },
  data(){
    return {
    }
  },
  methods:{
  }
}
</script>
<style scoped>
</style>
