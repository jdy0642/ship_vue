<template>
    <retest :data={}></retest>
</template>


<script>
import Retest from '@/components/admin/Retest.vue'
export default {
   components: { Retest },
   data(){
       return{
           test:['1','2','3']
       }
   }
}
</script>
