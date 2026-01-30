import { AppDataSource } from "../config/database";
import { Cat } from "../db/entities/cat";
import { User } from '../db/entities/user'

export const catRepository = AppDataSource.getRepository(Cat);
export const userRepository = AppDataSource.getRepository(User);
