<template>
<div>
	<section id="intro" class="fx-backstretch">
		<div id="nav-sticky-wrapper" class="sticky-wrapper" style="height: 60px;">
			<nav id="nav" style="z-index: 100; position: fixed; top: 0px;background-color: #0d2c5a;">
				<ul class="clearfix">
					<li><a href="#aboutme">인사 소개</a></li>
					<li><a href="#skills"><span>전문 </span>기술</a></li>
					<li @click="home()"><a>프로<span>젝트</span></a></li>
					<li><a href="https://docs.google.com/presentation/d/1o5tHUwNwtWDlnr3Zt-xLRiScTJ71kZAEodrei25sxRo/edit">PPT</a></li>
					<li><a href="#contact">연락처</a></li>
				</ul>
			</nav>
		</div>
	</section>
  <section id="aboutme" class="section">
    <div class="container">
      <div class="row">
        <div class="col-full centered">
          <h2 class="section-title">인사 소개</h2>
          <div class="centered line"></div>
        </div>
      </div>

      <div class="row section-content">
        <div class="col-1-3" style="text-align: center;">
          <img alt="접니다!" style="height: 400px;" src="@/assets/hsc.jpg">
        </div>
        <div class="col-1-3">
          <p>안녕하세요? 홍성철입니다!</p>
          <p>저는 훌륭하고 멋진 소프트웨어 개발을 즐겨하는 사람입니다. 포트폴리오도 만들었으니 <a @click="home()">여기를 누르시거나</a> 페이지 아래쪽에서 구경해 보세요! 도움이 필요하세요? 저하고 이야기해 보시겠어요? <a href="#contact">이메일</a>로 연락해 주세요.</p>
        </div>
        <div class="col-1-3">
          <h4>개인 관심사</h4>
          
          <p><a href="#skills">프로그래밍</a>을 하지 않을 때는 다음과 같은 것으로 소일하며 즐거운 생활을 하고 있답니다.</p>
			<ul>
				<li v-for="(item,index) of user.personal" :key="index">{{item}}</li>
			</ul>					
		</div>
      </div>
    </div>
  </section>
  <section id="skills" class="section-alt">
    <div class="container">
      <div class="row">
        <div class="col-full">
          <h2 class="section-title">SKILL</h2>
          <div class="centered line"></div>
        </div>
      </div>

      <div class="row section-content">
        <div class="skill-container" style="width:100%">
          <div class="col-1-5 skill">
            <h4>JAVA8</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>JAVASCRIPT</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>HTML5</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>MariaDB</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>ANSI-SQL</h4>
          </div>
        </div>
        <div class="col-full skill-container">
          <h3>USAGE</h3>
        </div>
        <div class="col-2-3 col-wrap centered skill-container">
          <div class="col-1-3">
            <h4>프레임워크</h4>
            <ul><li>SPRING4/5</li><li>전자정부</li><li>Vue</li><li>JQuery</li><li>MyBatis</li><li>Hibernate</li></ul>							
          </div>
          <div class="col-1-3">
            <h4>소프트웨어</h4>
			<ul><li>Window</li><li>Git</li><li>Git Desktop</li><li>STS3</li><li>STS4</li><li>Visual Studio Code</li></ul>		
			</div>
			<div class="col-1-3">
            <h4>데이터 베이스</h4>
			<ul><li>Oracle</li><li>MySQL</li><li>MariaDB</li></ul>			
			</div>
			
        </div>
		
      </div>
    </div>
  </section>
  <section id="contact" class="section">
    <div class="container">
      <div class="row">
        <div class="col-full">
          <h2 class="section-title">연락 주세요</h2>
          <div class="centered line"></div>
        </div>
      </div>

      <div class="row section-content">
        <div class="col-2-3 col-wrap centered text-center">
          <div class="row">
            <div class="col-full" style="margin-bottom: 25px;">
				홍성철 <br><br>
				<a href="https://github.com/hongsc1991">Git address</a><br>
			Phone Number : 010-6202-4102 <br>
              Email :  hongsc1991@naver.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import {store} from '@/store'
