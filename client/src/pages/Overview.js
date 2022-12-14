
import Collapse from 'react-bootstrap/Collapse';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import MCPCollapse from "../components/MCPCollapse";
import DepotCollapse from "../components/DepotCollapse";
import { BarChartLineFill, GeoFill, TrashFill } from "react-bootstrap-icons";
import "../assets/styles/button.css"

export default function Overview() {
    const [mcpstatus, setMcpstatus] = useState(false);
    const [depotstatus, setDepot] = useState(false);
    return (
        <div>
            <div className="m-5 mb-1 p-5 pb-1">

                <Button
                    className="btn-lg mybtn"
                    onClick={() => setMcpstatus(!mcpstatus)}
                    aria-controls="mcp"
                    aria-expanded={mcpstatus}
                >
                    <i class="bi-alarm"></i>
                    <span>
                        <TrashFill /> | MCP

                    </span>


                </Button>
                <Collapse className="p-1" in={mcpstatus}>
                    <div id="mcp">
                        <MCPCollapse />
                    </div>
                </Collapse>
                {/* break down */}
            </div>
            <div className="m-5 p-5">
                <Button
                    className="btn-lg mybtn"
                    onClick={() => setDepot(!depotstatus)}
                    aria-controls="depot"
                    aria-expanded={depotstatus}
                >
                    <i class="bi-alarm"></i>
                    <span>
                        <GeoFill /> | Depot
                    </span>
                </Button>

                <Collapse in={depotstatus}>
                    <div id="depot" className='mb-5'>
                        <DepotCollapse/>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}