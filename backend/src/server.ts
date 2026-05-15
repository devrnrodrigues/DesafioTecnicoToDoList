import "dotenv/config";

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import taskRoutes from "./routes/taskRoutes";

import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/tasks", taskRoutes);

app.get("/", (_, res) => {

  return res.json({
    mensagem: "API funcionando!",
  });
});

app.use(errorMiddleware);

app.listen(3333, () => {

  console.log(
    "Servidor rodando na porta 3333"
  );
});