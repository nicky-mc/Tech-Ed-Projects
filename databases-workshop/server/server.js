import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import pg from "pg";
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/", (_request, response) => {
  response.json(
    "Our server is running on localhost 8080, and we built it on Rock N Roll"
  );
});
app.get("/household", async (_request, response) => {
  try {
    const result = await db.query("SELECT * FROM household");
    response.json(result.rows);
  } catch (error) {
    response.json(error);
  }
});
