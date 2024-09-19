// This file is used to write SQL to create tables and insert dummy data for testing purposes

// Write a SQL query to create a new table
// We need to tell our server where to send our code
// The query method only understands the argument as a string
// ! We need to import db from the server.js
import { db } from "../server/server.js";
// ! We use the {} to destructure one element
db.query(`CREATE TABLE IF NOT EXISTS pets(
    id SERIAL PRIMARY KEY,
    name TEXT,
    animal TEXT,
    date_of_birth DATE,
    colour VARCHAR(255)
);`);

// Insert data into the pets table
db.query(`INSERT INTO pets (name, animal, date_of_birth, colour) VALUES 
('John Cena', 'Dog', '2023-10-24', 'brown and white'),
('Zach', 'Cat', '2007-07-09', 'flesh');`);
