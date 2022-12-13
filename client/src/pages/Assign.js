import Button from "react-bootstrap/esm/Button";
import JanitorCollapse from "../components/JanitorCollapse"
import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
export default function Assign() {
    const [janitorstatus, setJanitorstatus] = useState(false);
    return (
        <div className="p-4">
            <Button
                className="btn-lg"
                onClick={() => setJanitorstatus(!janitorstatus)}
                aria-controls="janitor"
                aria-expanded={janitorstatus}
            >
                <i class="bi-alarm"></i>
                <span>
                    {/* <TrashFill /> | MCP */}
                    Janitor
                </span>


            </Button>
            <Collapse className="p-1" in={janitorstatus}>
                <div id="janitor">
                    <JanitorCollapse />
                </div>
            </Collapse>
        </div>
    )
}