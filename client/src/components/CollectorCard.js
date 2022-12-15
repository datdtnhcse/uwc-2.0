import CollectorModal from "./collectorModal";
import { Modal, Button } from "react-bootstrap";

/*{
    "id": 1,
    "name": "Le Tri Minh",
    "nearest-depot": "Depot#2",
    "status": 1
},*/
export default function CollectorCard({ data }) {
    return (
        <div class="col-md-6 col-xs-12 col-xl-4 mb-2 ">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                    {
                        data.status === 1 ? <p class="card-text">Status: <span class="badge bg-success">Available</span></p> : <p class="card-text">Status: <span class="badge bg-danger">Unavailable</span></p>
                    }
                    <h5>ID: {data.id}</h5>
                    <h5>Nearest Depot: {data.nearest_depot}</h5>
                    {
                        data.status === 1 ? <CollectorModal /> : <Button className="abtn"> Assigned </Button>
                    }
                </div>
            </div>
        </div>
    )
}