const express = require('express');
const entriesController = require('../controllers/entriesController');
const entriesRouter = express.Router();

// http://localhost:3000/api/entries
entriesRouter.get('/', entriesController.getEntries);
entriesRouter.post('/', entriesController.createEntry);
entriesRouter.put('/', entriesController.createEntry);
entriesRouter.delete('/', entriesController.deleteEntry);

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries

module.exports = entriesRouter;