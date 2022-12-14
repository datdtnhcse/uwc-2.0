// import data from '../mockup_data/overviewDepot.json';
// import '../assets/styles/depot.scss';
import DepotCard from '../components/DepotCard'
import axios, { formToJSON } from 'axios';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
const api = 'http://localhost:3001/overviewDepot'

export default function DepotCollapse() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchDepot() {
      let response = await fetch(api)
      response = await response.json()
      console.log(typeof response)
      setData(response)
    }
    fetchDepot()
  }, [])
  return (
    <div className='d-flex justify-content-around p-5' >
      {
        data.map(item=> {
          console.log(item)
          return <DepotCard data={item} />
        })
      }
    </div>
  )
}