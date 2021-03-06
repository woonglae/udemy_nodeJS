// normal function format

// const square = function (x) {
//     return x * x
// }

// with arrow function

// const square = (x) => {
//     return x * x
// }


// with arrow function only have single line in the function

// const square = (x) => x * x 


// console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Ray', 'Alissa'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }

}

event.printGuestList()