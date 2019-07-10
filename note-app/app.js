const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//custmize yargs version
yargs.version('1.1.0')

//add, remove, read, list notes

//Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'

        }
    },
    handler: function(argv) {
        console.log('Adding a new note!', argv)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note', argv)
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Raeding the note', argv)
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('listing the note', argv)
    }
})


// Printing yargs argv
// console.log(yargs.argv)

// not printing yargs argv, but call yargs so we can access argv
yargs.parse()

