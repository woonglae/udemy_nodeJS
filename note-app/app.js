const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()
console.log(msg)

console.log(chalk.inverse.bold.red("Success!"))

console.log(process.argv)