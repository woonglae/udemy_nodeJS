const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//custmize yargs version
yargs.version('1.1.0')

//add, remove, read, list notes

//Add command
yargs.command({
    command: 'add',
    descirbe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    hander: function() {
        console.log('Removing the note')
    }
})

console.log(yargs.argv)


