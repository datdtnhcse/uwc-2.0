var express = require("express");
const prisma = require("../prisma");
var router = express.Router();


router.get("/", async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(await prisma.collector.findMany());
});

router.put('/assign/:id/:routeid', async (req, res) => {
    const { id , routeid } = req.params
    const Collector = await prisma.collector.update({
      where: { id: Number(id) },
      data: {
        route:{
            connect:{
                id: Number(routeid)
            }
        },
        status: 0
    },
    })
    res.json(Collector)
  })

module.exports = router;
