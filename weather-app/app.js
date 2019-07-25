const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/33.7491,-84.3902?units=si'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.code === 400) {
//         console.log("Unable to find location")
//     } else {
//         temp = response.body.currently.temperature
//         rainChance = response.body.currently.precipProbability
//         console.log("It is currently " + temp + " degrees out. There is a " + rainChance + "% chance of rain.")
//         console.log(response.body.daily.data[0].summary)
//     }
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

// geocode('Seoul South Korea', (error, data) => {
//     console.log('Error: ', error)
//     console.log('Data: ', data)
// })