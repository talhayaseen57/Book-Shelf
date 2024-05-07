import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res
    .status(574)
    .send("Welcome to Talha's first MERN stack application.");
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("The application is successfully connectied to MONGODB.");
    app.listen(PORT, () => {
      console.log(`Applicaiton is listening to the port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
