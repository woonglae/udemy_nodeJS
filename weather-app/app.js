const request = require('request')

const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/37.8267'

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/atlanta.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoid29vbmdsYWUiLCJhIjoiY2p5YzJjanhtMGY4bTNtczVtM3M1NmdrciJ9.Eg3ivZXMcUAzyJf3yTgWmw&limit=1"

// in korean
// const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/37.8267,-122.4233?units=si&lang=ko'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.code === 400) {
        console.log("Unable to find location")
    } else {
        temp = response.body.currently.temperature
        rainChance = response.body.currently.precipProbability
        console.log("It is currently " + temp + " degrees out. There is a " + rainChance + "% chance of rain.")
        console.log(response.body.daily.data[0].summary)

        //in korean
        // console.log("현재 " + temp + " 도이며 비가 올 확률은 " + rainChance + "% 입니다")
        // console.log(response.body.daily.data[0].summary)
    }
})

// request({ url: geocodeURL, json: true}, (error, response) => {
//     longitude = response.body.features[0].center[0]
//     latitude = response.body.features[0].center[1]
//     console.log("longitude : " + longitude + ", latitude : " + latitude)
// })