export default {
  components: {
  },
  data(){
	return {
			personal:[
				'유투브 래춘씨생존기를 줄겨봅니다.',
				'요즘하는게임은 위쳐3예요',
				'Go랭을 강의를 볼 생각입니다.',
			],
		}
	}
  },
  methods:{
    home(){
      store.state.mainView = 'Home'
    },
  }

};
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);

html, body { height: 100%; }

body {
	font-family: 'Nanum Gothic', sans-serif;
	margin: 0 auto;
	background-color: #fff;
	color: #333;
}

img { max-width: 100%; }

a {
	outline: 0!important;
	color: #5b9bbc;
}

a:hover {
	text-decoration: none;
}

a img {
	border: 0;
}

/* 1.1 Layout add-ons */

.bullet { padding-left: 5px; padding-right: 5px; }

.cool {
	font-size: 0.6em;
	line-height: 1.3em;
	vertical-align: top;
}

.line {
	display: block;
	width: 290px;
	height: 3px;
	padding: 0!important;
	background: #ccc;
}

.separator {
	width: 30px;
	height: 3px;
	background: #ccc;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;
	margin-bottom: 30px;
}

.text-center {
	text-align: center;
}

.text-right {
	text-align: right;
}

.centered {
	margin-left: auto;
	margin-right: auto;
	float: none;
}

.left { float: left!important; }
.right { float: right!important; }

/* 1.2 Section styling */

.section,
.section-alt {
	margin: 0 auto;
	padding: 75px 0;
	position: relative;
}

.section { background-color: #fff; }
.section-alt { background-color: #eee; }

.section-title {
	margin: 0 0 15px 0;
	padding: 0;
	font-size: 2.250em;
	font-weight: 300;
	color: #0f1025;
	text-transform: uppercase;
	display: block;
	text-align: center;
	letter-spacing: 0.1em;
}

.section-title .cool {
	line-height: 1.7em;
}

.section-content { margin-top: 30px; font-family: Malgun Gothic, sans-serif; font-size: 11pt; }

.section h3,
.section-alt h3 {
	font-family: 'Nanum Gothic', sans-serif;
	font-size: 1.5em;
	color: #222;
	text-transform: uppercase;
	letter-spacing: 0.1em;
}

.section h4,
.section-alt h4 {
	font-family: 'Nanum Gothic', sans-serif;
	font-size: 1em;
	color: #222;
	text-transform: uppercase;
	letter-spacing: 0.1em;
}

.column > :first-child { margin-top: 0; }

/* 1.3 Form elements */

input[type="text"], textarea {
	font-family: inherit;
	font-size: 1em;
	font-style: italic;
	width: 96%;
	padding: 0 2%;
	height: 40px;
	line-height: 40px;
	font-size: 1em;
	background-color: #ccc;
	border: 0;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	resize: none;
}

textarea {
	height: auto;
	line-height: 1.4em;
	padding: 2%;
}

label {
	display: block;
	text-transform: uppercase;
	letter-spacing: 0.15em;
	margin-bottom: 10px;
}

label.error {
	margin: 10px 0 0 0;
	font-size: 0.750em;
	color: #e76270;
}

input.error, textarea.error {
	/*-webkit-box-shadow: inset 0px 0px 4px 3px rgba(231, 98, 112, 0.5);
	box-shadow: inset 0px 0px 4px 3px rgba(231, 98, 112, 0.5);*/
	background-color: #ffe0d5!important;
}

.button {
	display: inline-block;
	color: #ffffff!important;
	background-color: #5b9bbc!important;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	border: none;
	text-transform: uppercase;
	text-decoration: none;
	letter-spacing: 0.15em;
	cursor: pointer;
}

.button:hover {
	color: #ffffff!important;
	background-color: #4081a3!important;
}

.button-small {
	padding: 5px 10px;
	font-size: 0.875em;
}

.button-medium {
	padding: 10px 15px;
	font-size: 1em;
}

.button-large {
	padding: 15px 20px;
	font-size: 1.125em;
}

/* 2. Intro */

#intro {
	width: 100%;
	height: 100%;
	position: relative;
	background-color: #0d2c5a;
	color: #fff;
}

#intro .line { background-color: #5b9bbc; }
#intro .bullet { color: #5b9bbc; }
#intro a { color: #5b9bbc; }

.top-decorations {
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	display: block;
	width: 100%;
	height: 10px;
	
}

/* 2.1 Navigation */

#nav {
	width: 100%;
	height: 60px;
	text-align: center;
	position: absolute;
	margin: 0 auto;
}

