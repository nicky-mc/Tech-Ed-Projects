import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is the root route!");
});
app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
app.get("/images", async (req, res) => {
  const API = `https://api.unsplash.com/search/photos?client_id=${process.env.API_KEY}&query=puppy`;
  const response = await fetch(API);
  const imageData = await response.json();

  res.json(imageData.results);
});
