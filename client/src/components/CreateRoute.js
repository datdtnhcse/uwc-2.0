//Get MCPs for route selection

// import data from "../mockup_data/overviewMCP.json";
import { Form, Button, Collapse, ListGroup } from "react-bootstrap";
import { useState } from "react";

// export default function CreateRoute({ data }) {
export default function CreateRoute() {
    const [open, setOpen] = useState(false);

    const data = [
        {
            id: 1,
            location:
                "3/31, Ấp Bình Đường 1, Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương",
            capacity: 58,
        },
        {
            id: 2,
            location:
                "3/31, Ấp Bình Đường 1, Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương",
            capacity: 87,
        },
        {
            id: 3,
            location:
                "3/31, Ấp Bình Đường 1, Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương",
            capacity: 15,
        },
        {
            id: 4,
            location:
                "3/31, Ấp Bình Đường 1, Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương",
            capacity: 99,
        },
        {
            id: 5,
            location:
                "3/31, Ấp Bình Đường 1, Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương",
            capacity: 63,
        },
        {
            id: 6,
            location:
                "3/31, Ấp Bình Đường 1, Phường An Bình, Thành phố Dĩ An, Tỉnh Bình Dương",
            capacity: 2,
        },
    ];

    const onAddMCP = (e) => {};

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
                    <ListGroup>
                        {data.map((item, i) => (
                            <ListGroup.Item key={i}>{item.id}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <br></br>

                    <Form.Label htmlFor="routeName">Route name:</Form.Label>
                    <Form.Control type="text" id="routeName" />

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
        </>
    );
}
{
    /* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */
}
