import cors from "cors";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { NotFoundError } from "./errors";
import { currentUser, errorHandler } from "./middleware";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import { users } from "./routes";

export const createApp = () => {
  const app = express();
  app.set("trust proxy", 1);
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
 
  app.use(currentUser);
  app.use("/api", express.static(path.join(__dirname, "/public")));

  app.use("/api",users)
  
  app.all("*", async () => {
    throw new NotFoundError("Route not found");
  });

  app.use(errorHandler);

  return app;
};
