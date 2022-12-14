import Button from "react-bootstrap/esm/Button";
import JanitorCollapse from "../components/JanitorCollapse"
import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';
import CollectorCollapse from "../components/CollectorCollapse";
import { Cart, Truck } from "react-bootstrap-icons";

export default function Assign() {
    const [janitorstatus, setJanitorstatus] = useState(false);
    const [collectorstatus, setCollectorstatus] = useState(false);
    return (
        <div>
            <div className="m-5 mb-1 p-5 pb-1">
                <Button
                    className="btn-lg"
                    onClick={() => setJanitorstatus(!janitorstatus)}
                    aria-controls="janitor"
                    aria-expanded={janitorstatus}
                >
                    <i class="bi-alarm"></i>
                    <span>
                        <Cart /> | Janitor
                    </span>

                </Button>
                <Collapse className="p-1" in={janitorstatus}>
                    <div id="janitor">
                        <JanitorCollapse />
                    </div>
                </Collapse>
            </div>

            <div className="m-5 p-5">
                <Button
                    className="btn-lg"
                    onClick={() => setCollectorstatus(!collectorstatus)}
                    aria-controls="collector"
                    aria-expanded={collectorstatus}
                >
                    <i class="bi-alarm"></i>
                    <span>
                        <Truck /> | Collector
                    </span>
                </Button>

                <Collapse in={collectorstatus}>
                    <div id="collector" className='mb-5'>
                        <CollectorCollapse />
                    </div>
                </Collapse>
            </div>
        </div>
    )


}