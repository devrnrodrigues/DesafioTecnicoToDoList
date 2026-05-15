import {
  Request,
  Response,
  NextFunction,
} from "express";

import { AppError } from "../errors/AppError";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (err instanceof AppError) {

    return res.status(
      err.statusCode
    ).json({
      sucesso: false,
      mensagem: err.message,
      detalhes: err.details,
    });
  }

  console.error(err);

  return res.status(500).json({
    sucesso: false,
    mensagem:
      "Erro interno do servidor",
  });
}