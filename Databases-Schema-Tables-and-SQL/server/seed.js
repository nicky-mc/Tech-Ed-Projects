// this fine is used to write SQL to create tables and insert dummy data for testing purposes

//write a SQL query to create a new table
//We need to tell our server where to send our code
//the query method only understands the argument as a string
//!we need to import db from the server.js
import { db } from "../server/server.js";
//!we use the {} to destructure one element
db.query(`CREATE TABLE IF NOT EXISTS pets(
    id SERIAL PRIMARY Key,
    name Text,
    animal Text,
    date_of_birth Date,
    colour VARCHAR(255)
);`);
// i want to insert data into the pets table
// db.query(`INSERT INTO pets (animal, date_of-birth, colour`);
//VALUES (`John Cena`, `2023-10-24`, 'brown and white'),
//(`Zach`, `2007-07-09, `flesh`);
