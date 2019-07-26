const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Atlanta', (error, geocodeData) => {
    if (error) {
        return console.log(error)
    } else {
        forecast(geocodeData.longitude, 
            geocodeData.latitude, (error, forecastData) => {
                if (error) {
                    return console.log(error)
                } else {
                    console.log('Error', error)
                    console.log('Data', forecastData)
                }
        })    
    }    
})