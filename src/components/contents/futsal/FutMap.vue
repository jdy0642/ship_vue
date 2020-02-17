<template>
<div>
   <vue-daum-map class="d-inline-flex" id="map"
    :appKey="mapData.appKey"
    :center.sync="mapData.center"
    :level.sync="mapData.level"
    :mapTypeId="mapData.mapTypeId"
    :libraries="mapData.libraries"
    @load="onLoad"
	@rightclick="rightClick($event)"
	:style="`height: 100%; width: ${propRoadView ? (mapStandardView ? 70 : 40) : 100}%;`">
	</vue-daum-map>
	<div class="d-inline-flex" id="roadview" :style="`height: 100%; width: ${propRoadView ? (mapRoadView ? 60 : 30) : 0}%;text-align:left;`"></div>
	<input v-if="propRoadView" style="position:absolute;top:5px;left:5px;padding:7px 12px;font-size:14px;
		border: 1px solid #dbdbdb;background-color: #fff;border-radius: 2px;box-shadow: 0 1px 1px rgba(0,0,0,.04)
		;z-index:150;cursor:pointer;color:black;"
		type="button" id="btnMap" @click="toggleMap()" title="지도 보기" :value="mapStandardView ? '로드뷰' : '지도'">
</div>
</template>
<script>
import { store } from '@/store'
import VueDaumMap from 'vue-daum-map'
export default {
  components:{VueDaumMap},
	props:['propSearchWord','propLocation','propRightClick','propRoadView'],
	data(){
		return {
			mapData:{
				appKey: '789b2dc91d9235fae744572478c25f39',
				center: {lat:37.5605672, lng:126.94334860559148},
				level: 3,
				mapTypeId: VueDaumMap.MapTypeId.NORMAL, 
				libraries: ['services', 'clusterer', 'drawing'], 
			},
			markers: [],
			mapObject: null,
			roadMap: '',
			searchWord: '',
			position: '',
			mapStandardView: true,
			mapRoadView: false
		}
	},
	watch: {
		propSearchWord: function(param){
			this.searchChanged(param)
		},
		propLocation: function(param){
			this.locationChanged(param)
		}
	},
	computed: {
		con(){
			return window.console
		}
	},
	methods: {
		toggleMap() {
			this.mapStandardView = !this.mapStandardView
			this.mapRoadView = !this.mapRoadView
		},
		searchChanged(param){
			this.searchWord = param
			this.markerDel()
			this.marker()
		},
		locationChanged(param){
			let daummaps = window.daum.maps
			let position = new daummaps.LatLng(param.lat, param.lng)
			this.position = position
			this.mapObject.setLevel(3);
			this.mapObject.setCenter(position)
			this.roadViewSetCenter(position)
			this.markerDel()
			let imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
			imageSize = new daummaps.Size(44, 49),
			imageOption = {offset: new daummaps.Point(27, 69)}
			let infowindow = new daummaps.InfoWindow({zIndex:1});
			let marker = new daummaps.Marker({
				map: this.mapObject,
				position: position,
				image: new daummaps.MarkerImage(imageSrc, imageSize, imageOption)
			})
			this.markers.push(marker);
			daummaps.event.addListener(marker, 'mouseover',() =>{
				infowindow.setContent(`<div style="padding:5px;font-size:12px;color:black;">현재위치</div>`);
				infowindow.open(this.mapObject, marker);
			})
			daummaps.event.addListener(marker, 'mouseout',() =>{
				infowindow.close()
			})
			this.searchAddrFromCoords(param.lng,param.lat,(result,status) =>{
				if (status === daummaps.services.Status.OK) {
					this.searchWord = `${result[0].address_name} 풋살`
					this.marker()
				}
			})
		},
		onLoad(map) {
			let daummaps = window.daum.maps
			map.addControl(new daummaps.ZoomControl()
				, daummaps.ControlPosition.TOPRIGHT);
			let position = new daummaps.LatLng(37.53762225647159, 126.9755716893961)
			let rvContainer = document.getElementById('roadview')
			let	roadview = new daummaps.Roadview(rvContainer)
			this.roadMap = roadview
			this.mapObject = map
			window.daum.maps.event.addListener(roadview, 'init', function() {
				new window.daum.maps.Marker({
				position: position,
				map: roadview
				})
			})
			if(!this.propLocation){
				this.searchChanged(this.propSearchWord)
			} else{
				this.locationChanged(this.propLocation)
			}
		},
		marker(){
			let daummaps = window.daum.maps
			if(this.searchWord!==''){
				daummaps.services.Places()
				daummaps.services.keywordSearch(`${this.searchWord}`, this.placesSearchCB,null)
			}
		},
		markerDel(){
			this.markers.map(i=>{
				i.setMap(null);
			})
			this.markers = []
		},
		searchAddrFromCoords(lng, lat, callback) {
			let geocoder = new window.daum.maps.services.Geocoder()
			geocoder.coord2RegionCode(lng, lat, callback)
		},
		placesSearchCB(data, status){
			let daummaps = window.daum.maps
			let position = ''
			if (status === daummaps.services.Status.OK) {
				let bounds = new daummaps.LatLngBounds();
				for (let i=0; i<data.length; i++) {
					this.displayMarker(data[i])
					position = new daummaps.LatLng(data[i].y, data[i].x)
					bounds.extend(position);
				}
				if(this.position){bounds.extend(this.position)}
				this.mapObject.setBounds(bounds);
			}
		},
		displayMarker(place){
			let map = this.mapObject
			let daummaps = window.daum.maps
			let infowindow = new daummaps.InfoWindow({zIndex:1});
			let position = new daummaps.LatLng(place.y, place.x)
			let marker = new daummaps.Marker({
				map: map,
				position: position
			})
			this.markers.push(marker);
			daummaps.event.addListener(marker, 'mouseover',() =>{
				infowindow.setContent(`<div style="padding:5px;font-size:12px;color:black;">${place.place_name}</div>`);
				infowindow.open(map, marker);
			})
			daummaps.event.addListener(marker, 'mouseout',() =>{
				infowindow.close()
			})
			daummaps.event.addListener(marker, 'click', () => {
				this.roadViewSetCenter(position)
				infowindow.close()
				this.searchWord = place.place_name
				this.$emit("sendStadiumName",place)
			})
		},
		roadViewSetCenter(position){
			let roadviewClient = new window.daum.maps.RoadviewClient()
			let map = this.roadMap
			roadviewClient.getNearestPanoId(position, 50, function(panoId) {
				map.setPanoId(panoId, position);
			})
		},
		rightClick(b){
			if(this.propRightClick){
				let loc = b[0].latLng
				store.state.futsal.currentLoc = {lat: loc.Ha, lng: loc.Ga}
				this.locationChanged({lat: loc.Ha, lng: loc.Ga})
			}
		}
	}
}
</script>
<style scoped>
</style>