<template>
  <v-carousel cycle interval="2000">
    <v-carousel-item
      v-for="(item, i) of propImg" :key="i" :src="item">
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default{
  props: {
		propImg: {type: Array}
  },
}
</script>
<style scoped>
</style>