import "dotenv/config";

import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";

import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";

import { swaggerSpec } from "./docs/swagger";

import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.use("/auth", authRoutes);

app.use("/tasks", taskRoutes);

app.get("/", (_, res) => {

  return res.json({
    mensagem: "API funcionando!",
  });
});

app.use(errorMiddleware);

export { app };