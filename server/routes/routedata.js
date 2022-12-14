var express = require("express");
const prisma = require("../prisma");
var router = express.Router();

// just use / here
// app.js will prefix the routes in this file with /overview

router.get("/", async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
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

router.post("/add", async function (req, res, next) {
    const { name, from, to , mcps ,status } = req.body;
    const fromid = await prisma.depot.findUnique({
        where: { depotName: from },
    });
    const result = await prisma.route.create({
      data: {
        name: name,
        fromDepot: {
            connect:{
                id : fromid?.id
            }
        },
        togtc : {
            connect:{
                id : to.id
            }
        },
        status: status
      },
    })
        const id = await prisma.route.findUnique({
            where: { name: name },
        });
        for (let x of mcps){
            await prisma.mCPinRoute.create({
                data:{
                    route:{
                        connect:{
                            id: id?.id
                        }
                    },
                    mcp:{
                        connect:{
                            id: x,
                        }
                    },
                }
            });

        }
    res.header("Access-Control-Allow-Origin", "*");
    res.json(result)
});

router.delete(`/del/:name`, async (req, res) => {
    const { name } = req.params
    // console.log(name);
    const router = await prisma.route.delete({
      where: {
        name: name,
      },
    })
    res.header("Access-Control-Allow-Origin", "*");
    res.json(router)
  })
module.exports = router;
