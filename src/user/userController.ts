import type { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel.ts";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "All fields are required !");
        return next(error);
    }

    // Database Call
    const user = await userModel.findOne({email: email})
    if(user){
        const error = createHttpError(400, "User Already Exists with this email")
        return next(error)
    }
    // Process

    // Response

    res.json({ message: "User Registered !" });
};

export { createUser };
