const https = require('http');
var Twit = require('twit')
var Auth = require('./api')
var T = new Twit(Auth)
const axios = require('axios')


setInterval(() => {
axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${npm_package_API_apiKey}`).then(function (response) {
var news = response.data.articles;
var noticiaAleatoria = Math.floor(Math.random() * news.length);
console.log(` ${news[noticiaAleatoria].content} - ${news[noticiaAleatoria].author} -
${news[noticiaAleatoria].urlToImage}`)
//twitter
T.post('statuses/update', { status: `${news[noticiaAleatoria].content}`}, function(err, data, response) {
            console.log(data)
        })
  }).catch(function (error) {
    // handle error
    console.log(error);
  })

}, 3000 * 10);