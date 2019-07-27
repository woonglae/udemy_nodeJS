const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/' + encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude) + '?units=si'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.code === 400) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, {
                temp : body.currently.temperature,
                rainChance : body.currently.precipProbability,
                summary : body.daily.data[0].summary
            })
    }
})

}

module.exports = forecast