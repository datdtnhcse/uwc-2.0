import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import data from '../mockup_data/overviewMCP.json'
import '../assets/styles/button.css'
export default function AssignModal({ id }) {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    {
                        data.map((mcp) => {
                            return (
                                <Form className="flex">
                                    <Form.Check className="flex"
                                        type="switch"
                                        id="custom-switch"
                                    />
                                    <span>MCP {mcp.id}</span>
                                </Form>
                            )
                        })
                    }


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