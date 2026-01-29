"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cats_controller_1 = require("../controllers/cats-controller");
var router = (0, express_1.Router)();
router.post("/cats", cats_controller_1["default"].createCat);
exports["default"] = router;
