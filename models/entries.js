const pool = require('../utils/db_pgsql');
const entryQueries = require('../queries/entry.queries');

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entryQueries.getAllEntries);
        result = data.rows;
        console.log(result);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); //Establece conexión
        const data = await client.query(
            `SELECT 
                e.title, 
                e.content, 
                e.date, 
                e.category, 
                CONCAT(a.name, ' ', a.surname) AS name, 
                a.image
            FROM entries AS e
            INNER JOIN authors AS a
                ON e.id_author = a.id_author
            WHERE a.email = $1
            ORDER BY e.title;`,
            [email]
        )
        result = data.rows;
        console.log(result);
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release(); //Cierra conexión
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); //Abre conexion
        const data = await client.query(
            entryQueries.createEntry,
            [
                title,
                content,
                email,
                category
            ]
        );
        result = data.rows;
        console.log(result);
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// { 
//     "title": "El rayo no gana la champions", 
//     "content": "Prueba restricción",
//     "email": "alvaru@thebridgeschool.es",
//     "category": "Otra"
//   }

// ALTER TABLE entries
// ADD UNIQUE (title);

// UPDATE
const updateEntry = async (entry) => {
    const { title, newTitle, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); //Abre conexion
        const data = await client.query(
            entryQueries.updateEntry,
            [
                title,
                newTitle,
                content,
                email,
                category
            ]
        );
        result = data.rows;
        console.log(result);
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const deleteEntry = async (entry) => {
    const {title} = entry;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(entryQueries.deleteEntry, [title]);
        result = data.rows;
        console.log(result);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
}

module.exports = {
    getAllEntries,
    getEntriesByEmail,
    createEntry,
    updateEntry,
    deleteEntry
}