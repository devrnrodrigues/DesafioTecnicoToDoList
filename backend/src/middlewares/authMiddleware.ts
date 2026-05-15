import {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";

import { AppError } from "../errors/AppError";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthRequest extends Request {
  userId?: string;
}

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {

  const authHeader =
    req.headers.authorization;

  if (!authHeader) {

    return next(
      new AppError(
        "Token não informado",
        401
      )
    );
  }

  const token =
    authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as { userId: string };

    req.userId = decoded.userId;

    return next();

  } catch {

    return next(
      new AppError(
        "Token inválido",
        401
      )
    );
  }
}