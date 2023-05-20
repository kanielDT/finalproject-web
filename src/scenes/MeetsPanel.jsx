import { Card, Col } from "react-bootstrap";
import MeetsDelete from "./MeetsDelete";

export default function MeetsPanel({ setMeets, meets, }) {
    return (
        <Col sm={12} md={6} lg={4} >
            <Card>
                <h3 className="mb-2 text-muted"> {meets.title} </h3>
                <h2 className="mb-2 text-muted" >{meets.hostName} </h2>
                <Card.Body>
                    <Card.Text>
                        <p className="mb-2 text-muted"> Description: {meets.description} </p>
                        <p className="mb-2 text-muted"> Location: {meets.location} </p>
                        <p className="mb-2 text-muted"> Phone #: {meets.PhoneNumber} </p>
                        <p className="mb-2 text-muted"> Date: {meets.date} </p>
                        <p className="mb-2 text-muted"> Time: {meets.time} </p>
                        <p className="mb-2 text-muted"> {meets.type} </p>
                        <MeetsDelete setMeets={setMeets} meetId={meets._id} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
    // <Card className="card">
    //     <div className="show-container button-effect">
    //         <h3>Hostname: {meets.hostName}</h3>
    //         <p>Phone#: {meets.phoneNumber}</p>
    //         <p>Location: {meets.location}</p>
    //         <p>Description: {meets.description}</p>
    //         <p>Date: {meets.date}       Time: {meets.time}</p>
    //     </div>
    // </Card>













