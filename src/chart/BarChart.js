import { Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  data(){
    return{
    chartdata: {},
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }
},

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}