<template>
<div>
	<div class="row" ma-auto>
		<div style="width: 100%">
			<div style="margin: auto; width: 40%;" class="input-group">
				<input v-model="stadiumName" @keyup.enter="submit" type="text" class="form-control" placeholder="Search for...">
				<span class="input-group-btn">
					<v-btn style="margin-left:10px" @click="submit" rounded>Go!</v-btn>
					<!-- <button @click="submit" class="btn btn-default" type="button" style="color:">Go!</button> -->
				</span>
				<!-- <v-btn @click="gps">현재위치</v-btn> -->
				<v-btn style="margin-left:10px" @click="openMap()" rounded>현재위치</v-btn>
			</div>
		</div>
	</div>
</div>
</template>
<script>
//import axios from "axios"
//import FutMap from "./FutMap"
import { store } from '@/store'
export default{
	//components:{FutMap},
	created(){
	},
	data(){
		return {
			stadiumName : '',
			location: '',
		}
	},
	computed: {
		con(){
			return window.console
		}
	},
	methods:{
		submit(){
			this.$emit("sendStadiumName",this.stadiumName)
		},
		gps(){
			let location={}
			let send = (location) => {
				this.$emit("sendLocation",location)
				this.location = location
			}
			navigator.geolocation.getCurrentPosition(async function(pos) {
				location.lat = pos.coords.latitude
				location.lng = pos.coords.longitude
				store.state.futsal.currentLoc = location
				await send(location)
			})
		},
		openMap(){
			alert('기본 신촌역이고 우클릭시 현재위치가 바뀝니다.')
			this.$emit("sendLocation", {lat:37.5605672, lng:126.94334860559148})
			store.state.futsal.currentLoc = {lat:37.5605672, lng:126.94334860559148}
		}
		/*
		weather(stadiumName){
			let weather = ''			
			axios
			.get(`http://api.openweathermap.org/data/2.5/weather?q=
			${stadiumName==='' ? 'SEOUL' : stadiumName}
			,KR&APPID=cd9a51369c3fc19f9fb85b2f2508b5d5`)
			.then(res=>{
				weather.city = res.data.name
				weather.temp = res.data.main.temp
				weather.img = res.data.weather[0].icon
				weather.imgUrl = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
				weather.wind = res.data.wind.speed
			})
			.catch(()=>{
				//alert('axios fail'+e)
			})
			return weather
		}, */
	}
}
</script>
<style scoped>
div{
	text-align: center
}
</style>