//access to expres and cors and dotenv
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
//config dotenv for this server
dotenv.config();
//we need to set up our database connection to accept requests from the server
// now access pg
import pg from "pg";
//now set up a database pool using our connection string
// get connection string from .env file
const dbConnectionString = process.env.DATABASE_URL;
//set up our database request pool
// a pool is when the server tries to request data from the database the pool is like a waiting area so that it can handle the server requests cominig in. it'll collect all requests and the waiting times will be shorter  than without it
const db = new pg.Pool({
  connectionString: dbConnectionString,
});
//intialise our express server
const app = express();
//tell express to use json and cors
app.use(express.json());
app.use(cors());
// set up local port (8080)

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running in port${port}`);
});
// route route
app.get("/.", (request, response) => {
  response.json(
    "Our server is running in localhost 8080, and we built it on Rock N Roll"
  );
});
// connection string needs added to .gitignore
