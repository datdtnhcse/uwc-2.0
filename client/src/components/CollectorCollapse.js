import CollectorCard from "./CollectorCard";
import data from "../mockup_data/collector.json"

export default function CollectorCollapse() {
    data = data.sort(function(a, b){
        return b.status - a.status
    })
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