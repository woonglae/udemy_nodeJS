setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Ray', 'Alissa', 'Woongrae']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0, 
            longitude: 0
        }
    
        return data
    }, 2000)
}

const data = geocode('Philadelphia')

console.log(data)