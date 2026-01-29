import { DataSource } from "typeorm";
import { Cats } from "../db/entities/cats";
import path from 'path';

console.log(`>`, path.resolve(__dirname, "../db/entities"))


export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'fusion',
    database: "test",
    synchronize: true,
    logging: false,
    entities: [path.resolve(__dirname, '../db/entities/**/*.{ts}')],
    migrations: [path.resolve(__dirname, '../db/migrations**/*.{ts}')],
    subscribers: [],
});