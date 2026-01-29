"use strict";
exports.__esModule = true;
require("reflect-metadata");
var database_1 = require("./config/database");
var cats_routes_1 = require("./routes/cats-routes");
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 3000;
app.use(express_1["default"].json());
app.use("/cats", cats_routes_1["default"]);
database_1.AppDataSource.initialize()
    .then(function () {
    app.listen(PORT, function () {
        console.log("Server running on port ".concat(PORT));
    });
})["catch"](function (error) { return console.log(error); });
// app.use((req, res, next) => {
//   console.log('AAAA');
//   return next();
// })
// app.get('/some', (r, rs) => {
//   rs.json({ ok: 'da' })
// })
// app.listen(3001, (err) => {
//   if (err) {
//     console.error('err:', err)
//     return
//   }
//   console.log('here')
// })
