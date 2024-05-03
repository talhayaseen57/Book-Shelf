import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res
    .status(574)
    .send("Welcome to Talha's first MERN stack application.");
});

// save books in Mongo DB
app.post("/db/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return req.status(400).send({
        message: "Send all required fields: title, author and publish year.",
      });
    } else {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };

      const book = await Book.create(newBook);

      return res.status(201).send(`New book is created: ${book}`);
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
});

// reteive books from db
app.get('/get/books', async (req, res) => {
  try{
    const books = await Book.find({});

    return res.status(200).send(`The books in database are: ${books}`);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ message: err.message });
  }
});

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
