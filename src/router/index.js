import Vue from 'vue'
import Router from 'vue-router'
import Test from  '@/components/cmm/Test.vue'
import Carousel from  '@/components/cmm/Carousel.vue'
import Join from '@/components/auth/Join.vue'
import Login from '@/components/auth/Login.vue'
import MyPage from '@/components/auth/MyPage.vue'
import Register from '@/components/admin/Register.vue'
import MemberManage from '@/components/admin/MemberManage.vue'
import RevenueManage from '@/components/admin/RevenueManage.vue'
import ReservationManage from '@/components/admin/ReservationManage.vue'
import FutsalMypage from  '@/components/member/FutsalMypage.vue'
import FutsalHome from '@/components/contents/FutHome.vue'
import Lol from '@/components/contents/Lol.vue'
import FutsalMatch from '@/components/contents/futsal/FutMatchPage.vue'
import FutsalStadium from '@/components/contents/futsal/FutStadium.vue'
import FutsalAdmin from '@/components/contents/futsal/FutAdmin.vue'
import CreateRoom from '@/components/lol/CreateRoom.vue'
import JoinRank from '@/components/lol/JoinRank.vue'
import UpdateRoom from '@/components/lol/UpdateRoom.vue'
import Testpage from '@/components/admin/Testpage.vue'
Vue.use(Router)
export default new Router({
     mode: 'history',
     routes: [
          {path:'/join', name:'join', component: Join},
          {path:'/testpage', name:'testpage', component: Testpage},
          {path:'/mypage', name:'mypage', component:  MyPage},
          {path:'/futsalmypage', name:'futsalmypage',  component: FutsalMypage},
          {path:'/login', name:'login', component: Login},
          {path: '/futsal', name: 'futsalhome', component: FutsalHome},
          {path:'/lol', name:'lol', component: Lol},
          {path: '/futsal/match/:matchId', name: 'futsalmatch', component: FutsalMatch},
          {path: '/futsal/admin', name: 'futsaladmin', component: FutsalAdmin},
          {path: '/futsal/stadium/:stadiumName', name: 'futsalstadium', component: FutsalStadium},
          {path: '/futsal/register', name: 'register', component: Register},
          {path: '/createroom', name: 'createroom', component: CreateRoom},
          {path: '/test', name: 'test', component: Test},
          {path: '/joinrank/:game', name: 'joinrank', component: JoinRank},
          {path: '/membermanage', name: 'membermanage', component: MemberManage},
          {path: '/revenuemanage', name: 'revenuemanage', component: RevenueManage},
          {path: '/reservationmanage', name: 'reservationmanage', component: ReservationManage},
          {path: '/updateroom', name: 'updateroom', component: UpdateRoom},
          {path: '/', name: 'carousel', component: Carousel}
     ]    
})