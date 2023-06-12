const express = require('express');
const authorsController = require('../controllers/authorsController');
const authorsRouter = express.Router();

authorsRouter.get('/', authorsController.getAuthors);
authorsRouter.post('/', authorsController.createAuthor);
authorsRouter.put('/', authorsController.updateAuthor);
authorsRouter.delete('/', authorsController.deleteAuthor);

module.exports = authorsRouter;