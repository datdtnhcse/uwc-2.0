var express = require("express");
const prisma = require("../prisma");
var router = express.Router();


router.get("/", async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(await prisma.janitor.findMany());
});

router.put('/assign/:id/:mpcid', async (req, res) => {
    const { id , mpcid } = req.params
    const janitor = await prisma.janitor.update({
      where: { id: Number(id) },
      data: {
        mpc:{
            connect:{
                id: Number(mpcid)
            }
        },
        status: 0
    },
    })
    res.json(janitor)
  })

module.exports = router;
