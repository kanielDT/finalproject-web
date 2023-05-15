import { Card, Container, Row, Col } from "react-bootstrap";

export default function MeetsPanel({ meets }) {
    return (
        <Col style={{ width: '18rem' }}>
            <div>
                <h2 className="mb-2 text-muted">{meets.hostName} </h2>
                <h3 className="mb-2 text-muted"> {meets.title} </h3>
                <Card.Text>
                    <p className="mb-2 text-muted"> Description: {meets.description} </p>
                    <p className="mb-2 text-muted"> Location: {meets.location} </p>
                    <p className="mb-2 text-muted"> Phone #: {meets.PhoneNumber} </p>
                    <p className="mb-2 text-muted"> Date: {meets.date} </p>
                    <p className="mb-2 text-muted"> Time: {meets.time} </p>
                </Card.Text>
            </div>
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













