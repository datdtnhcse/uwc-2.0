var express = require("express");
const prisma = require("../prisma");
var router = express.Router();

// just use / here
// app.js will prefix the routes in this file with /overview

router.get("/", async function (req, res, next) {
    res.json(await prisma.route.findMany({

        select:{
            id: true,
            name: true,
            fromDepot: {
                select:{
                    id: true,
                    depotName: true
                }
            },
            togtc: {
                select:{
                    id: true,
                    name: true
                }
            },
            MCPinRoute:{
                select:{
                    mcpID: true
                }
            },
            status: true
        }
    }));
});

module.exports = router;
