import request from "supertest";

import { app } from "../../app";

describe(
  "POST /auth/login",
  () => {

    it(
      "deve realizar login",
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

        const response =
          await request(app)
            .post("/auth/login")
            .send({
              email,
              password: "123456",
            });

        expect(
          response.status
        ).toBe(200);

        expect(
          response.body.token
        ).toBeDefined();
      }
    );
  }
);