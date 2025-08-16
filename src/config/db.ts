import mongoose from "mongoose";
import { config } from "./config.ts";

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("connected to DB Successfully");
        });

        mongoose.connection.on("error", (error) => {
            console.log("Error in Connecting to DB", error);
        });

        await mongoose.connect(config.databaseUrl as string);

    } catch (error) {
        console.error("failed to connect to DB", error);
        process.exit(1);
    }
};

export default connectDB;
