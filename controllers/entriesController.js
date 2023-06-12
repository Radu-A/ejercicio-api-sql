
const { json } = require('body-parser');
const entries = require('../models/entries');


const getEntries = async (req, res) => { 
    let result;
    if (req.query.email) {
        result = await entries.getEntriesByEmail(req.query.email);
    } else {
        result = await entries.getAllEntries();
    }
    res.status(200).json(result); // [] con las entries encontradas
}

const createEntry = async (req, res) => {
    const dataEntry = req.body; // {title,content,email,category}
    try {
        console.log(dataEntry);
        const result = await entries.createEntry(dataEntry);
        res.status(201).json({
            "items_created": result,
            data: dataEntry
        })
    } catch (err) {
        // Intento manejar el error pero la aplicación peta igualmente
        if (err.code === '23505' && error.constrain === 'title') {
            res.status(400).json({ error: 'El título ya existe' })
        } else {
            console.error(err);
            res.status(500).json({ error: 'Ha ocurrido un error en el servidor'});
        }
    }
}

const updateEntry = async (req, res) => {
    const dataEntry = req.body; // {title,content,email,category}
    console.log(dataEntry);
    const result = await entries.updateEntry(dataEntry);
    res.status(201).json({
        "items_created": result,
        data: dataEntry
    })
}

const deleteEntry = async (req, res) => {
    try {
        const dataEntry = req.body;
    console.log(dataEntry);
    const result = await entries.deleteEntry(dataEntry);
    res.status(200).json({
        "message": `Se ha borrado la entry ${dataEntry.title}`
    })
    } catch(err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry
}