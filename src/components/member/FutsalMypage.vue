<template>
<body>
<div class="container">
  <div class="header">
    <div class="menu1">나의경기</div>
    <div class="menu1">경기수 10회</div>
    <div class="menu1">득점수 20득점</div>
    <div class="menu1">MVP 5회</div>
      <div class="menu1">경고횟수 3회</div>
  </div>    
  <div class="item">부천 경기장</div>
  <div class="item">소셜 연동하기</div>
  <div class="hitmap">
  <img class="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxyvmnUl2qiQ-bgHT6EXd4joOPxiVevGRIJEYMxlpjKO3AaVY&s">
  </div>
  <div class="item">나의 전적 확인</div>
</div>
</body>
</template>
<style scoped>
.container{
    display: grid;
    grid-template-rows: 10px 50px 40px 200px;
    width: 100%;
    border: 1px solid black;
    margin: 10px;
      }
.header{
    border-color: red;
    border: 1px solid black;
    grid-column-start: 1;
    grid-column-end: 3;
}
.menu1{
    float: left;
    width: 20%;
    height : 100%;
    text-align: center;
}
.item{
    border: 1px solid black;
    font: 2em sans-serif;
    text-align: center;
}
.img1{
    border: 1px solid black;
    width: 296%;
    height: 199%;
}
.hitmap{
    border: 1px solid black;
    width: 100px;
    height: 100px;
}
</style>