import map from "../assets/img/Map.png";
import red from "../assets/img/MCP_red.png";
import blue from "../assets/img/Depot_blue.png";
import green from "../assets/img/Garbage_treatment_center_green.png";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/esm/Collapse";
import CreatedRoute from "../components/CreatedRoute";
import CreateRoute from "../components/CreateRoute";
import Button from "react-bootstrap/esm/Button";

export default function Routing() {



    return (
        <Container>
            <Row>
                <Col lg={5} sm={10} id="map">
                    <img src={map} alt={"map"} style={{ width: 450, height: 450 }}></img>
                </Col>
                <Col lg={2} sm={2} id="legend">
                    <Row className="my-2">
                        <img
                            src={red}
                            alt={"red"}
                            style={{ width: 47, height: 40 }}
                        ></img>
                        MCP
                    </Row>
                    <Row className="my-2">
                        <img
                            src={blue}
                            alt={"blue"}
                            style={{ width: 47, height: 40 }}
                        ></img>
                        Depot
                    </Row>
                    <Row className="my-2">
                        <img
                            src={green}
                            alt={"green"}
                            style={{ width: 47, height: 40 }}
                        ></img>
                        Garbage Treatment Center
                    </Row>
                </Col>
                <Col lg={5} sm={12}>
                    <Container>
                        <Row className="my-3" id="createRouteConponent">
                            <CreateRoute />
                        </Row>
                        <Row id="createdRouteConponent">
                            <CreatedRoute />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
