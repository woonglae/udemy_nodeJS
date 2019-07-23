// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Ray', 'Alissa', 'Woongrae']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0, 
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data1) => {
//     console.log(data1)
// })

const add = (digit1, digit2, callback) => {
    setTimeout(() => {
        const sum = digit1 + digit2
        callback(sum)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum)
})