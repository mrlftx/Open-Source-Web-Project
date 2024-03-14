import express from "express";

import cors from "cors";

import Router from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(Router);

app.get("/", (req, res) => {
    res.send("Hello From The Server");
})

app.listen(5174, () => {
    console.log("Server running successfully");
});