const prisma = require("./index.js");

// this file is for inserting mock data
// for example:

async function main() {
    var mcps = require('../../client/src/mockup_data/overviewMCP.json');
    for (let mcp of mcps) {
        // console.log(mcp.capacity);
        await prisma.mCP.create({
            data: {
                location: mcp.location,
                capacity: mcp.capacity
            }
        });
    }

    var depots = require('../../client/src/mockup_data/overviewDepot.json');
    for (let key of Object.keys(depots)) {
        for ( let vehicle of depots[key].vehicleList){
            delete vehicle.id;
        }
        await prisma.depot.create({
            data: {
                depotName: depots[key].depotName,
                location: depots[key].location,
                vehicles:{
                    create: depots[key].vehicleList
                }
            }
        });
    }

    var employees = require('../../client/src/mockup_data/data.json');
    for (let employee of employees) {
        await prisma.employee.create({
            data: {
                first_name: employee.first_name,
                last_name: employee.last_name,
                email: employee.email,
                phone: employee.phone,
            }
        });
    }


    var gtcs = require('../../client/src/mockup_data/overviewGTC.json');
    for ( let gtc of gtcs){
        await prisma.gTC.create({
            data: {
                name: gtc.name,
                location: gtc.location,
            }
        });
    }

     var routes = require('../../client/src/mockup_data/routedata.json');

    for (let route of routes) {
        await prisma.route.create({
            data:{
                name: route.routeName,
                status: route.status,
                fromDepot: {
                    connect: {
                        id: route.fromDepot.depotID
                    }
                },
                togtc: {
                    connect: {
                        id: route.toGTC.GTCID
                    }
                }
            }
        });
    }
    for (let route of routes) {
        for (let x of route.routeOfMCPsID){
            await prisma.mCPinRoute.create({
                data:{
                    route:{
                        connect:{
                            id: route.routeID
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

    }

}

main();
