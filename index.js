import dotenv from "dotenv";
import express from "express";
import authRoutes from "./src/routes/auth.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        page: "home",
    });
})


app.listen(PORT, (req, res) => {
    console.log("Server Started on Port: " + PORT);
});