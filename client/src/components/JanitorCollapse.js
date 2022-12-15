import JanitorCard from "./JanitorCard";
//import data from "../mockup_data/janitor.json"
import React, { useEffect, useState } from "react";
import { BACKEND_HOST } from "../api/APIRoutes.js";
const api = BACKEND_HOST + "/janitor";

export default function JanitorCollapse() {
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
    /*data = data.sort(function (a, b) {
        return b.status - a.status
    })*/
    return (
        <div className="row d-flex justify-content-between">
            {data.map((janitor) => {
                return <JanitorCard data={janitor} />;
            })}
        </div>
    );
}
