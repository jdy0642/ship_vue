<template>
<div>
   <vue-daum-map
    :appKey="mapData.appKey"
    :center.sync="mapData.center"
    :level.sync="mapData.level"
    :mapTypeId="mapData.mapTypeId"
    :libraries="mapData.libraries"
    @load="onLoad"
    @click="marker()"
    @rightclick="rightClick($event)"
    style="width:100%;height:400px;">
  </vue-daum-map>
  <div id="roadview" style="width:100%;height:700px;text-align:left;"></div> <!-- 로드뷰를 표시할 div 입니다 -->
  <v-btn @click="kakao()">카카오페이</v-btn>
  <v-btn @click="test()">롤1</v-btn>
  <v-btn @click="test2()">롤2</v-btn>
  <v-btn @click="test3()">롤3</v-btn>
  <v-btn @click="test4()">롤4</v-btn>
  <v-btn @click="crawl()">크롤링</v-btn>
  <v-btn @click="test5()">컬렉션</v-btn>
  <v-btn @click="test6()">봇</v-btn>
  <v-btn @click="test7()">윈도우 콘솔</v-btn>
  <v-text-field v-model="msg" @keyup.enter="test6()"></v-text-field>
  <div>
    <!-- <span>{{ $socket.connected ? 'Connected' : 'Disconnected' }}</span> -->
  </div>
  <v-btn @click="clickButton('하이')">socket</v-btn>
  <div v-for="(item,index) of msgList" :key="index">{{item}}</div>
</div>
</template>
    /* @center_changed="onMapEvent('center_changed', $event)"
    @zoom_start="onMapEvent('zoom_start', $event)"
    @zoom_changed="onMapEvent('zoom_changed', $event)"
    @bounds_changed="onMapEvent('bounds_changed', $event)"
    @click="onMapEvent('click', $event)"
    @dblclick="onMapEvent('dblclick', $event)"
    @rightclick="onMapEvent('rightclick', $event)"
    @mousemove="onMapEvent('mousemove', $event)"
    @dragstart="onMapEvent('dragstart', $event)"
    @drag="onMapEvent('drag', $event)"
    @dragend="onMapEvent('dragend', $event)"
    @idle="onMapEvent('idle', $event)"
    @tilesloaded="onMapEvent('tilesloaded', $event)"
    @maptypeid_changed="onMapEvent('maptypeid_changed', $event)" */

