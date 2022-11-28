// "depotName" : "Depot12",
//         "location" : "An Binh, Di An, Binh Duong",
//         "vehicleList" : {
//             "vehicle1" : {
//                 "driver" : "Sang Dep Trai",
//                 "brand" : "BMW",
//                 "status" : "3"
//             }
//         }
export default function DepotCard({ data }) {
    return <h1>{data.depotname}</h1>
}