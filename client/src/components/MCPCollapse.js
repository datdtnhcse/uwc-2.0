import data from "../mockup_data/overview.json"
import { PieChart } from 'react-minimal-pie-chart';
import './MCPCard.css'
function MCPCard({ data }) {
    let fill = ""
    if (data.capacity >= 80 ) {
        fill = "#F31313"
    }  
    else fill = "#72AB94"
    return (
        <div className="d-flex justify-content-between rounded-2 border-success border">
            <div className ="p-5 col-8 justify-content-between font-weight-bold">
                <div>
                    <strong>#MCP {data.id}</strong>
                </div>
                <div className="location">
                    {data.location}
                </div>
            </div>
            <div className ="col-4">
                <PieChart
                    startAngle={-90}
                    radius = {40}
                    data={[{ value: data.capacity, color: fill }]}
                    totalValue={100}
                    lineWidth={35}
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={{
                        fontSize: '25px',
                        fontFamily: 'sans-serif',
                        fill: fill,
                    }}
                    labelPosition={0}
                />
            </div>
        </div>
    )
}
export default function MCPCollapse() {
    return (
        <div className="d-flex row justify-content-between g-5 ">
            {data.map(
                (item) => {
                    return <div className="col-12 col-md-6 col-xl-4 text-success">
                        <MCPCard data={item} />
                    </div>
                }
            )}
        </div>
    )
}