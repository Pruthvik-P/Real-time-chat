import "dotenv/config";
import express, {type Request, type Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Env } from "./config/env.config";
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorhandler.middleware";
import connectDatabase from "./config/database.config";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: Env.FRONTEND_URL,
    credentials: true,
  })
);

app.get(
  "/health",
  asyncHandler(async (req: Request, res: Response) => {
    res.status(HTTPSTATUS.OK).json({
      message: "Server is health",
      status: "OK",
    });
  })
);

app.use(errorHandler);

app.listen(Env.PORT, async () => {
  await connectDatabase();
  console.log(`Server running on port ${Env.PORT} in ${Env.NODE_ENV} mode`)
})