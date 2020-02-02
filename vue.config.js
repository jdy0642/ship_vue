module.exports = {
  "outputDir": "../src/main/resources/static",
  "indexPath": "../static/index.html",
  "devServer": {
    "proxy": "http://localhost:8080"
    //"proxy": "http://15.165.26.82"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}