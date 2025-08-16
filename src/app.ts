import express from "express";

const app = express();

//routes
//http methods get, post, put, patch, delete
app.get("/", (req, res) => {
    res.json({message: "welcome to masterapi"})
});

export default app;
