const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

geocode(location, (error, geocodeData) => {
    if (error) {
        return console.log(error)
    } else {
        forecast(geocodeData.longitude, 
            geocodeData.latitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                } else {
                    console.log(geocodeData.location)
                    console.log( forecastData)
                }
        })    
    }    
})