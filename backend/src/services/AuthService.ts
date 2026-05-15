import { prisma } from "../lib/prisma";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AppError } from "../errors/AppError";

const JWT_SECRET = process.env.JWT_SECRET as string;

export class AuthService {

  async register(
    name: string,
    email: string,
    password: string
  ) {

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new AppError(
        "Usuário já existe",
        409
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return user;
  }

  async login(
    email: string,
    password: string
  ) {

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError(
        "Email ou senha inválidos",
        401
      );
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new AppError(
        "Email ou senha inválidos",
        401
      );
    }

    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    const {
      password: _,
      ...userSemSenha
    } = user;

    return {
      token,
      usuario: userSemSenha,
    };
  }
}