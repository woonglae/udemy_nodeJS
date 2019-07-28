const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')


app.set('view engine', 'hbs')
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