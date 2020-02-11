module.exports = {
  "outputDir": "../static",
  "indexPath": "./index.html",
  "devServer": {
    "proxy": "http://kapi.kakao.com"
    //"proxy": "http://15.165.26.82"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}