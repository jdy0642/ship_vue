<template>
<div style="height:975px;">
  <div class="panels">
    <div class="panels__container">
      <div class="panel">
        <div class="panel__content" style="background-image: url(https://previews.123rf.com/images/chaoss/chaoss1705/chaoss170500115/78035090-%EC%85%80-%EB%A3%B0-%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%A5%BC-%EB%A7%8C%EB%93%9C%EB%8A%94-%EC%A0%8A%EC%9D%80-%EB%82%A8%EC%9E%90-%EC%82%AC%EC%A7%84-%EC%9E%91%EA%B0%80-%EC%B9%B4%EB%A9%94%EB%9D%BC-%EB%A0%8C%EC%A6%88%EC%97%90-%EC%A4%91%EC%A0%90%EC%9D%84-%EB%91%A1%EB%8B%88%EB%8B%A4-.jpg);">
          <h3 @click="FIFA()" style="margin-left:100px" class="panel__title">PHOTO</h3>
          <!-- <input @click="FIFA()" type="button" value="FIFA" class="panel__title"/> -->
        </div>
      </div>
      <div href="#" class="panel">
        <div class="panel__content" style="background-image: url(https://pbs.twimg.com/media/DkQTOgHVsAEjxNY.jpg);">
          <h3 @click="lol()" class="panel__title">LOL</h3>
        </div>
      </div>
      <div href="#" class="panel">
        <div class="panel__content" style="background-image: url(https://static.fecam.net.br/thumbs/377/1391000_resize_1500_840.jpg)">
          <h3 @click="futsal()" class="panel__title">FUTSAL</h3>
        </div>
      </div>
      <div href="#" class="panel">
        <div class="panel__content" style="background-image: url(https://previews.123rf.com/images/piksel/piksel1510/piksel151000008/46571276-%EB%B0%94%EB%A6%AC-%EC%8A%A4%ED%83%80%EB%8A%94-%EC%BB%A4%ED%94%BC-%ED%95%84%ED%84%B0%EC%97%90-%EB%AC%BC%EC%9D%84-%EB%B6%93%EB%8A%94.jpg);">
          <h3 @click="Ball()" class="panel__title">COFFEE</h3>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  methods:{
    lol(){
      this.$router.push({path:'/lol'})
    },
    futsal(){
      this.$router.push({path:'/futsal'})
    },
    Ball(){
      alert('준비중입니다.')
    },
    FIFA(){
      alert('준비중입니다.')
    }
  }
}
</script>
<style scoped>
/* @offsetSize * 2 means the content won't appear to move at all. Set to a lower value for squishing effects. */
/*////////////////////////////////////////*/
/* Layout */
.panels {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
  pointer-events: none;
}
.panels__container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100%;
  width: 120%;
  margin: 0 -10%;
  visibility: hidden;
}
.panel {
  display: inline-block;
  height: 100%;
  visibility: visible;
  position: relative;
  overflow: hidden;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
}
/*////////////////////////////////////////*/
/* Image/Text Container */
.panel__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: center center no-repeat;
  background-size: cover;
}
.panel__content:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  transition: opacity 1s cubic-bezier(0.6, 0, 0.2, 1);
}
/*////////////////////////////////////////*/
/* Title */
.panel__title {
  pointer-events: auto;
  color: #FFF;
  position: relative;
  z-index: 1;
  transition: color 1s cubic-bezier(0.6, 0, 0.2, 1);
}
.panel__title:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  background: rgba(0, 0, 0, 0.7);
  border: solid 2px #FFC12D;
  z-index: -1;
  padding: 0.5em 1em;
  margin: -0.5em -1em;
  opacity: 0;
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
  transition: all 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
}
/*////////////////////////////////////////*/
/* Hover States */
.panel {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  transition: -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1), -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  /* Inactive panel */
  /* Override styles for an inactive panel AFTER the hovered panel */
  /* Active panel */
}
.panel .panel__content {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
  transition: -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1);
  transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1), -webkit-transform 1s cubic-bezier(0.6, 0, 0.2, 1);
}
.panel:last-child .panel__content {
  -webkit-transform: translateX(-15%);
          transform: translateX(-15%);
}
.panels:hover .panel {
  -webkit-transform: translate3d(20%, 0, 0);
          transform: translate3d(20%, 0, 0);
}
.panels:hover .panel .panel__content {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.panels:hover .panel .panel__content:before {
  opacity: 0.7;
}
.panels .panel:hover ~ .panel {
  -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
}
.panels .panel:hover ~ .panel .panel__content {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.panels .panel:hover {
  z-index: 2;
  -webkit-transform: translate3d(10%, 0, 0);
          transform: translate3d(10%, 0, 0);
  pointer-events: auto;
}
.panels .panel:hover:last-child {
  -webkit-transform: translate3d(-20%, 0, 0);
          transform: translate3d(-20%, 0, 0);
}
.panels .panel:hover .panel__content {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.panels .panel:hover .panel__content:before {
  opacity: 0;
}
.panels .panel:hover .panel__title {
  color: #FFC12D;
}
.panels .panel:hover .panel__title:before {
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
/*////////////////////////////////////////*/
/* Vertical layout */
.panels--stacked {
  /* Inactive panel */
  /* Override styles for an inactive panel AFTER the hovered panel */
  /* Active panel */
}
.panels--stacked .panels__container {
  width: 100%;
  height: 120%;
  margin: -10% 0;
  flex-direction: column;
}
.panels--stacked .panel {
  height: 50%;
  width: 100%;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.panels--stacked .panel .panel__content {
  -webkit-transform: translate3d(0, 10%, 0);
          transform: translate3d(0, 10%, 0);
}
.panels--stacked .panel:last-child .panel__content {
  -webkit-transform: translate3d(0, -10%, 0);
          transform: translate3d(0, -10%, 0);
}
.panels--stacked:hover .panel {
  -webkit-transform: translate3d(0, -10%, 0);
          transform: translate3d(0, -10%, 0);
}
.panels--stacked:hover .panel .panel__content {
  -webkit-transform: translate3d(0, 14%, 0);
          transform: translate3d(0, 14%, 0);
}
.panels--stacked .panel:hover ~ .panel {
  -webkit-transform: translate3d(0, 10%, 0);
          transform: translate3d(0, 10%, 0);
}
.panels--stacked .panel:hover ~ .panel .panel__content {
  -webkit-transform: translate3d(0, -14%, 0);
          transform: translate3d(0, -14%, 0);
}
.panels--stacked .panel:hover {
  -webkit-transform: translate3d(0, 10%, 0);
          transform: translate3d(0, 10%, 0);
}
.panels--stacked .panel:hover:last-child {
  -webkit-transform: translate3d(0, -10%, 0);
          transform: translate3d(0, -10%, 0);
}
.panels--stacked .panel:hover .panel__content {
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
/* Responsive */
@media (max-width: 350px) {
.panels {
    /* Inactive panel */
    /* Override styles for an inactive panel AFTER the hovered panel */
    /* Active panel */
}
.panels .panels__container {
  width: 100%;
  height: 120%;
  margin: -10% 0;
  flex-direction: column;
}
.panels .panel {
  height: 50%;
  width: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.panels .panel .panel__content {
  -webkit-transform: translate3d(0, 10%, 0);
  transform: translate3d(0, 10%, 0);
}
.panels .panel:last-child .panel__content {
  -webkit-transform: translate3d(0, -10%, 0);
  transform: translate3d(0, -10%, 0);
}
.panels:hover .panel {
  -webkit-transform: translate3d(0, -10%, 0);
  transform: translate3d(0, -10%, 0);
}
.panels:hover .panel .panel__content {
  -webkit-transform: translate3d(0, 14%, 0);
  transform: translate3d(0, 14%, 0);
}
.panels .panel:hover ~ .panel {
  -webkit-transform: translate3d(0, 10%, 0);
  transform: translate3d(0, 10%, 0);
}
.panels .panel:hover ~ .panel .panel__content {
  -webkit-transform: translate3d(0, -14%, 0);
  transform: translate3d(0, -14%, 0);
  }
.panels .panel:hover {
  -webkit-transform: translate3d(0, 10%, 0);
  transform: translate3d(0, 10%, 0);
}
.panels .panel:hover:last-child {
  -webkit-transform: translate3d(0, -10%, 0);
  transform: translate3d(0, -10%, 0);
}
.panels .panel:hover .panel__content {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
}
/*////////////////////////////////////////*/
/* Specific Design Setup */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/oswald/v29/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUZiYA.ttf) format('truetype');
}
.panel__title {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 2.5em;
  letter-spacing: 0.1em;
}
@media (max-width: 800px) {
  .panel__title {
    font-size: 1.5em;
  }
}
@media (max-width: 600px) {
  .panel__title {
    font-size: 1.25em;
  }
}
html,
body {
  height: 100%;
}
</style>