const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.com
app.get('', (req, res) => {
    res.send('<h1>Head</h1>')
})

// app.com/help
app.get('/help', (req, res) => {
    res.send([{
        name: 'Andrew', 
        age: 27
    }, {
        name: 'Ray',
        age: 29
    }])
})

// app.com/about
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
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