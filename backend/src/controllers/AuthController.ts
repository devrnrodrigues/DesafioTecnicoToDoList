import { Request, Response } from "express";

import { AuthService } from "../services/AuthService";

const authService = new AuthService();

export class AuthController {

  async register(req: Request, res: Response) {

    try {

      const { name, email, password } = req.body;

      await authService.register(
        name,
        email,
        password
      );

      return res.status(201).json({
        sucesso: true,
        mensagem: "Usuário criado com sucesso!",
      });

    } catch (err: any) {

      return res.status(400).json({
        sucesso: false,
        mensagem: err.message,
      });
    }
  }

  async login(req: Request, res: Response) {

    try {

      const { email, password } = req.body;

      const result = await authService.login(
        email,
        password
      );

      return res.status(200).json({
        sucesso: true,
        mensagem: "Login realizado com sucesso!",
        ...result,
      });

    } catch (err: any) {

      return res.status(401).json({
        sucesso: false,
        mensagem: err.message,
      });
    }
  }
}