<template>
<div>
  <component :is="view" @send="dd"></component>
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
      view: 'Intro'
    }
  },
  methods:{
    dd(){
      this.view = 'Home'
    }
  }
}
</script>
<style scoped>

</style>