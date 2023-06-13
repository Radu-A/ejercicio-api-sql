
const authors = require('../models/authors');

const getAuthors = async (req, res) => {
    let result;
    try {
        if (req.query.email) {
            result = await authors.getAuthorsByEmail(req.query.email);
            res.status(200).json(result);
        } else {
            result = await authors.getAllAuthors();
            res.status(200).json(result);
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}

const createAuthor = async (req, res) => {
    const dataAuthor = req.body;
    try {
        const result = await authors.createAuthor(dataAuthor);
        console.log(dataAuthor)
        res.status(201).json({
            "Usuario creado": dataAuthor.email,
            data: dataAuthor
        })
    } catch (err) {
        console.log(err);
        throw err;
    } 
}

const updateAuthor = async (req, res) => {
    const dataAuthor = req.body;
    try {
        const result = await authors.updateAuthor(dataAuthor);
        console.log(dataAuthor)
        res.status(201).json({
            "Usuario actualizado": dataAuthor.email,
            data: dataAuthor
        })
    } catch (err) {
        console.log(err);
        throw err;
    } 
}

const deleteAuthor = async (req, res) => {
    const dataAuthor = req.body;
    try {
        const result = await authors.deleteAuthor(dataAuthor);
        console.log(dataAuthor)
        res.status(201).json({
            "usuario eliminado": dataAuthor.email,
            data: dataAuthor
        })
    } catch (err) {
        console.log(err);
        throw err;
    } 
}

module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}