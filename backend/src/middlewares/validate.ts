import {
  Request,
  Response,
  NextFunction,
} from "express";

import {
  ZodError,
  ZodTypeAny,
} from "zod";

import { AppError } from "../errors/AppError";

export function validate(
  schema: ZodTypeAny
) {

  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      await schema.parseAsync(
        req.body
      );

      return next();

    } catch (error) {

      if (error instanceof ZodError) {

        return next(
          new AppError(
            "Erro de validação",
            400,
            error.issues.map((err) => ({
              campo: err.path[0],
              mensagem: err.message,
            }))
          )
        );
      }

      return next(error);
    }
  };
}