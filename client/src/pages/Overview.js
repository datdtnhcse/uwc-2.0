
import Collapse from 'react-bootstrap/Collapse';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import MCPCollapse from "../components/MCPCollapse";
import DepotCollapse from "../components/DepotCollapse";
export default function Overview() {
    const [mcpstatus, setMcpstatus] = useState(false);
    const [depotstatus, setDepot] = useState(false);
    return (
        <div>
            <div className="px-5">
                <Button
                    onClick={() => setMcpstatus(!mcpstatus)}
                    aria-controls="mcp"
                    aria-expanded={mcpstatus}
                >
                    MCP
                </Button>
                <Collapse className ="p-2" in={mcpstatus}>
                    <div id="mcp">
                        <MCPCollapse />
                    </div>
                </Collapse>
                {/* break down */}
            </div>
            <div className="p-5">
                <Button
                    onClick={() => setDepot(!depotstatus)}
                    aria-controls="depot"
                    aria-expanded={depotstatus}
                >
                    Depot
                </Button>
                <Collapse in={depotstatus}>
                    <div id="depot">
                        <DepotCollapse itemsPerPage={4}/>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}