import { Card, Col, Image } from "react-bootstrap";
import MeetsDelete from "./MeetsDelete";

export default function MeetsPanel({ setMeets, meets, image }) {
    return (
        <Col sm={12} md={6} lg={4} >
            <Card className="pn">
                <h2 >{meets.hostName} </h2>
                <h3 > {meets.title} </h3>
                <Image fluid
                    src={`./images/events/${meets.image}`} />
                <Card.Body>
                    <Card.Text>
                        <p className="mb-2 text-white"> Description: {meets.description} </p>
                        <p className="mb-2 text-white"> Location: <a className="text-white" href={`https://www.google.com/maps/place/${meets.location}`} target="_blank">{meets.location}</a> </p>
                        {/* <p className="mb-2 text-muted"> Phone #: {meets.PhoneNumber} </p> */}
                        <p className="mb-2 text-white"> Date: {meets.date} </p>
                        <p className="mb-2 text-white"> Time: {meets.time} </p>
                        <p className="mb-2 text-white"> Type: {meets.type} </p>
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













