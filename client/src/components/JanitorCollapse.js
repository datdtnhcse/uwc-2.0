import JanitorCard from "./JanitorCard";
import data from "../mockup_data/janitor.json"

export default function JanitorCollapse() {
    data = data.sort(function(a, b){
        return b.status - a.status
    })
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