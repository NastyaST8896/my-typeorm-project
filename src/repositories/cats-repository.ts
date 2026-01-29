import { AppDataSource } from "../config/database";
console.log('11')
import { Cats } from "../db/entities/cats";
console.log('22')

export const catsRepository = AppDataSource.getRepository(Cats);
