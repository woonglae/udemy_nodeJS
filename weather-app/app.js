const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Atlanta', (error, data) => {
    if (error) {
        return console.log(error)
    } else {
        forecast(data.longitude, 
            data.latitude, (error, data) => {
                if (error) {
                    return console.log(error)
                } else {
                    console.log('Error', error)
                    console.log('Data', data)
                }
        })    
    }    
})