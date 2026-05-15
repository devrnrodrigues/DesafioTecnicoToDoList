import request from "supertest";

import { app } from "../../app";

describe(
  "POST /tasks",
  () => {

    it(
      "deve criar tarefa autenticado",
      async () => {

        const email =
          `teste${Date.now()}@gmail.com`;

        await request(app)
          .post("/auth/register")
          .send({
            name: "Renan",
            email,
            password: "123456",
          });

        const loginResponse =
          await request(app)
            .post("/auth/login")
            .send({
              email,
              password: "123456",
            });

        const token =
          loginResponse.body.token;

        const response =
          await request(app)
            .post("/tasks")
            .set(
              "Authorization",
              `Bearer ${token}`
            )
            .send({
              title: "Minha tarefa",
            });

        expect(
          response.status
        ).toBe(201);

        expect(
          response.body
            .tarefa
            .title
        ).toBe(
          "Minha tarefa"
        );
      }
    );
  }
);