import "reflect-metadata"
import { DataSource } from "typeorm";
// import * as path from 'path';

// console.log(`>`, path.resolve(__dirname, "../db/migrations"))


export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'plasmodius23',
    database: "test",
    synchronize: false,
    logging: false,
    // entities: [Cats],
    entities: ['src/db/entities/**/*.ts'],
    migrations: ['src/db/migrations/**/*.ts'],
    subscribers: [],
});