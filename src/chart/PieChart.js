import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["data", "options"],
  data(){
    return {
      chartdata:{

      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          labels: {
              fontColor: 'black',
              
          },
        },
        borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px"
      }
    }
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.data, this.options);
  }
};