//Get MCPs for route selection

import data from "../mockup_data/overviewMCP.json";
import depotData from "../mockup_data/overviewDepot.json";
import { Form, Button, Collapse, ListGroup } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
// import { List } from "react-bootstrap-icons";

// export default function CreateRoute({ data }) {
export default function CreateRoute() {
    // var MCParray = [];
    // var GTC = 1;
    var depot = "";

    const [open, setOpen] = useState(false);

    const [newRoute, setNewRoute] = useState({});
    const MCParray = useRef([]);
    const [routeName, setRouteName] = useState("");

    const onMCPadd = (ele) => {
        // MCParray.push(ele.id);
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // setNewRoute((values) => [
        //     ...values,
        //     {
        //         routeName: routeName,
        //         fromDepot: depot,
        //         toGTC: {
        //             GTCID: 1,
        //             GTCName: "GTC1",
        //         },
        //         routeOfMCPsID: MCParray,
        //         status: 0,
        //     },
        // ]);
    };

    const onaddMCP = (ele) => {
        // MCParray.current.push(ele);
        // console.log(ele);
        // setMCParray((arr) => [...arr, ele])
    };

    const handleReset = (e) => {
        // e.preventDefault();
        // MCParray = [];
        // setNewRoute({});
        // setRouteName("");
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
                            {data.length > 0 ? (
                                data.map((item, i) => (
                                    <ListGroup.Item
                                        action
                                        onClick={onaddMCP(item.id)}
                                        key={i}
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
                                        onClick={(depot = item.depotName)}
                                        key={i}
                                    >
                                        {item.depotName}
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <div>No depot</div>
                            )}
                        </ListGroup>
                        <br></br>

                        <Form.Label htmlFor="routeName">Route name:</Form.Label>
                        <Form.Control
                            type="text"
                            id="routeName"
                            value={routeName}
                            onChange={(e) => setRouteName(e.target.value)}
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
