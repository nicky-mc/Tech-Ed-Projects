// Access to express, cors, and dotenv
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Configure dotenv for this server
dotenv.config();

// We need to set up our database connection to accept requests from the server
// Now access pg
import pg from "pg";

// Now set up a database pool using our connection string
// Get connection string from .env file
const dbConnectionString = process.env.DATABASE_URL;

// Set up our database request pool
// A pool is when the server tries to request data from the database. The pool is like a waiting area so that it can handle the server requests coming in. It'll collect all requests and the waiting times will be shorter than without it.
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// Initialize our express server
const app = express();

// Tell express to use json and cors
app.use(express.json());
app.use(cors());

// Set up local port (8080)
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Root route
app.get("/", (request, response) => {
  response.json(
    "Our server is running on localhost 8080, and we built it on Rock N Roll"
  );
});

// Connection string needs to be added to .gitignore

// Endpoint to READ the data in the pets table
app.get("/pets", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM pets`);
    res.json(query.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to READ data for a specific animal type in the pets table
app.get("/pets/:animal", async (req, res) => {
  const animal = req.params.animal;
  try {
    const query = await db.query(`SELECT * FROM pets WHERE animal = $1`, [
      animal,
    ]);
    res.json(query.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example of using req.body.name when we have a parameter such as $1 etc.
// We need to specify the value in square brackets after the query is finished.
// That value is usually provided by the user --> in the body data of the form (req.body.data)
