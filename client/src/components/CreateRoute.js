import { useState, useEffect } from "react";
import { Button, Collapse, Form, ListGroup } from "react-bootstrap";
import { BACKEND_HOST } from "../api/APIRoutes.js";
// import depotData from "../mockup_data/overviewDepot.json";
// import GTCData from "../mockup_data/overviewGTC.json";
// import data from "../mockup_data/overviewMCP.json";

const api = BACKEND_HOST + "/routedata/add";
// import { List } from "react-bootstrap-icons";

// {
//     "name": "HCMUT Company",
//     "from": "Depot3",
//     "to": {
//         "id": 3,
//         "name": "SAD"
//     },
//     "mcps": [1,3,4,5],
//     "status": "1"
// }

export default function CreateRoute() {
    const [open, setOpen] = useState(false);

    const [routeName, setRouteName] = useState("");
    const [fromDepot, setFromDepot] = useState("");
    const [toGTC, setToGTC] = useState({
        id: 0,
        name: "",
    });
    const [mcps, setMcps] = useState([]);

    const [mcpData, setMCPData] = useState([]);
    useEffect(() => {
        async function fetchMCP() {
            let response = await fetch(BACKEND_HOST + "/overviewMCP");
            response = await response.json();
            setMCPData(response);
        }
        fetchMCP();
    }, []);

    const handleMcps = (e) => {
        e.preventDefault();
        const mcpValue = parseInt(e.target.value);
        const prevMcps = mcps;
        setMcps([...prevMcps, mcpValue]);
        console.log(mcps);
    };

    const [depotData, setDepot] = useState([]);

    useEffect(() => {
        async function fetchDepot() {
            let response = await fetch(BACKEND_HOST + "/overviewDepot");
            response = await response.json();
            setDepot(response);
        }
        fetchDepot();
    }, []);

    const [GTCData, setGtc] = useState([]);

    useEffect(() => {
        async function fetchGTC() {
            let response = await fetch(BACKEND_HOST + "/overviewGTC");
            response = await response.json();
            setGtc(response);
        }
        fetchGTC();
    }, []);

    var status = "0";


    const handleToGTC = (id, name) => {
        setToGTC({
            id: id,
            name: name,
        });
        console.log(toGTC);
    };

    //add route
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(routeName, fromDepot, toGTC, mcps, status);

        //Method Add
        async function addRoute() {
            let response = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                //name, from, to{id, name}, mcps, status
                body: JSON.stringify({
                    name: routeName,
                    from: fromDepot,
                    to: toGTC,
                    mcps: mcps,
                    status,
                }),
            });
            response = await response.json();
            console.log(typeof response);
            window.location.reload(false);
            // setData(response)
        }
        addRoute();

        setRouteName("");
        setFromDepot("");
        setToGTC({
            id: 0,
            name: "",
        });
        setMcps([]);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setRouteName("");
        setFromDepot("");
        setToGTC({
            id: 0,
            name: "",
        });
        setMcps([]);
    };

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="create-route-collapse"
                aria-expanded={open}
            >
                Create Route
            </Button>

            <Form onSubmit={handleSubmit} onReset={handleReset}>
                <Collapse in={open}>
                    <div className="create-route-collapse">
                        <h4>List of MCPs</h4>
                        <ListGroup>
                            {mcpData.length > 0 ? (
                                mcpData.map((item, i) => (
                                    <ListGroup.Item
                                        action
                                        onClick={handleMcps}
                                        key={i}
                                        value={item.id}
                                    >
                                        {item.id}
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <div>No MCP</div>
                            )}
                        </ListGroup>
                        <h4>List of depot</h4>
                        <ListGroup>
                            {depotData.length > 0 ? (
                                depotData.map((item, i) => (
                                    <ListGroup.Item
                                        action
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setFromDepot(item.depotName);
                                            console.log(fromDepot);
                                        }}
                                        key={i}
                                        value={item.depotName}
                                    >
                                        {item.depotName}
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <div>No depot</div>
                            )}
                        </ListGroup>
                        <h4>List of GTC</h4>
                        <ListGroup>
                            {GTCData.length > 0 ? (
                                GTCData.map((item, i) => (
                                    <ListGroup.Item
                                        action
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToGTC(item.id, item.name);
                                        }}
                                        key={i}
                                    >
                                        <div>{item.id}</div>
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <div>No GTC</div>
                            )}
                        </ListGroup>
                        <br></br>

                        <Form.Label htmlFor="routeName">Route name:</Form.Label>
                        <Form.Control
                            type="text"
                            id="routeName"
                            value={routeName}
                            onChange={(e) => {
                                setRouteName(e.target.value);
                                console.log(routeName);
                            }}
                        />

                        <div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="reset">
                                Reset
                            </Button>
                        </div>
                    </div>
                </Collapse>
            </Form>
        </>
    );
}
