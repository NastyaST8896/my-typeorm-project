"use strict";
exports.__esModule = true;
exports.catsRepository = void 0;
var database_1 = require("../config/database");
var cats_1 = require("../entities/cats");
exports.catsRepository = database_1.AppDataSource.getRepository(cats_1.Cats);
