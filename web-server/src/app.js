const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    // need to match filename in the views folder and the string in res.render() 
    res.render('index', {
        title: 'Weather App',
        name: 'Ray'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpMessage: 'Welcome to help page'
    })
})

// app.com/weather
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Cloud',
        location: 'Atlanta'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})