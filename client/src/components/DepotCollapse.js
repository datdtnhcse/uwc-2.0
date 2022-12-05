// import React, { useState, useMemo } from 'react';
// import Pagination from './Pagination';
// import data from '../mockup_data/overviewDepot.json';
// import '../assets/styles/depot.scss';
import DepotCard from '../components/DepotCard'
// let PageSize = 2;

// export default function DepotCollapse() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const currentTableData = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     return data.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage]);

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>Depots's Information</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentTableData.map(item => {
//             return (
//               <tr>
//                 <td>{item.depotName}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <Pagination
//         className="pagination-bar"
//         currentPage={currentPage}
//         totalCount={data.length}
//         pageSize={PageSize}
//         onPageChange={page => setCurrentPage(page)}
//       />
//     </>
//   );
// }
const data =
  [
    {
      "depotName": "Depot2",
      "location": "Hogwart University",
      "vehicleList": [
        {
          "id": 1,
          "driver": "Hermione Granger",
          "brand": "Broomstick",
          "status": "1"
        },
        {
          "id": 2,
          "driver": "Hermione Granger",
          "brand": "Broomstick",
          "status": "1"
        },
        {
          "id": 3,
          "driver": "Hermione Granger",
          "brand": "Broomstick",
          "status": "1"
        },
      ]
    },
    {
      "depotName": "Depot2",
      "location": "Hogwart University",
      "vehicleList": [
        {
          "id": 1,
          "driver": "Hermione Granger",
          "brand": "Broomstick",
          "status": "1"
        },
        {
          "id": 2,
          "driver": "Hermione Granger",
          "brand": "Broomstick",
          "status": "1"
        },
        {
          "id": 3,
          "driver": "Hermione Granger",
          "brand": "Broomstick",
          "status": "1"
        },
      ]
    }
]

export default function DepotCollapse() {
  return (
    <div className='d-flex justify-content-around' >
      {
        data.map(item => {
          return DepotCard(item)
        })
      }
    </div >
  )
}