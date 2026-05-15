import request from "supertest";

import { app } from "../../app";

describe(
  "POST /auth/register",
  () => {

    it(
      "deve criar usuário",
      async () => {

        const response =
          await request(app)
            .post("/auth/register")
            .send({
              name: "Renan",
              email:
                `renan${Date.now()}@gmail.com`,
              password: "123456",
            });

        expect(
          response.status
        ).toBe(201);

        expect(
          response.body
            .sucesso
        ).toBe(true);

        expect(
          response.body
            .mensagem
        ).toBe(
          "Usuário criado com sucesso!"
        );
      }
    );

    it(
      "deve retornar erro se email inválido",
      async () => {

        const response =
          await request(app)
            .post("/auth/register")
            .send({
              name: "Renan",
              email: "email-invalido",
              password: "123456",
            });

        expect(
          response.status
        ).toBe(400);

        expect(
          response.body
            .sucesso
        ).toBe(false);
      }
    );
  }
);