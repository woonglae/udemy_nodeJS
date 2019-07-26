// Object property shorthand

const name = "Ray"
const userAge = 29
const user = {
    name,
    age: userAge,
    location: "Atlanta"
}

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// // assigning inside {} is default value (for price)
// const {label, price = 0, stock: leftStock, rating} = product

// console.log(label)
// console.log(price)
// console.log(leftStock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)