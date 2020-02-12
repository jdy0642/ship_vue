import { Line,mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Line,
  mixins: [reactiveProp],
  data(){
    return{
    chartdata: {},
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        labels: {
            fontColor: 'black',
            
        },
      },
      
    }
  }
},
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}