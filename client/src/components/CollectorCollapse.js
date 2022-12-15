import { BACKEND_HOST } from "../api/APIRoutes.js";
import CollectorCard from "./CollectorCard";
//import data from "../mockup_data/collector.json"
import React, { useEffect, useState } from "react";
const api = BACKEND_HOST + "/collector";

export default function CollectorCollapse() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchJanitor() {
            let response = await fetch(api);
            response = await response.json();
            console.log(typeof response);
            setData(response);
        }
        fetchJanitor();
    }, []);

    /*data = data.sort(function(a, b){
        return b.status - a.status
    })*/
    return (
        <div className="row d-flex justify-content-between">
            {data.map((collector) => {
                return <CollectorCard data={collector} />;
            })}
        </div>
    );
}
