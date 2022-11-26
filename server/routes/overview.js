var express = require("express");
var router = express.Router();

// just use / here
// app.js will prefix the routes in this file with /overview

router.get("/", function (req, res, next) {
    res.json({ data: "konnichiwa!" });
});

module.exports = router;
