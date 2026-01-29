"use strict";
exports.__esModule = true;
exports.catsRepository = void 0;
var database_1 = require("../config/database");
console.log('11');
var cats_1 = require("../db/entities/cats");
console.log('22');
exports.catsRepository = database_1.AppDataSource.getRepository(cats_1.Cats);
