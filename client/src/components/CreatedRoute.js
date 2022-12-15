// import data from "../mockup_data/routedata.json";
import Button from "react-bootstrap/button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import axios from "axios";

import { useState, useEffect } from "react";
const api = 'http://localhost:3001/routedata'


function DeleteRoute (name)
{
    
}

export default function CreatedRoute() {
    const [open, setOpen] = useState(false);
    // const [deleteFlag, setDeleteFlag] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchRoute() {
            let response = await fetch(api)
            response = await response.json()
            console.log(typeof response)
            setData(response)
        }
        fetchRoute()
    }, [])

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
                        console.log(item)
                        var firstEle = item.MCPinRoute[0].mcpID;
                        var lastEle =
                            item.MCPinRoute[item.MCPinRoute.length - 1].mcpID;
                        return (
                            <div>
                                <Card>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <div>From: MCP#{firstEle}</div>
                                            <div>To: MCP#{lastEle}</div>
                                            <div>From depot: {item.fromDepot.id}</div>
                                            <div>To GTC: {item.togtc.id}</div>
                                        </Card.Text>
                                        <Button
                                            onClick={DeleteRoute(item.name)}
                                            variant="primary"
                                        >
                                            Delete Route
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <br></br>
                            </div>
                        );
                    })}
                </div>
            </Collapse>
        </>
    );
}
