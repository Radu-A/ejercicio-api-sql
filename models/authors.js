const pool = require('../utils/db_pgsql');
const authorQueries = require('../queries/author.queries');

const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authorQueries.getAllAuthors);
        result = data.rows;
        console.log(result);
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        let data = await client.query(authorQueries.getAuthorsByEmail, [email]);
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

const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect();
        let data = await client.query(authorQueries.createAuthor, [name, surname, email, image])
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
}

const updateAuthor = async (author) => {
    const { email, name, surname, image } = author;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authorQueries.updateAuthor,
            [email, name, surname, image])
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
}

const deleteAuthor = async (author) => {
    const { email } = author;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(authorQueries.deleteAuthor,
            [email]
        )
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
}

// { 
//     "name": "Nuevo", 
//     "surname": "Nuevo",
//     "email": "nuevo@gmail.com",
//     "image": "Otra"
//   }

module.exports = {
    getAllAuthors,
    getAuthorsByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}