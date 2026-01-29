"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var cats_1 = require("../entities/cats");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'fusion',
    database: "test",
    synchronize: true,
    logging: false,
    entities: [cats_1.Cats],
    migrations: [],
    subscribers: []
});
