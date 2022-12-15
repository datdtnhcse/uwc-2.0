import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
//import data from '../mockup_data/overviewMCP.json'
import "../assets/styles/button.css";
import { BACKEND_HOST } from "../api/APIRoutes.js";
const api = BACKEND_HOST + "/routedata";

//store id of parent component (Janitor or Collector)
//post request of changing status form 1->0 after click confirm

export default function CollectorModal({ id }) {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchRoute() {
            let response = await fetch(api);
            response = await response.json();
            setData(response);
        }
        fetchRoute();
    }, []);

    return (
        <>
            <Button className="mybtn" onClick={handleShow}>
                Assign
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Phân công công việc</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.map((route, index) => {
                        return (
                            <Form className="flex">
                                <Form.Check
                                    className="flex"
                                    inline
                                    type="checkbox"
                                    id="custom-switch"
                                />
                                <span>Route {route.id}</span>
                            </Form>
                        );
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
