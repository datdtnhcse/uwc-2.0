import CollectorCard from "./CollectorCard";
import axios, { formToJSON } from 'axios';
//import data from "../mockup_data/collector.json"
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
const api = 'http://localhost:3001/collector'

export default function CollectorCollapse() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchJanitor() {
            let response = await fetch(api)
            response = await response.json()
            console.log(typeof response)
            setData(response)
        }
        fetchJanitor()
    }, [])

    /*data = data.sort(function(a, b){
        return b.status - a.status
    })*/
    return (
        <div className="row d-flex justify-content-between">
            {
                data.map((collector) => {
                    return (
                        <CollectorCard data={collector} />
                    )
                })
            }
        </div>
    )

}