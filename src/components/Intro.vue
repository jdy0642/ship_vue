<template>
<div>
  <section id="intro" class="fx-backstretch">
    <div class="info" style="position: relative; z-index: 0; background: none;">
      <div class="container" style="top: 369px;">
        <div class="row">
          <div class="col-full"><h1>조르디 러이터</h1></div>
        </div>
        <div class="row"><div class="col-1-4 centered line"></div></div>
        <div class="row">
          <div class="col-full"><h4>소프트웨어 엔지니어</h4></div>
        </div>
      </div>
    <div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 911px; width: 1178px; z-index: -999998; position: absolute;"><img src="http://www.kaiwa-projects.com/assets/img/backstretch.jpg" style="position: absolute; margin: 0px; padding: 0px; border: none; width: 1619.56px; height: 911px; max-height: none; max-width: none; z-index: -999999; left: -220.778px; top: 0px;"></div></div>
    <div id="nav-sticky-wrapper" class="sticky-wrapper" style="height: 60px;"><nav id="nav">
      <ul class="clearfix">
        <li><a href="#aboutme">인사 소개</a></li>
        <li><a href="#skills"><span>전문 </span>기술</a></li>
        <li @click="home()"><a>포트<span>폴리오</span></a></li>
        <li><a href="#contact">연락</a></li>
      </ul>
    </nav></div>
	</section>
  <section id="aboutme" class="section">
    <div class="container">
      <div class="row">
        <div class="col-full">
          <h2 class="section-title">인사 소개</h2>
          <div class="centered line"></div>
        </div>
      </div>

      <div class="row section-content">
        <div class="col-1-3" style="text-align: center;">
          <img alt="접니다!" style="height: 444px;" src="http://www.kaiwa-projects.com/assets/img/photo.jpg">
        </div>
        <div class="col-1-3">
          <h4>안녕하세요? 조르디입니다!</h4>

          <p>저는 훌륭하고 멋진 소프트웨어 개발을 즐겨하는 사람입니다. 웹사이트 및 브라우저 플러그인, 기업 소프트웨어도 만들었고, 게임도 제작했습니다. 그 중  좋아했던 프로젝트 몇 개를 아래 포트폴리오로 만들었으니 <a href="#portfolio">여기를 누르시거나</a> 페이지 아래쪽에서 구경해 보세요! 도움이 필요하세요? 저하고 이야기해 보시겠어요? 소셜 미디어나 <a href="#contact">이메일</a>로 연락해 주세요.</p>
          <ul class="social-links clearfix">
            <li><a href="https://www.twitter.com/Ka1wa" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/ka1wa" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://www.github.com/ka1wa" target="_blank" title="Github"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/kaiwa" title="LinkedIn"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div class="col-1-3">
          <h4>개인 관심사</h4>
          
          <p><a href="#skills">프로그래밍</a>을 하지 않을 때는 다음과 같은 것으로 소일하며 즐거운 생활을 하고 있답니다.</p><ul><li>한국어 공부하는 것이 제일 즐거워요.</li><li>좋아하는 e스포츠 경기를 봐요.</li><li>전 세계 컨퍼런스에서 영감을 받고 있어요.</li><li>그리고, 더 많은 사람들 만나 새로운 기회를 창출하고 있어요.</li></ul>					</div>
      </div>
    </div>
  </section>
  <section id="skills" class="section-alt">
    <div class="container">
      <div class="row">
        <div class="col-full">
          <h2 class="section-title">전문 기술</h2>
          <div class="centered line"></div>
        </div>
      </div>

      <div class="row section-content">
        <div class="skill-container">
          <div class="col-full">
            <div class="col-full text-center">저는 여러 분야의 프로그래밍 언어를 다루어 왔습니다. 웹으로는 PHP와 자바를 사용합니다. 높은 성과율을 필요로 하는 것은 당연히 C++를 사용하고, 시제품 및 견본을 만들거나 취미용 프로젝트를 할 때는 Python 대신 쓰기도 합니다.</div>
          </div>
          
          <div class="col-1-5 skill">
            <h4>JavaScript</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>Node.JS</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>PHP</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>Python</h4>
          </div>
          <div class="col-1-5 skill">
            <h4>C++</h4>
          </div>
        </div>
        <div class="col-full skill-container">
          <h3>자주 사용하는 소프트웨어</h3>
        </div>
        <div class="col-2-3 col-wrap centered skill-container">
          <div class="col-1-2">
            <h4>프레임워크하고 엔진</h4>
            <ul><li>Laravel</li><li>Vue.js</li><li>React</li><li>Electron</li><li>Unity Engine</li></ul>							
          </div>
          <div class="col-1-2">
            <h4>소프트웨어</h4>
            <ul><li>윈도우즈와 리눅스</li><li>Git</li><li>도커 (Docker)</li><li>Kubernetes</li><li>MySQL</li></ul>						</div>
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
              필요한 것이 있으세요? 함께 일해보고 싶으세요? 그냥 이야기 한 번 해 보고 싶으세요?<br>다음의 양식을 작성하시거나 jordy@kaiwa-projects.com로 이메일 주세요. 곧 답장 드리겠습니다.								<input type="hidden" id="thank_you" value="연락해 주셔서 감사합니다.">
            </div>
          </div>
          
          <div id="form-contact-container">
            <div class="col-full">
              <input type="text" name="name" id="name" value="" placeholder="이름">
            </div>
            <div class="col-full">
              <input type="text" name="email" id="email" value="" placeholder="이메일 주소">
            </div>
            <div class="col-full">
              <textarea name="message" id="message" rows="4" placeholder="메시지"></textarea>
            </div>
            <div class="col-full">
              <button class="button button-medium button-submit ladda-button" data-style="expand-right" id="submit-contact">전송</button>
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
</style>
