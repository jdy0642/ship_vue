<template>
<div id="wrapper">
     <header id="header" >
          <slot name="header" :title="header"></slot>
     </header>
     <section id="content" style="background-color:#303030;height:auto">
          <slot name="content" :content="content"></slot>
     </section>
     <footer id="footer">
          <v-footer dark padless  >
               <v-card flat tile class="flex" style="width:1982px;Padding:0px" height="auto">
                    <!-- <v-card-title style="place-content:center" >
                         <strong class="mt-1">푸터 타이틀</strong>
                    </v-card-title> -->
                    <!-- <v-divider></v-divider> -->
                    <v-card-text >
                    </v-card-text>
                    <v-card-text class=" white--text py-2" >
                         <v-row no-gutters> 
                              <v-col>
                              <v-icon size="30px"> mdi-soccer</v-icon>
                                   <span style="color:white"> 서비스 지역 </span> <br />
                                        <a >서울</a> <a style="margin-left:20px">경기</a><br />
                                        <a>인천</a> <a style="margin-left:20px">대전</a><br />
                                        <span>대구</span> <a style="margin-left:20px">부산</a><br />
                                        <span>전주</span> <a style="margin-left:20px">울산</a>
                              </v-col>
                              <v-btn v-for="icon of icons" :key="icon" class="mx-4 white--text" icon @click="socialgo()">
                              <v-icon size="24px">{{ icon }}</v-icon>
                         </v-btn>

                              <v-col>
                                   <v-img src="required(@/assets/together2.png)"></v-img>
                                   <span> 서울특별시 마포구 백범로 23 구프라자 지하1층 </span> <br />
                                   <span> 주식회사 doGether | 사업자번호 650-81-00575</span> <br />
                                   <span> 전화 010-6332-0641 | jdy0642@gmail.com</span> <br />
                                   <span> Copyright <strong>doGether</strong> All rights reserved. </span>
                              </v-col>
                         </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="white--text">
                         {{ new Date().getFullYear() }} — <strong>doGether</strong>
                    </v-card-text>
               </v-card>
          </v-footer>
     </footer>
</div>
</template>
<script>
export default {
     data(){
          return{
               header:'',
               content:'',
               footer:[
                    {text:'매치', title:'전체 매치'},
                    {text:'서비스 지역 ', title:'서울'},
                    {text:'소셜 미디어', title:'인스타그램'}
               ],
                icons: [
                         'mdi-facebook-box',
                         'mdi-twitter',
                         'mdi-google-plus',
                         'mdi-instagram',
    ]
          }
     },
     methods:{
          socialgo(){
        alert('준비중인 서비스 입니다.')
      }
    }
}
</script>
<style scoped>
#wrapper {
     text-align: -webkit-center;
     min-width:1200px;
}
header {
     height: 64px;
}
#content {
     /* margin: 0 auto; */
     /* width: 1400px; */
     /* float: left; */
     /* padding: 5px 15px; */
}
/* #sidebar {
     margin: 50px 0px 0px 0px;
     width: 350px;
     padding: 5px 15px;
     float: left; 
} */
footer {
     /* clear: both; */
}
/* 가로폭 980보다 작을 때 사용할 @media query */
@media screen and (max-width: 80px) {     
     #pagewrap {
           width: 94%;
     }
     #content {
           clear: both;
           padding: 1% 4%;
           width: auto;
           float: none;
     }
     #header, footer {
           padding: 1% 4%;
            width: auto;
     }
}
</style>