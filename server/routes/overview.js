var express = require("express");
var router = express.Router();

// cứ để / như bthg, file app.js sẽ prefix các route trong file này bằng /overview

router.get("/", function (req, res, next) {
    res.json({ data: "konnichiwa!" });
});

module.exports = router;
