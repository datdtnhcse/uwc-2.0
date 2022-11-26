const prisma = require("./index.js");

// this file is for inserting mock data
// for example:

async function main() {
    await prisma.station.create({
        data: { id: 69 },
    });
    // TODO
}

main();
