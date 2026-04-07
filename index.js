import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import filmRoutes from "./routes/filmRoutes.js";
import personRoutes from "./routes/personRoutes.js";
import planetRoutes from "./routes/planetRoutes.js";
import specieRoutes from "./routes/specieRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import starshipRoutes from "./routes/starshipRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", filmRoutes);
app.use("/", personRoutes);
app.use("/", planetRoutes);
app.use("/", specieRoutes);
app.use("/", vehicleRoutes);
app.use("/", starshipRoutes);

const port = 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao MongoDB Atlas com sucesso!");
    app.listen(port, () => {
      console.log(`API rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Erro ao conectar no MongoDB Atlas:", error);
  });