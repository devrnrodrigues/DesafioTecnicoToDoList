import { prisma } from "../lib/prisma";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      throw new Error("Usuário já existe");
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
      throw new Error("Email ou senha inválidos");
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      throw new Error("Email ou senha inválidos");
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