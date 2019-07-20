const request = require('request')

const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/37.8267,-122.4233?units=si'

// in korean
// const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/37.8267,-122.4233?units=si&lang=ko'

request({ url: url, json: true }, (error, response) => {
    temp = response.body.currently.temperature
    rainChance = response.body.currently.precipProbability
    console.log("It is currently " + temp + " degrees out. There is a " + rainChance + "% chance of rain.")
    console.log(response.body.daily.data[0].summary)

    //in korean
    // console.log("현재 " + temp + " 도이며 비가 올 확률은 " + rainChance + "% 입니다")
    // console.log(response.body.daily.data[0].summary)
})

