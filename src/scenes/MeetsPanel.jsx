import { Card } from "react-bootstrap";

export default function MeetsPanel({ meets }) {
    return (
        <Card className="card">
            <div className="show-container button-effect">
                <h3>Hostname: {meets.hostName}</h3>
                <p>Phone#: {meets.phoneNumber}</p>
                <p>Location: {meets.location}</p>
                <p>Description: {meets.description}</p>
                <p>Date: {meets.date}       Time: {meets.time}</p>
            </div>
        </Card>
    )
}