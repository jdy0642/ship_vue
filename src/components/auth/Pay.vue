<template>
    <div>
    </div>
</template>
<script>
import axios from 'axios'
import { store } from '@/store'
export default {
    created(){
        alert(store.state.person.personseq)
        axios({
            url:`${store.state.context}/kakaopay/respones`,
            method: "POST",
            data: {token: this.$route.query.pg_token}
        }).then(() =>{
            alert('결제성공')
            close()
        })
    }
}
</script>
<style scoped>

</style>
