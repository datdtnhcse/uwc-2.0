// import data from "../mockup_data/routedata.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
// import axios from "axios";

import { useEffect, useState } from "react";
import { BACKEND_HOST } from "../api/APIRoutes.js";
const api = BACKEND_HOST + "/routedata";

// function DeleteRoute(name) {
//     fetch("http://localhost:3001/routedata/del/${name}", {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         //   body: JSON.stringify(data)
//     });
// }

async function DeleteRoute(name) {
    let response = await fetch(`${BACKEND_HOST}/routedata/del/${name}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    response = await response.json();
    console.log(typeof response);
    // setData(response)
    window.location.reload(false);
}

export default function CreatedRoute() {
    const [open, setOpen] = useState(false);
    // const [deleteFlag, setDeleteFlag] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchRoute() {
            let response = await fetch(api);
            response = await response.json();
            console.log(typeof response);
            setData(response);
            // window.location.reload(false);
        }
        fetchRoute();
    }, []);

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
                <div id="created-route-collapse">
                    {data.map((item) => {
                        console.log(item);
                        if (
                            item.MCPinRoute[0].mcpID == undefined ||
                            item.MCPinRoute == undefined ||
                            item.MCPinRoute[item.MCPinRoute.length - 1].mcpID ==
                                undefined
                        ) {
                            return <div>No MCP in this route</div>;
                        } else {
                            var firstEle = item.MCPinRoute[0].mcpID;
                            var lastEle =
                                item.MCPinRoute[item.MCPinRoute.length - 1]
                                    .mcpID;

                            return (
                                <div>
                                    <Card>
                                        <Card.Header>{item.name}</Card.Header>
                                        <Card.Body>
                                            <Card.Text>
                                                <div>From: MCP#{firstEle}</div>
                                                <div>To: MCP#{lastEle}</div>
                                                <div>
                                                    From depot:{" "}
                                                    {item.fromDepot.id}
                                                </div>
                                                <div>
                                                    To GTC: {item.togtc.id}
                                                </div>
                                            </Card.Text>
                                            <Button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    DeleteRoute(item.name);
                                                }}
                                                variant="primary"
                                            >
                                                Delete Route
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    <br></br>
                                </div>
                            );
                        }
                    })}
                </div>
            </Collapse>
        </>
    );
}
