const express = require('express');
const authorsController = require('../controllers/authorsController');
const authorsRouter = express.Router();

// http://localhost:3000/api/authors
authorsRouter.get('/', authorsController.getAuthors);
authorsRouter.post('/', authorsController.createAuthor);
authorsRouter.put('/', authorsController.updateAuthor);
authorsRouter.delete('/', authorsController.deleteAuthor);

module.exports = authorsRouter;