// Configuración y módulos necesarios
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;


// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// Módulos de rutas
const entriesRoutes = require('./routes/entriesRoutes');
const authorsRouter = require('./routes/authorsRoutes');

// Movidas de Morgan
morgan.token('id', function getId(req) {
    return req.id
});
var loggerFormat = ':id [:date[web]] ":method :url" :status :response-time';
// Middlewares
// app.use(morgan('dev'));
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));
app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}));
app.use(express.json()); // Habilita tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/entries', entriesRoutes);
app.use('/api/authors', authorsRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})