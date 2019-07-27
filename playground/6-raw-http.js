const https = require('https')
const http = require('http')

const url = 'https://api.darksky.net/forecast/49a007735cb935977fb6644b2dbb0523/40,-71?units=si'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error) => {
    console.log('An error', error)
})
request.end()