var express = require("express");
const prisma = require("../prisma");
var router = express.Router();


router.get("/", async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(await prisma.depot.findMany({
        include: {
            vehicles: true,
            routes: true
          },
    }));
});

module.exports = router;
