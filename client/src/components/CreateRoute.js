//Get MCPs for route selection

import data from "../mockup_data/overviewMCP.json";
import { Form, Button, Collapse, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
// import { List } from "react-bootstrap-icons";

// export default function CreateRoute({ data }) {
export default function CreateRoute() {
    // const [MCPdata, setMCPData] = useState([]);
    // const getData = () => {
    //     fetch(require('../mockup_data/overviewMCP.json'), {
    //         // headers: {
    //         //     "Content-Type": "application/json",
    //         //     "Accept": "application/json",
    //         // },
    //     })
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             setMCPData(myJson);
    //         });
    // };
    // useEffect(() => {
    //     getData();
    // }, []);


    var MCParray = [];
    var depot = 0;
    var GTC = 1;

    const [open, setOpen] = useState(false);

    const [routeName, setRouteName] = useState("");

    const onAddMCP = (ele) => {
        MCParray.push(ele.id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRouteName(routeName);
    };

    const handleReset = (e) => {
        e.preventDefault();
        MCParray.length = 0;
    };

    //Làm sao để add thêm 1 element vào trong routedata.json
    //element có dạng object như này:
    {
    //routeID
    //routeName
    //fromDepot
    //toGTC = 1
    //routeofMCPsID
    //status = 0
    }

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="create-route-collapse"
                aria-expanded={open}
            >
                Create Route
            </Button>
            <Collapse in={open}>
                <div className="create-route-collapse">
                    <h4>List of MCPs</h4>
                    <ListGroup>
                        {data.length > 0 ? (
                            data.map((item, i) => (
                                <ListGroup.Item
                                    action
                                    onClick={onAddMCP(item)}
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
                    <ListGroup></ListGroup>
                    <br></br>

                    <Form onSubmit={handleSubmit()} onReset={handleReset()}>
                        <Form.Label htmlFor="routeName">Route name:</Form.Label>
                        <Form.Control
                            type="text"
                            id="routeName"
                            value={routeName}
                            onChange={e => e.target.value}
                        />

                        <div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="secondary" type="reset">
                                Reset
                            </Button>
                        </div>
                    </Form>
                </div>
            </Collapse>
        </>
    );
}
