module.exports = {
  "outputDir": "../src/main/resources/static",
  "indexPath": "../static/index.html",
  "devServer": {
    "proxy": "http://localhost:8080"
    // "proxy": "http://13.209.21.230"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}