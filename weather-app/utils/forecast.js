const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/' + encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude) + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.code === 400) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, {
                temp : response.body.currently.temperature,
                rainChance : response.body.currently.precipProbability,
                summary : response.body.daily.data[0].summary
            })
    }
})

}

module.exports = forecast