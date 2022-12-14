var express = require("express");
const prisma = require("../prisma");
var router = express.Router();

// just use / here
// app.js will prefix the routes in this file with /overview

router.get("/", async function (req, res, next) {
    res.json(await prisma.gTC.findMany({
        include:{
            routes: true,
        }
    }));
});

module.exports = router;
