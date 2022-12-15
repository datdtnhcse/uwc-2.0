import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BACKEND_HOST } from "../api/APIRoutes.js";

//import data from '../mockup_data/overviewMCP.json'
import "../assets/styles/button.css";
const api = BACKEND_HOST + "/overviewMCP";

//store id of parent component (Janitor or Collector)
//post request of changing status form 1->0 after click confirm

export default function AssignModal({ id }) {
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mcp_id, setMcp] = useState(0);

    //data = MCP list
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchMCP() {
            let response = await fetch(api);
            response = await response.json();
            setData(response);
        }
        fetchMCP();
    }, []);

    const handleChange = (value) => {
        setMcp(value);
    };

    const handleConfirm = async (e) => {
        e.preventDefault();
        console.log("janitor" + id)

        try {
            let data = await axios.put(`${BACKEND_HOST}/janitor/assign/${id}/${mcp_id}`)
        }
        catch (err) {
            alert("")
            console.log(err)
        }
        window.location.reload(false)
    }

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
                                    <Form.Check
                                        className="flex"
                                        inline
                                        type="checkbox"
                                        id="custom-box"
                                        action
                                            onChange = {(e) => {
                                                e.preventDefault();
                                                handleChange(mcp.id)
                                            }}
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
                    <Button variant="success" onClick = {handleConfirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
