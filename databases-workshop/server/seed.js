import { db } from "./databases-workshop/server/server.js";
db.query(`CREATE TABLE IF NOT EXISTS household (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    address TEXT,
    occupation VARCHAR(255)
  );`);
// Create a table called household with the following columns: id, first_name, last_name, address, occupation
db.query(`INSERT INTO household (first_name,
last_name, address, occupation) VALUES ('Charlotte', 'Mortoza-Cowles', '89 Queens Road, Fakenham','English Teacher'),
('Nicky', 'Mortoza-Cowles', '89 Queens Road, Fakenham', 'Student Software Developer'),
('Zachary', 'Mortoza', '89 Queens Road, Fakenham', 'Media Production Student'), 
('John-Cena', 'Mortoza-Cowles', '89 Queens Road, Fakenham', 'Tiny Dog')
`); // Insert data into the household table,
