import { Modal, Button } from "react-bootstrap";
import axios, { formToJSON } from 'axios';
import React, { useState, useCallback, useEffect } from "react";
import Form from 'react-bootstrap/Form';

//import data from '../mockup_data/overviewMCP.json'
import '../assets/styles/button.css';
const api = 'http://localhost:3001/overviewMCP';

//store id of parent component (Janitor or Collector)
//post request of changing status form 1->0 after click confirm

export default function AssignModal({ id }) {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchMCP() {
            let response = await fetch(api)
            response = await response.json()
            setData(response)
        }
        fetchMCP()
    }, [])

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
                        data.map((mcp, index) => {
                            return (
                                <Form className="flex">
                                    <Form.Check
                                        className="flex"
                                        inline
                                        type="checkbox"
                                        id='custom-checkbox'

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
                        {
                            axios.put("http://localhost:3001/janitor/assign/3/2")
                        }
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}