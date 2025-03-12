import express from "express";
import { PORT } from "./confing.js";
import { userRouter } from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

//MiddleWares
app.use(morgan("dev"));
app.use(express.json());
app.use(userRouter);



app.listen(PORT);
console.log("server", PORT);
