const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    console.log(duplicateNotes)
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title already taken!"))
    }
    
}

const removeNote =(title) => {
    const notes = loadNotes()
    const differentTitle = notes.filter((note) => note.title !== title)
    if (differentTitle.length === notes.length) {
        console.log(chalk.inverse.red("No note found!"))
    } else {
        saveNotes(differentTitle)
        console.log(chalk.inverse.green("Note removed!"))
    }
    
    
}   

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        console.log("load Notes " + dataJSON)
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}