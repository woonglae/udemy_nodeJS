const request = require('request')

const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})