import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.ts";

// import createHttpError from "http-errors";

const app = express();

//routes
//http methods get, post, put, patch, delete
app.get("/", (req, res) => {

    res.json({ message: "welcome to masterapi" });
});

app.use(globalErrorHandler)

export default app;
