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
        console.log('Adding a new note!')
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Raeding the note')
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('listing the note')
    }
})

console.log(yargs.argv)