<script>
import axios from 'axios'
import {store} from '@/store'
import VueDaumMap from 'vue-daum-map'
export default {
  components:{VueDaumMap},
  created(){
    let table = []
    axios.get(`${this.context}/futsal/`)
      .then(res => {
        table = res.data
    }).catch(e => {
      alert(`axios fail ${e} 랜덤데이터 대체`)
      const ranAddr = () => '어디어디 어디 주소 어디어디 어디 길'
      const ranTel = () => `010-${[parseInt(Math.random()*9999)]}-${[parseInt(Math.random()*9999)]}`
      const ranName = () => ['신촌','부산','용산','인천','서울','영등포'][parseInt(Math.random()*6)]
      const rannum = () => [4,5,6][parseInt(Math.random()*3)]
      const rangender = () => ['female','male'][parseInt(Math.random()*2)]
      const ranrating = () => parseInt(Math.random()*3+1)
      const rantime = x => x + Math.random()*1000*3600*24*13
      const ranfacility = () => 'size0,shower0,park0,shoes0,wear0'
      const remain = () => parseInt(Math.random()*12)
      table = Array.from({length : 200},(_,i) => ({
        futsalseq: i,
        time: rantime(Date.now()), stadiumname: ranName(),
        stadiumaddr: ranAddr(), stadiumtel: ranTel(),
        num : rannum(), gender: rangender(),difficulty: ranrating(),
        shoes: 'shoes0', stadiumfacility: ranfacility(),
        stadiumimg: '11,12,13', remain: remain(), adminname: '펭수'
      }))
    }).finally(()=>{
      table.map(x =>{
        x.stadiumGroundSize = x.stadiumfacility.split(',')[0]
        x.stadiumShower = x.stadiumfacility.split(',')[1]
        x.stadiumParking = x.stadiumfacility.split(',')[2]
        x.stadiumShoesRental = x.stadiumfacility.split(',')[3]
        x.stadiumDressRental = x.stadiumfacility.split(',')[4]
      })
      this.table = table
      store.state.futsal.matchList = table	
    })
    /* this.$socket.$subscribe('SEND', payload => {
      alert(payload)
    })
    this.$socket.$subscribe('user', payload => {
      this.console = payload
    })
    this.console = this.$socket */
  /* sockets: {
    connect() {
      alert('socket connected')
    },
    customEmit(val) {
      alert(`this method was fired by the socket server. eg: io.emit("customEmit", data)${val}`)
    } */
  },
  data(){
    return {
      context:store.state.context,
      mapData:{
        appKey: '789b2dc91d9235fae744572478c25f39', // 테스트용 appkey
        center: {lat:33.450701, lng:126.570667}, // 지도의 중심 좌표
        level: 3, // 지도의 레벨(확대, 축소 정도),
        mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
        libraries: ['services', 'clusterer', 'drawing'], // 추가로 불러올 라이브러리
      },
      mapObject: null, // 지도 객체. 지도가 로드되면 할당됨.
      console: '',
      searchresult: '',
      lol: '',
      pagination: '',
      location: '',
      search: '',
      msg: '',
      msgList: [],
      table: [],
      temp: '',
      roadMap: ''
    }
  },
  computed:{
    win(){
      return window
    },
    con(){
      return window.console
    }
  },
  methods: {
    kakao(){
      this.win().console.log(window)
    },
    /* clickButton(val) {
      // this.$socket.client is `socket.io-client` instance
      this.$socket.client.emit('SEND', val);
    }, */
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad (map) {
      // 지도의 현재 영역을 얻어옵니다
      let daummaps = window.daum.maps
      let bounds = map.getBounds();
      // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
      let boundsStr = bounds.toString();
      let control = new daummaps.ZoomControl();
      let position = new daummaps.LatLng(37.53762225647159, 126.9755716893961)
      map.addControl(control, daummaps.ControlPosition.TOPRIGHT); 
      this.console = ('Daum Map Loaded', boundsStr);
      let marker = new daummaps.Marker({
        map: map,
        position: position
      })
      marker.setMap(map)
      daummaps.event.addListener(marker, 'mouseover',() =>{
          alert('marker mouseover!');
      })
      daummaps.event.addListener(marker, 'click', () => {
          alert('marker click!');
      });
      this.mapObject = map;

     // let container = document.getElementById('container'), // 지도와 로드뷰를 감싸고 있는 div 입니다
     //   mapWrapper = document.getElementById('mapWrapper'), // 지도를 감싸고 있는 div 입니다
     // let btnRoadview = document.getElementById('btnRoadview') // 지도 위의 로드뷰 버튼, 클릭하면 지도는 감춰지고 로드뷰가 보입니다 
     //   btnMap = document.getElementById('btnMap'), // 로드뷰 위의 지도 버튼, 클릭하면 로드뷰는 감춰지고 지도가 보입니다 
      let rvContainer = document.getElementById('roadview') // 로드뷰를 표시할 div 입니다
      //mapContainer = document.getElementById('map'); // 지도를 표시할 div 입니다
      let roadviewClient = new daummaps.RoadviewClient(),
          roadview = new daummaps.Roadview(rvContainer)
      roadviewClient.getNearestPanoId(position, 200, function(panoId) {
        roadview.setPanoId(panoId, position);
      })
      this.roadMap = roadview
      window.daum.maps.event.addListener(roadview, 'init', function() {
        this.con.log(roadview)
        new window.daum.maps.Marker({
          position: position,
          map: roadview
        });
      });
    },
    toggleMap() {
      this.mapStandardView = !this.mapStandardView
      this.mapRoadView = !this.mapRoadView
    },
    test(){
      axios({//https://cors-anywhere.herokuapp.com/
          url: '/v1/payment/ready',
          headers:{
            Authorization: 'KakaoAK 98fa824fb203f20a3caee0ed79a0203e',
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          method: 'POST',
          params: {
            'cid': `TC0ONETIME`,
            'partner_order_id': '1001',
            'partner_user_id': 'test@test.com',
            'item_name': '풋살',
            'quantity': 1,
            'total_amount': 10000,
            'tax_free_amount': 0,
            'approval_url':'http://localhost:8081/futsal/admin',
            'fail_url': 'http://localhost:8081/fail',
            'cancel_url':'http://localhost:8081/cancel'
          }
        }).then(res =>{
          //this.temp = res.data
          let dd = i => store.state.tid = i
          dd(res.data.tid)
          window.open(res.data.next_redirect_pc_url,'test popup','width:500px','location=yes')
          axios.get(`${store.state.context}/kakaopay/`)
        }).catch(()=>alert('실패'))
		},
    test2(){
      axios({
          url: 'http:://localhost:8081/',
          headers:{
            Authorization: 'KakaoAK 98fa824fb203f20a3caee0ed79a0203e',
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            //origin: 'http://kapi.kakao.com/v1/payment/ready'
          },
          //method: 'POST',
          data: {
            'cid': `TC0ONETIME`,
            'partner_order_id': '1001',
            'partner_user_id': 'test@test.com',
            'item_name': '풋살',
            'quantity': 1,
            'total_amount': 10000,
            'tax_free_amount': 0,
            'approval_url':'localhost:8081',
            'fail_url': 'localhost:8081',
            'cancel_url':'localhost:8081'
          }
        }).then(res =>{this.temp = res})
        .catch(()=>alert('실패'))
    },
    test3(){
      axios({//https://cors-anywhere.herokuapp.com/
          url: 'https://kapi.kakao.com/v1/payment/ready',
          headers:{
            Authorization: 'KakaoAK 98fa824fb203f20a3caee0ed79a0203e',
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            //origin: 'http://kapi.kakao.com/v1/payment/ready'
          },
          //method: 'POST',
          data: {
            'cid': `TC0ONETIME`,
            'partner_order_id': '1001',
            'partner_user_id': 'test@test.com',
            'item_name': '풋살',
            'quantity': 1,
            'total_amount': 10000,
            'tax_free_amount': 0,
            'approval_url':'localhost:8081',
            'fail_url': 'localhost:8081',
            'cancel_url':'localhost:8081'
          }
        }).then(res =>{this.temp = res})
        .catch(()=>alert('실패'))
    },
    test4(){
      axios({url: 'http://dapi.kakao.com/v2/local/search/address.json',
				headers:{
					Authorization: 'KakaoAK 28d9076d78b899a3f85bb1c12320b0c3'
				},
				method: 'GET',
				params: {
					query: '경기도 시흥시 신천동',
					page: this.page
				}
			}).then(res=>{
        this.location = res
      })
    },
    test5(){
      axios({url: `${store.state.context}/res/2`, method: 'GET'})
      .then(res=>{
        this.console = res
      })
    },
    test6(){
      axios({url: `${store.state.context}/bot/${this.msg}`, method: 'GET'})
      .then(res=>{
        this.msgList.push(this.msg)
        this.msg = ''
        this.console = res.data
        if(res.data.msg.includes('예약')){
          let time = res.data.result.time
          let year = time.match(/\d{1,4}년/)
          let month = time.match(/\d{1,2}월/)
          let day = time.match(/\d{1,2}일/)
          let hour = time.match(/\d{1,2}시/)
          let x = z => z.substring(0,z.length-1)
          time = Date.parse(`${year ? x(year[0]) : new Date().getFullYear()}-${month ? x(month[0]) : new Date().getMonth()+1}-${day ? x(day[0]) : new Date().getDate()} ${hour ? x(hour[0]) : '00'}:00`)
          alert(this.table.filter(j=>{
            j.difficulty==3
            //j.stadiumname == res.data.result.location || j.stadiumaddr.match(res.data.distinction.locationStack[0])
          }).length)
        }
      })
    },
    test7(){
      this.con.log(window.daum.maps)
    },
		crawl(location){
      let result = ''
			axios({url: 'http://dapi.kakao.com/v2/local/search/keyword.json',
				headers:{
					Authorization: 'KakaoAK 28d9076d78b899a3f85bb1c12320b0c3'
				},
				method: 'GET',
				params: {
					query: location,
					page: '1'
				}
			}).then(res=>{
        result = res.data.documents
        return result
      }).catch(e => {
				alert(e)
      })
    },
    rightClick(b){
				let loc = b[0].latLng
        store.state.futsal.currentLoc = {lat: loc.Ha, lng: loc.Ga}
        this.mapObject.setCenter(new window.daum.maps.LatLng(loc.Ha, loc.Ga))
        this.roadViewSetCenter(new window.daum.maps.LatLng(loc.Ha, loc.Ga))
    },
    roadViewSetCenter(position){
			let roadviewClient = new window.daum.maps.RoadviewClient()
			let map = this.roadMap
			roadviewClient.getNearestPanoId(position, 50, function(panoId) {
				map.setPanoId(panoId, position);
			})
		},
  }
}
</script>
<style scoped>
</style>