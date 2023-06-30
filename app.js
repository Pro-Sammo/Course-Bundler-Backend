import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
config({
  path: "./config/.env",
});
const app = express();

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  credentials:true
}))

//Importing and using routes
import courses from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from './routes/paymentRoutes.js'
import other from './routes/otherRoutes.js'

app.use("/api/v1", courses);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);

app.get("/", (req, res, next) => {
  res.send(
    `<h1>Site is Working. Click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  );
});

export default app;

app.use(ErrorMiddleware);
