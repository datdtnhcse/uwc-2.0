// "depotName": "Depot2",
//       "location": "Hogwart University",
//       "vehicleList": [
//         {
//           "id": 1,
//           "driver": "Hermione Granger",
//           "brand": "Broomstick",
//           "status": "1"
//         },
//         {
//           "id": 2,
//           "driver": "Hermione Granger",
//           "brand": "Broomstick",
//           "status": "1"
//         },
//         {
//           "id": 3,
//           "driver": "Hermione Granger",
//           "brand": "Broomstick",
//           "status": "1"
//         },
//       ]
export default function DepotCard(data) {
    return (
        <div className="rounded-2 border border-success w-40 p-4">
            <div className="p-3 d-flex justify-content-between">
                <div className="p-3">
                    <h6>{data.depotName}</h6>
                </div>
                <div className="p-3">
                    <h6>Location: {data.location}</h6>
                </div>
            </div>

            <div>
                {
                    data.vehicleList.map(item => {
                        return (
                            <div className="d-flex justify-content-around border p-3 ">
                                <h1>{item.id}</h1>
                                <h1>{item.brand}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}