import CollectorCard from "./CollectorCard";
import data from "../mockup_data/collector.json"
export default function CollectorCollapse() {
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