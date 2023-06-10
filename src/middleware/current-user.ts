import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare module "http" {
  interface IncomingHttpHeaders {
    "hr-token"?: string;
  }
}
interface User {
  id: string;
  email: string;
}
interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      userData: User;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers["hr-token"]) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.headers["hr-token"],
      process.env.JWT_SECRET
    ) as UserPayload;

    req.userData = payload;
  } catch (error) {}
  next();
};
