"use strict";
exports.__esModule = true;
var cats_controller_1 = require("../controllers/cats-controller");
var express = require('express');
var router = express.Router();
var catsController = new cats_controller_1.CatsController();
router.post("/cats", catsController.newCats);
module.exports = router;
exports["default"] = router;
