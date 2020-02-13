import { Bar,mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Bar,
  mixins: [reactiveProp],
  
  data(){
    return{
  
    chartdata: {},
    options: {

      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {
            fontColor: 'black',
            
        },

      },
      /* scales: {
        xAxes: [{
            stacked: false,
            fontColor: 'black',
        }],
        yAxes: [{
            stacked: true
        }]
    } */
    }
  }
},
  mounted () {
    this.renderChart(this.data, this.options)
  }
}