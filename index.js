import dotenv from "dotenv";
import express from "express";
import userRoutes from "./src/routes/user.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/user", userRoutes);

app.get('/', (req, res) => {
    res.json({
        page: "home",
    });
})


app.listen(PORT, (req, res) => {
    console.log("Server Started on Port: " + PORT);
});