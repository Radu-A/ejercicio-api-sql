const entryQueries = {
    createTableEntries: `
    CREATE TABLE entries (
        id_entry serial NOT NULL PRIMARY KEY, 
        title varchar(100) NOT NULL, 
        content text NOT NULL, 
        date date DEFAULT CURRENT_DATE,
        id_author int,
        category varchar(15),
        FOREIGN KEY (id_author) REFERENCES authors(id_author)
        ON DELETE CASCADE
      )`,
    dropTableEntries: `
    DROP TABLE authors`,
    getAllEntries: `
    SELECT 
        e.title, 
        e.content, 
        date, 
        CONCAT(a.name, ' ', a.surname) AS name, 
        category
    FROM entries AS e
    INNER JOIN authors AS a 
        ON e.id_author = a.id_author`,
    getEntriesByEmail: `
    SELECT 
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
    createEntry: `
    INSERT INTO entries(
        title, 
        content, 
        id_author, 
        category)
    VALUES (
        $1,
        $2,
        (SELECT id_author FROM authors WHERE email=$3),
        $4
    );`,
    createEntry: `
    INSERT INTO entries(
        title, 
        content, 
        id_author, 
        category)
    VALUES (
        $1,
        $2,
        (SELECT id_author FROM authors WHERE email=$3),
        $4
    );`,
    updateEntry: `
    UPDATE entries
    SET title=$2, 
        content=$3, 
        date=NOW(), 
        id_author=(SELECT id_author FROM authors WHERE email=$4),
        category=$5'
    WHERE title=$1`,
    deleteEntry: `
    DELETE FROM entries
	WHERE title=$1;`
}
module.exports = entryQueries;