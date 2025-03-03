import express from "express";
import cors from "cors";
import "dotenv/config";

//initialize Expresss

const app = express();

//Middleware
app.use(cors());

//Routes

app.get("/", (req, res) => res.send("API working"));

//Port

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
