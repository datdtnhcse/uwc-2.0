import map from "../assets/img/Map.png";
import red from "../assets/img/MCP_red.png";
import blue from "../assets/img/Depot_blue.png";
import green from "../assets/img/Garbage_treatment_center_green.png";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/esm/Collapse";
import Route from "../components/CreatedRoute";
import Button from "react-bootstrap/esm/Button";

export default function Routing() {
    return (
        <Container>
            <Row>
                <Col xs={5} id="map">
                    <img src={map} alt={"map"} width={450} height={450}></img>
                </Col>
                <Col xs={2} id="legend">
                    <Row className="my-2">
                        <img
                            src={red}
                            alt={"red"}
                            style={{ width: 47, height: 47 }}
                        ></img>
                        MCP
                    </Row>
                    <Row className="my-2">
                        <img
                            src={blue}
                            alt={"blue"}
                            style={{ width: 47, height: 47 }}
                        ></img>
                        Depot
                    </Row>
                    <Row className="my-2">
                        <img
                            src={green}
                            alt={"green"}
                            style={{ width: 47, height: 47 }}
                        ></img>
                        Garbage Treatment Center
                    </Row>
                </Col>
                <Col xs={5} id="info">
                    <Container>
                        <Row>
                            <form>
                                <Col>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="check1"
                                            name="option1"
                                            value="something"
                                        ></input>
                                        <label
                                            class="form-check-label"
                                            for="check1"
                                        >
                                            MCP#1
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="check2"
                                            name="option2"
                                            value="something"
                                        ></input>
                                        <label
                                            class="form-check-label"
                                            for="check2"
                                        >
                                            MCP#2
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="check3"
                                            name="option3"
                                            value="something"
                                        ></input>
                                        <label
                                            class="form-check-label"
                                            for="check3"
                                        >
                                            MCP#3
                                        </label>
                                    </div>
                                </Col>

                                <Col>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="check4"
                                            name="option4"
                                            value="something"
                                        ></input>
                                        <label
                                            class="form-check-label"
                                            for="check4"
                                        >
                                            MCP#4
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="check5"
                                            name="option5"
                                            value="something"
                                        ></input>
                                        <label
                                            class="form-check-label"
                                            for="check5"
                                        >
                                            MCP#5
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="check6"
                                            name="option6"
                                            value="something"
                                        ></input>
                                        <label
                                            class="form-check-label"
                                            for="check6"
                                        >
                                            MCP#6
                                        </label>
                                    </div>
                                </Col>
                            </form>
                        </Row>
                        <Row>
                            <div class="mb-3">
                                <label for="routename" class="form-label">
                                    Route name:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="routename"
                                    placeholder="Type here"
                                ></input>
                            </div>
                        </Row>
                        <Row>
                            <div class="dropdown">
                                <button
                                    class="btn dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Created route
                                </button>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Route number 1
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Route number 2
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Route number 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
