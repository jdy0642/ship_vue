<template>
<div>
  <section id="intro" class="fx-backstretch">
			<div class="info" style="position: relative; z-index: 0; background: none;">
				<div class="container" style="top: 393.5px;">
					<div class="row">
						<div class="col-full"><h1>조르디 러이터</h1></div>
					</div>
					<div class="row"><div class="col-1-4 centered line"></div></div>
					<div class="row">
						<div class="col-full"><h4>소프트웨어 엔지니어</h4></div>
					</div>
				</div>
			<div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 960px; width: 919px; z-index: -999998; position: absolute;"><img src="http://www.kaiwa-projects.com/assets/img/backstretch.jpg" style="position: absolute; margin: 0px; padding: 0px; border: none; width: 1706.67px; height: 960px; max-height: none; max-width: none; z-index: -999999; left: -393.833px; top: 0px;"></div></div>
			<div id="nav-sticky-wrapper" class="sticky-wrapper" style="height: 60px;"><nav id="nav" style="z-index: 100;">
				<ul class="clearfix">
					<li class=""><a href="#aboutme">인사 소개</a></li>
					<li class=""><a href="#skills"><span>전문 </span>기술</a></li>
					<li class=""><a href="#experience">경력</a></li>
					<li class=""><a href="#education">교육</a></li>
					<li class=""><a href="#portfolio">포트<span>폴리오</span></a></li>
					<li class=""><a href="#contact">연락</a></li>
				</ul>
			</nav></div>
		</section>
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