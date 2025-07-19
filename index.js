import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        page: "home",
    });
})


app.listen(PORT, (req, res) => {
    console.log("Server Started on Port: " + PORT);
});