import React from "react"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function MeetsForm({ setMeets }) {

    const [hostName, setHostName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, SetTime] = useState("")
    const navigate = useNavigate

    const handleAddMeets = (e) => {
        e.preventDefault()

        fetch("https://car-meets-kdt.web.app/meets", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ hostName, phoneNumber, location, description, date, time })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    alert(data.message)
                    return
                }
                setMeets(data)
                navigate("/meets")
            })
            .catch(alert)
    }

    return (
        <Form onSubmit={handleAddMeets} >
            <label htmlFor="hostName">Host:
                <input type="text"
                    value={`hostName`}
                    onChange={(e) => { setHostName(e.target.value) }} />
            </label>

            <br />

            <label htmlFor="phoneNumber">Phone#:
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => { setPhoneNumber(e.target.value) }} />
            </label>

            <br />

            <label htmlFor="location">Location:
                <input
                    type="text"
                    value={location}
                    onChange={(e) => { setLocation(e.target.value) }} />
            </label>

            <br />

            <label htmlFor="description">Meet description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} />
            </label>

            <br />

            <label htmlFor="date">Date of meet:
                <input
                    type="text"
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }} />
            </label>



            <label htmlFor="time">Time of Meet:
                <input
                    type="text"
                    value={time}
                    onChange={(e) => { SetTime(e.target.value) }} />
            </label>

            <br />

            <input type="submit" value="Add Meet" />


        </Form>
    )
}