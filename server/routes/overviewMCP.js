var express = require("express");
const prisma = require("../prisma");
var router = express.Router();

// just use / here
// app.js will prefix the routes in this file with /overview

router.get("/", async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(await prisma.mCP.findMany({
        select:{
            id: true,
            location: true,
            capacity: true,
            MCPinRoute: {
                select:{
                    routeID: true,
                }
            }
        }
    }));
});

module.exports = router;
