import { AppDataSource } from "../config/database";
import { Cats } from "../db/entities/cats";

export const catsRepository = AppDataSource.getRepository(Cats);
