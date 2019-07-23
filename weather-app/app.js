const request = require('request')

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

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/atlanta.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoid29vbmdsYWUiLCJhIjoiY2p5YzJjanhtMGY4bTNtczVtM3M1NmdrciJ9.Eg3ivZXMcUAzyJf3yTgWmw&limit=1"

// request({ url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to geographic service!")
//     } else if (response.body.features.length === 0) {
//         console.log("Cannot find location information")
//     } else {
//         longitude = response.body.features[0].center[0]
//         latitude = response.body.features[0].center[1]
//         console.log("longitude : " + longitude + ", latitude : " + latitude)    
//     }

// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoid29vbmdsYWUiLCJhIjoiY2p5YzJjanhtMGY4bTNtczVtM3M1NmdrciJ9.Eg3ivZXMcUAzyJf3yTgWmw&limit=1'

    request({url: url, json: true}, (error, response) => {
    if (error) {
        callback('Unable to connect to location service!')
    } else if (response.body.features.length === 0) {
        callback("Cannot find location information")
    } else {
        longitude = response.body.features[0].center[0]
        latitude = response.body.features[0].center[1]
        callback("longitude : " + longitude + ", latitude : " + latitude) 
    }
    })
}

geocode('Philadelphia', (error, data) => {
    
})