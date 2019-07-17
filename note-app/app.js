const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title : {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes()
    }
})


// Printing yargs argv
// console.log(yargs.argv)

// not printing yargs argv, but call yargs so we can access argv
yargs.parse()

