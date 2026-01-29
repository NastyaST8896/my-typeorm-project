import "reflect-metadata";
import { AppDataSource } from "./config/database";
import {catsRouter} from './routes/cats-routes';
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/cats', catsRouter);

AppDataSource.initialize()
.then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log('>err', err);
    }
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => console.log(error));
