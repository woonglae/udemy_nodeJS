setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Ray', 'Alissa', 'Woongrae']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    const data = {
        latitude: 0, 
        longitude: 0
    }

    return data
}

const data = geocode('Philadelphia')

console.log(data)