import data from "../mockup_data/janitor.json" assert {type: "json"};

import JanitorCard from "./JanitorCard";
export default function JanitorCollapse( ){
    return (
        <div>
            {
                data.map(item => {
                    JanitorCard(item)
                })
            }
        </div>
    )
}