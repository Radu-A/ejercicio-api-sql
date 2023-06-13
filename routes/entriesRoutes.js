const express = require('express');
const entriesController = require('../controllers/entriesController');
const entriesRouter = express.Router();
const checkApiKey = require('../middlewares/checkApiKey');

entriesRouter.get('/', entriesController.getEntries);
entriesRouter.post('/',checkApiKey, entriesController.createEntry);
entriesRouter.put('/',checkApiKey, entriesController.createEntry);
entriesRouter.delete('/',checkApiKey, entriesController.deleteEntry);

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
// PUT http://localhost:3000/api/entries
// DELETE http://localhost:3000/api/entries

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/authors
// PUT http://localhost:3000/api/authors
// DELETE http://localhost:3000/api/authors

module.exports = entriesRouter;