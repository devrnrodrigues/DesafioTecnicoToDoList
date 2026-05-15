import { app } from "./app";

app.listen(3333, () => {

  console.log(
    "Servidor rodando na porta 3333"
  );

  console.log(
    "Swagger disponível em:"
  );

  console.log(
    "http://localhost:3333/docs"
  );
});