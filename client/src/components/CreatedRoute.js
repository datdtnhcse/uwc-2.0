import data from "../mockup_data/routedata.json";
import { Button, Collapse, Card } from "react-bootstrap";
import { useState } from "react";

// function CreateRouteCard({ data }) {
//     return (
//         <div>
//             <div>
//                 <h2>{data.routeName}</h2>
//             </div>
//             <div>from: MCP#{data.routeOfMCPsID[0]}</div>
//             <div>to: MCP#{data.routeOfMCPsID.slice(-1)}</div>
//             <Button>Delete route</Button>
//             <Button>Assign depot?</Button>
//         </div>
//     );
// }

// export default function CreatedRoute() {
//     return (
//         <div>
//             {data.map((item) => {
//                 return (
//                     <div>
//                         <CreateRouteCard data={item} />
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default function CreatedRoute({ data }) {
export default function CreatedRoute() {
    const [open, setOpen] = useState(false);

    const data = [
        {
            routeID: 1,
            routeName: "Route#1",
            fromDepot: {
                depotID: 3,
                depotName: "Depot3",
            },
            toGTC: {
                GTCID: 1,
                GTCName: "GTC1",
            },
            routeOfMCPsID: [5, 4, 6, 2, 3],
            status: "1",
        },

        {
            routeID: 2,
            routeName: "Route#2",
            fromDepot: {
                depotID: 2,
                depotName: "Depot2",
            },
            toGTC: {
                GTCID: 1,
                GTCName: "GTC1",
            },
            routeofMCPsID: [6, 2, 5, 1, 7],
            status: "0",
        },
    ];

    const handleDeleteRoute = e => {}
    const handleAssign = e => {}

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="created-route-collapse"
                aria-expanded={open}
            >
                Created Route
            </Button>
            <Collapse in={open}>
                {data.map((o) => {
                    const firstEle = o.routeOfMCPsID[0];
                    const lastEle = o.routeOfMCPsID[o.routeOfMCPsID.length - 1];
                    return (
                        <div>
                            <Card>
                            <Card.Header>{o.routeName}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div>From: MCP#{firstEle}</div>
                                    <div>To: MCP#{lastEle}</div>
                                    {/* <div>Depot assigned: DepotID {o.fromDepot.depotID}</div> */}
                                </Card.Text>
                                <Button onClick={handleDeleteRoute()} variant="primary">Delete Route</Button>
                                <Button onClick={handleAssign()} variant="primary">Assign</Button>
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                    );
                })}
            </Collapse>
        </>
    );
}
