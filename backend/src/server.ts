import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app = express();


app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (_, res) => {
  res.send("API Running");
});

app.listen(3333, () => {
  console.log("Server running on port 3333");
});