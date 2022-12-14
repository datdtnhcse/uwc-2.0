export default function DepotCard(data) {
    return (
        <div className="rounded-2 border border-success w- p-4 justify-content-between">
            <div className="d-flex justify-content-around ">
                <div className="p-3">
                    <h6>{data.data.depotName}</h6>
                </div>
                <div className="p-3">
                    <h6>Location: {data.data.location}</h6>
                </div>
            </div>

            <div>
                {
                    data.data.vehicles.map(item => {
                        return (
                            <div className="d-flex justify-content-between border p-3 border-success">
                                <div className="w-75">
                                    <strong>Vehicle#{item.id}</strong>
                                    <br></br>
                                    {item.brand}
                                    <br></br>
                                    {item.driver}
                                </div>
                                {
                                    item.status === 0 ?
                                        <div className="w-25">
                                            <div >
                                                <strong>Status</strong>
                                            </div>
                                            Idle
                                        </div>
                                        :
                                        <div className="w-25">
                                            <div >
                                                <strong>Status</strong>
                                            </div>
                                            On route
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}