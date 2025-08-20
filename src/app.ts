import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.ts";
import userRouter from "./user/userRouter.ts";
import createHttpError from "http-errors";

const app = express();

// enable JSON body parsing
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.json({ message: "welcome to masterapi" });
});

// user routes
app.use("/api/users", userRouter);

// 404 handler
app.use((req, res, next) => {
  next(createHttpError(404, "Route not found"));
});

// global error handler (last)
app.use(globalErrorHandler);

export default app;
