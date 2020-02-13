<template>
<v-card class="d-flex justify-space-around pa-1" elevation="20">
  <v-btn style="margin-top:7px" @click="prev()"><v-icon>keyboard_arrow_left</v-icon></v-btn>
  <v-btn v-for="(time,index) in timeArray" :key="index"
    class="d-inline" rounded max-width="120" max-height="80" min-height="50" min-width="70"  
    :color="selected(time,selectTime)" @click="tableChange(index,time)">
    {{timeToDateAndWeek(time)}}
  </v-btn>
  <v-btn style="margin-top:7px" @click="next()"><v-icon>keyboard_arrow_right</v-icon></v-btn>
    <!-- 부트스트랩
    <button @click="tableChange(index,time)" :class="selected(time,selectTime)">{{timeToDateAndWeek(time)}}</button> -->    
</v-card>  
</template>
<script>
import {store} from '@/store'
export default {
  data () {
    return {
      now : Date.now(),
      selectIndex : 0,
      selectTime : '',
      blockSize : 8,
      fnc: store.state.futsal.fnc,
    }
  },
  created(){
    this.selectTime = this.now
  },
  computed:{
    con(){
      return window.console
    },
    pageNation(){
      return `display: grid; grid-template-columns: repeat
        (${this.blockSize},${100/this.blockSize}%); height: 100%;`
    },
    timeArray(){
      const blockSize = this.blockSize
      const selectIndex = this.selectIndex
      const now = this.now
      //const start = (selectIndex > 14-blockSize ? 14-blockSize :
      //  (selectIndex==0 ? selectIndex : selectIndex - 1))
      const start = selectIndex >= 14-blockSize ? 14-blockSize : selectIndex
       return Array.from({length : blockSize},
      (_,k) => ((start == 0 && k == 0) ? now : this.fnc.utc(now) + (start+k)*24*1000*3600))
    }
  },
  methods: {
    timeToDateAndWeek(time){
      const temp = new Date(time)
      const date = temp.getDate()
      return `${(date==1 ? temp.getMonth()+1: '')} ${date} ${["일","월","화","수","목","금","토"][temp.getDay()]}`
    },
    tableChange(index,time){
      this.selectTime = time
      this.con.log('index ='+index+'  selectIndex='+this.selectIndex)
      this.selectIndex = (this.selectIndex >= 6 ? 6 : this.selectIndex) + index
      this.con.log('selectIndex ='+this.selectIndex)
      this.$emit("sendTime",time)
    },
    selected(time,selectTime){
      // 부트스트랩  return "vspButton " + (time == selectTime ? "selected" : "") bootstrap
      return (time == selectTime ? "#319bde" : "#a5cae8")
    },
    prev(){
      if(this.selectIndex != 0){
        this.tableChange(this.selectIndex <= 6 ? -1 : this.selectIndex - 7, (this.selectIndex == 1 ?
          this.now : this.selectTime-3600*1000*24))
      }
    },
    next(){
      if(this.selectIndex != 13){
        this.tableChange(this.selectIndex <= 6 ? 1 : this.selectIndex - 5 ,
          this.fnc.utc(this.now) + 3600*1000*24*(this.selectIndex+1))
      }
    }
  }
}
</script>
<style scoped>
/* 부트스트랩
  .vspButton {
  max-width: 100px;
  min-width: 80px;
  height: 50px;
  padding: 2px 7px;
  font-size: 12px;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid;
  border-radius: 4px;
  background-color: transparent;
}*/
.selected{
  background-color: #31b0d5;
}

</style>