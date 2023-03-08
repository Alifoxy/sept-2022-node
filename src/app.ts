// @ts-ignore
import express, { NextFunction, Request, Response } from "express";

import {IError} from "./types/common.types";
import { userRouter } from "./routers/user.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

// --- ERROR HANDLER ---
app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;

    return res.status(status).json({
        message: err.message,
        status,
    });
});

const PORT = 5100;

app.listen(PORT, () => {
    mongodb.connect("mongodb+srv://Alifoxy:<password>@cluster0.bqbczay.mongodb.net/?retryWrites=true&w=majority").then();
    console.log(`Server has started on PORT ${PORT} 🚀`);
});