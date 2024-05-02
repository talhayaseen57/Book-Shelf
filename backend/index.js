import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(574).send("Welcome to Talha's first MERN stack application.");
})
app.listen(PORT, () => {
    console.log(`Applicaiton is listening to the port: ${PORT}`);
});
