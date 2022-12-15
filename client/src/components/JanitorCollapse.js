import JanitorCard from "./JanitorCard";
import axios, { formToJSON } from 'axios';
//import data from "../mockup_data/janitor.json"
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
const api = 'http://localhost:3001/janitor'

export default function JanitorCollapse() {
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
    /*data = data.sort(function (a, b) {
        return b.status - a.status
    })*/
    return (
        <div className="row d-flex justify-content-between">
            {
                data.map((janitor) => {
                    return (
                        <JanitorCard data={janitor} />
                    )
                })
            }
        </div>
    )

}