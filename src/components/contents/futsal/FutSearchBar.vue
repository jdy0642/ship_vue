<template>
<div>
	<div class="row" ma-auto>
		<div style="width: 100%">
			<div style="margin: auto; width: 40%;" class="input-group">
				<input v-model="stadiumName" @keyup.enter="submit" type="text" class="form-control" placeholder="Search for...">
				<span class="input-group-btn">
					<v-btn style="margin-left:10px" @click="submit" rounded>Go!</v-btn>
				</span>
				<v-btn style="margin-left:10px" @click="openMap()" rounded>현재위치</v-btn>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { store } from '@/store'
export default{
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
	}
}
</script>
<style scoped>
div{
	text-align: center
}
</style>