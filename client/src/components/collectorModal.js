import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
//import data from '../mockup_data/overviewMCP.json'
import axios from "axios";
import { BACKEND_HOST } from "../api/APIRoutes.js";
import "../assets/styles/button.css";

const api = BACKEND_HOST + "/routedata";

//store id of parent component (Janitor or Collector)
//post request of changing status form 1->0 after click confirm

export default function CollectorModal({ id }) {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [route_id, setRoute] = useState(0);

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchRoute() {
            let response = await fetch(api);
            response = await response.json();
            setData(response);
        }
        fetchRoute();
    }, []);

    const handleChange = (value) => {
        setRoute(value);
    };

    const handleConfirm = async (e) => {
        e.preventDefault();
        console.log("collector" + id);

        try {
            await axios.put(
                `${BACKEND_HOST}/collector/assign/${id}/${route_id}`
            );
        } catch (err) {
            alert("");
            console.log(err);
        }
        window.location.reload(false);
    };

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
                    {data.map((route) => {
                        return (
                            <Form className="flex">
                                <Form.Check
                                    className="flex"
                                    inline
                                    type="checkbox"
                                    id="custom-box"
                                    action
                                    onChange={(e) => {
                                        e.preventDefault();
                                        handleChange(route.id);
                                    }}
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
                    <Button variant="success" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