#nav-sticky-wrapper.is-sticky #nav {
	background-color: #0d2c5a;
}

#nav ul {
	margin: 0 auto;
	padding: 0;
	list-style: none;
	display: inline-block;
	*display: inline;
}

#nav ul li {
	padding: 0 8px;
	line-height: 60px;
	display: inline-block;
	float: left;
	text-transform: uppercase;
}

#nav ul li a {
	display: block;
	font-size: 0.938em;
	letter-spacing: 0.1em;
	color: #5b9bbc;
	text-decoration: none;
}

#nav ul li a:hover, #nav ul li.current a { color: #fff; }

/* 2.2 Info box */

.info {
	width: 100%;
	height: 100%;
	margin-bottom: -60px;
	text-align: center;
}

.info .container {
	position: relative;
	top: 200px;
}

.info .container h1 {
	margin: 0;
	padding: 0;
	font-size: 3.750em;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1em;
	text-transform: uppercase;
}

.info .container h4 {
	margin: 0;
	padding: 0;
	font-size: 1.875em;
	font-weight: 300;
	letter-spacing: 0.1em;
	line-height: 1em;
	text-transform: uppercase;
}

/* 3. Profile */

#profile .line { background-color: #4081a3; }
#profile .bullet { color: #4081a3; }
#profile a { color: #4081a3; }

.social-links {
	margin: 0;
	padding: 0;
	list-style-type: none;
}
.social-links li {
	float: left;
	margin: 0 8px 8px 0;
}
.social-links li a { display: inline-block; text-decoration: none; }
.social-links li i { font-size: 1.5em; }

/* 4. Skills */

#skills .line { background-color: #f08b65; }

.skill { text-align: center; }
.skill-pie {
	width: 100%;
	margin: 0 auto;
	font-size: 14pt;
	font-weight: 300;
}
.easyPieChart canvas { margin: 0 auto; }
.skill h3 { margin-bottom: 0; padding-bottom: 0; }

/* 5. Experience */

#experience .line { background-color: #e76270; }
#experience .bullet { color: #e76270; }
#experience a { color: #e76270; }

.job h3 {
	margin: 0 0 10px 0;
	text-align: center;
}

.skill-container h3 {
	margin: 0 0 10px 0;
	text-align: center;
}

.job-attributions {
	display: block;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.15em;
}

.job-period { text-align: right; }

.job-project { text-align: center; }

/* 6. Education */

#education .line { background-color: #f24759; }
#education .bullet { color: #f24759; }
#education a { color: #f24759; }

.school h3 {
	margin: 0 0 10px 0;
	text-align: center;
}

.school-meta {
	display: block;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.15em;
}

/* 7. Portfolio */

#portfolio .line { background-color: #f08b65; }
#portfolio .bullet { color: #f08b65; }
#portfolio a { color: #f08b65; }

.project {
	opacity: 0;
    display: none;
	text-align: center;
}

.filters {
	display: block;
	margin: 0 0 15px 0;
	padding: 0;
	list-style-type: none;
	text-align: center;
}

.filters li {
	color: #000000;
	display: inline-block;
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 0.15em;
}

.filters li:hover, .filters li.active { color: #f08b65; }

.filters li:before {
	content: "\2022";
	padding: 0 10px;
	color: #f08b65;
}

.filters li:first-child:before {
	content: "";
	padding: 0;
}

/* 8. Contact */

#contact {
	background-color: #0d2c5a;
	min-height: 80%;
	color: #fff;
}

#contact h2, #contact h3, #contact h4 { color: #fff; }

