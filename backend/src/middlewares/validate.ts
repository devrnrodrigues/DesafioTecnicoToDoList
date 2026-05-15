import { Request, Response, NextFunction } from "express";
import { ZodError, ZodTypeAny } from "zod";

export function validate(schema: ZodTypeAny) {

  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      await schema.parseAsync(req.body);

      return next();

    } catch (error) {

      if (error instanceof ZodError) {

        return res.status(400).json({
          sucesso: false,
          mensagem: "Erro de validação",
          erros: error.issues.map((err) => ({
            campo: err.path[0],
            mensagem: err.message,
          })),
        });
      }

      return res.status(500).json({
        sucesso: false,
        mensagem: "Erro interno do servidor",
      });
    }
  };
}