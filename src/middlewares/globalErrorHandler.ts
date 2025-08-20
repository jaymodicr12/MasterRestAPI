import type { Request, Response , NextFunction} from "express";
import type { HttpError } from "http-errors";
import { config } from "../config/config.ts";

// global error handler
const globalErrorHandler = (
    error: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = error.statusCode || 500;

    return res.status(statusCode).json({
        message: error.message,
        errorStack: config.env === "development" ? error.stack : "",
    });
};

export default globalErrorHandler;