#contact .line { background-color: #5b9bbc; }
#contact .bullet { color: #5b9bbc; }
#contact a { color: #5b9bbc; }

#contact input[type="text"], #contact textarea { background-color: #fff; }

/* A. Clearfix */

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    font-size: 0;
    clear: both;
    visibility: hidden;
}

.clearfix { display: inline-block; }

/* A.1 Hides from IE5/Mac \*/
* html .clearfix { height: 1px; }

.clearfix  { display: block; }
/* End hide from IE5/Mac */


/* B. Media Queries */
@media screen and (max-width: 768px) {
	.skill,
	.project { width: 33.33333333333333%; }
	.job-project { width: 50%; }
}

@media screen and (max-width: 640px) {
	.section-title { font-size: 2em; line-height: 1em; }
	.info .container h1 { font-size: 2.300em; }
	.info .container h4 { font-size: 1.500em; }
	#nav li { font-size: 0.875em; }
	#nav li a span { display: none; }
	.line { width: 200px; }
	.job-company,
	.job-period { text-align: center; }
	.skill,
	.job-project,
	.project { float: left; width: 50%; }
	.text-right { text-align: left; }
}

@media screen and (max-width: 480px) {
	.section-content { margin-top: 45px; }
	#nav ul li { padding: 0 5px; }
}

/******
QBKL Grid
-------------------------------------------
For IE8, use in conjunction with Respond.js
https://github.com/scottjehl/Respond

Note: Respond.js only understands min-width / max-width media queries
******/

/* 1. Grid elements */

.container {
	margin-left: auto;
	margin-right: auto;
	padding: 0;
	max-width: 1200px;
}

.container:before,
.container:after {
	content: " ";
	display: table;
}

.container:after {
	clear: both;
}

.column,
.col-full,
.col-1-2,
.col-1-3,
.col-2-3,
.col-1-4,
.col-3-4,
.col-1-5,
.col-2-5,
.col-3-5,
.col-1-6 {
	float: left;
	padding: 15px;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

.col-full { width: 100%; }
.col-1-2 { width: 50%; }
.col-1-3 {width: 33.33333333333333%;}
.col-2-3 { width: 66.66666666666666%; }
.col-1-4 { width: 25%; }
.col-3-4 { width: 75%; }
.col-1-5 { width: 20%; }
.col-2-5 { width: 40%; }
.col-3-5 { width: 60%; }
.col-1-6 { width: 16.666666666666664%; }


.row { width: 100%; }
.row,
.col-wrap {
	margin-left: auto;
	margin-right: auto;
	padding: 0!important;
}

.row:before,
.row:after,
.col-wrap:before,
.col-wrap:after {
	content: " ";
	display: table;
}

.row:after,
.col-wrap:after {
	clear: both;
}

/* 2. Media queries */
@media screen and (max-width: 1024px) {
	.container { max-width: 960px; }
	.column,
	.col-full,
	.col-1-2,
	.col-1-3,
	.col-2-3,
	.col-1-4,
	.col-3-4,
	.col-1-5,
	.col-2-5,
	.col-3-5,
	.col-1-6 { padding: 15px; }
}

@media screen and (max-width: 800px) {
	.container { max-width: 780px; }
	.column,
	.col-full,
	.col-1-2,
	.col-1-3,
	.col-2-3,
	.col-1-4,
	.col-3-4,
	.col-1-5,
	.col-2-5,
	.col-3-5,
	.col-1-6 { padding: 10px; }
}

@media screen and (max-width: 768px) {
	.container { max-width: 750px; }
}

@media screen and (max-width: 640px) {
	.container { max-width: 100%; }
	.column,
	.col-full,
	.col-1-2,
	.col-1-3,
	.col-2-3,
	.col-1-4,
	.col-3-4,
	.col-1-5,
	.col-2-5,
	.col-3-5,
	.col-1-6 { float: none; width: 100%; }
}

@media screen and (max-device-width: 540px) {
	/* Break-point if needed */
}

@media screen and (max-width: 320px) {
	/* Break-point if needed */
}

summary {
    display: block;
}

</style>
