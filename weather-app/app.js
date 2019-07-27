const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if(!location) {
    console.log("Please put the location you want to find")
} else {
    geocode(location, (error, {longitude, latitude, location}) => {
        if (error) {
            return console.log(error)
        } else {
            forecast(longitude, 
                latitude, (error, forecastData) => {
                    if (error) {
                        return console.log(error)
                    } else {
                        console.log(location)
                        console.log(forecastData)
                    }
            })    
        }    
    })
}

