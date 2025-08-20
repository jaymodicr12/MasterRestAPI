import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.ts";
import userRouter from "./user/userRouter.ts";

// import createHttpError from "http-errors";

const app = express();

//routes
//http methods get, post, put, patch, delete
app.get("/", (req, res) => {
    res.json({ message: "welcome to masterapi" });
});

app.use("/api/users", userRouter);

app.use(globalErrorHandler);

export default app;
