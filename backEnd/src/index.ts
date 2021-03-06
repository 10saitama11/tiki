import express from "express";
import morgan from "morgan";
import cors from "cors";
import "reflect-metadata";

import dotenv from "dotenv";
dotenv.config();
import { AppDataSource } from "./data-source";
import routes from "./routes";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: `${process.env.BASE_URL}`, credentials: true }));

// ------------------ Routes ----------------
app.use("/api/v1/blocks", routes);

AppDataSource.initialize()
  .then(async () => {
    console.log("Connected Database");
    // ------------------ Server Listening ----------------
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("Server listening on port ", PORT);
    });
  })
  .catch((error) => console.log(error));
