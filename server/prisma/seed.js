const prisma = require("./index.js");

// this file is for inserting mock data
// for example:

async function main() {
    var mcps = require("./mockup_data/overviewMCP.json");
    for (let mcp of mcps) {
        // console.log(mcp.capacity);
        await prisma.mCP.create({
            data: {
                location: mcp.location,
                capacity: mcp.capacity,
            },
        });
    }

    var depots = require("./mockup_data/overviewDepot.json");
    for (let key of Object.keys(depots)) {
        for (let vehicle of depots[key].vehicleList) {
            delete vehicle.id;
        }
        await prisma.depot.create({
            data: {
                depotName: depots[key].depotName,
                location: depots[key].location,
                vehicles: {
                    create: depots[key].vehicleList,
                },
            },
        });
    }

    var accounts = require("./mockup_data/account.json");
    for (let account of accounts) {
        await prisma.account.create({
            data: {
                first_name: account.first_name,
                last_name: account.last_name,
                email: account.email,
                phone: account.phone,
                pass: account.pass,
            },
        });
    }

    var collectors = require("./mockup_data/collector.json");
    for (let collector of collectors) {
        await prisma.collector.create({
            data: {
                name: collector.name,
                nearest_depot: collector.nearest_depot,
                status: collector.status,
                account: {
                    connect: {
                        id: collector.accountId,
                    },
                },
            },
        });
    }
    var janitors = require("./mockup_data/janitor.json");
    for (let janitor of janitors) {
        await prisma.janitor.create({
            data: {
                name: janitor.name,
                nearest_mcp: janitor.nearest_mcp,
                status: janitor.status,
                account: {
                    connect: {
                        id: janitor.accountId,
                    },
                },
            },
        });
    }

    var gtcs = require("./mockup_data/overviewGTC.json");
    for (let gtc of gtcs) {
        await prisma.gTC.create({
            data: {
                name: gtc.name,
                location: gtc.location,
            },
        });
    }

    var routes = require("./mockup_data/routedata.json");

    for (let route of routes) {
        const fromid = await prisma.depot.findUnique({
            where: { depotName: route.fromDepot },
        });
        await prisma.route.create({
            data: {
                name: route.routeName,
                status: route.status,
                fromDepot: {
                    connect: {
                        id: fromid?.id,
                    },
                },
                togtc: {
                    connect: {
                        id: route.toGTC.GTCID,
                    },
                },
            },
        });
    }
    for (let route of routes) {
        const id = await prisma.route.findUnique({
            where: { name: route.routeName },
        });
        for (let x of route.routeOfMCPsID) {
            await prisma.mCPinRoute.create({
                data: {
                    route: {
                        connect: {
                            id: id?.id,
                        },
                    },
                    mcp: {
                        connect: {
                            id: x,
                        },
                    },
                },
            });
        }
    }
}

main();
