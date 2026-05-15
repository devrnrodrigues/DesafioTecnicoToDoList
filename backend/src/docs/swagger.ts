import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {

  definition: {
    openapi: "3.0.0",

    info: {
      title: "ToDo API",
      version: "1.0.0",
      description:
        "API de gerenciamento de tarefas",
    },

    servers: [
      {
        url: "http://localhost:3333",
      },
    ],

    components: {

      securitySchemes: {

        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {

        RegisterBody: {
          type: "object",

          required: [
            "name",
            "email",
            "password",
          ],

          properties: {

            name: {
              type: "string",
              example: "Renan",
            },

            email: {
              type: "string",
              example: "renan@email.com",
            },

            password: {
              type: "string",
              example: "123456",
            },
          },
        },

        LoginBody: {
          type: "object",

          required: [
            "email",
            "password",
          ],

          properties: {

            email: {
              type: "string",
              example: "renan@email.com",
            },

            password: {
              type: "string",
              example: "123456",
            },
          },
        },

        TaskBody: {
          type: "object",

          required: [
            "title",
          ],

          properties: {

            title: {
              type: "string",
              example: "Estudar Node.js",
            },

            description: {
              type: "string",
              example: "Aprender Swagger",
            },

            completed: {
              type: "boolean",
              example: false,
            },
          },
        },

        ErrorResponse: {
          type: "object",

          properties: {

            sucesso: {
              type: "boolean",
              example: false,
            },

            mensagem: {
              type: "string",
              example:
                "Erro interno do servidor",
            },
          },
        },

        ValidationErrorResponse: {
          type: "object",

          properties: {

            sucesso: {
              type: "boolean",
              example: false,
            },

            mensagem: {
              type: "string",
              example:
                "Erro de validação",
            },

            detalhes: {
              type: "array",

              items: {
                type: "object",

                properties: {

                  campo: {
                    type: "string",
                    example: "email",
                  },

                  mensagem: {
                    type: "string",
                    example:
                      "Digite um email válido",
                  },
                },
              },
            },
          },
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
    "./src/docs/*.docs.ts",
  ],
};

export const swaggerSpec =
  swaggerJsdoc(options);