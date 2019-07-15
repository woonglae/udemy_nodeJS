const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chlak.red.inverse("Note title already taken!"))
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes()
    const differentTitle = notes.filter(function (note) {
        return note.title !== title
    })
    if (differentTitle.length === notes.length) {
        console.log(chalk.inverse.red("No note found!"))
    } else {
        saveNotes(differentTitle)
        console.log(chalk.inverse.green("Note removed!"))
    }
    
    
}   

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}