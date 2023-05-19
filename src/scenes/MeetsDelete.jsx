import { Button } from "react-bootstrap"
import { Trash } from "react-bootstrap-icons"

export default function MeetsDelete({ setMeets, meetId }) {

    const handleDelete = (e) => {
        e.preventDefault()
        fetch(`https://car-meets-kdt.web.app/deletemeets/${meetId}`, {
            // fetch(`http://127.0.0.1:5000/deletemeets/${meetId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(setMeets)
            .catch(alert)
    }

    return (
        <>
            <Button variant="outline-danger" onClick={handleDelete} >
                <Trash />
            </Button>
        </>
    )
}