const authorQueries = {
    createTableAuthors: `
    CREATE TABLE authors (
        id_author serial NOT NULL PRIMARY KEY, 
        name varchar(45) NOT NULL, 
        surname varchar(45) NOT NULL, 
        email varchar(100) NOT NULL UNIQUE,
        image varchar(255)
    )`,
    dropTableAuthor: `
    DROP TABLE authors`,
    getAllAuthors: 'SELECT * FROM authors',
    getAuthorsByEmail: `
        SELECT * FROM authors
        WHERE email=$1`,
    createAuthor: `
        INSERT INTO authors(name, surname, email, image)
        VALUES ($1, $2, $3, $4)`,
    updateAuthor: `
        UPDATE authors
        SET name=$2, 
            surname=$3,
            image=$4
        WHERE email=$1`,
    deleteAuthor: `
        DELETE FROM authors
        WHERE email=$1;`
}

module.exports = authorQueries;