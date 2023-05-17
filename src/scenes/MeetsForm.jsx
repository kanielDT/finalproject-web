import React from "react"
import { useState } from "react"
import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function MeetsForm({ setMeets }) {

    const [title, setTitle] = useState("")
    const [hostName, setHostName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, SetTime] = useState("")
    const navigate = useNavigate()

    const handleAddMeets = (e) => {
        e.preventDefault()

        fetch("https://car-meets-kdt.web.app/meets", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ title, hostName, phoneNumber, location, description, date, time })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    //sjccess
                    alert(data.message)
                    navigate("/")

                } else {
                    // omg we crashed
                    alert(data)
                }

                //setMeets(data)
            })

            .catch(alert)
    }

    return (
        <>
            <h1 className="h1-Fomr">Creek Meet Form</h1>
            <Form onSubmit={handleAddMeets} sm={12} med={6} lg={4} className="Form" >
                <Form.Group>
                    <label htmlFor="title">Name of Meet
                        <input type="text"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </label>
                </Form.Group>

                <br />

                <Form.Group>
                    <label htmlFor="hostName">Host:
                        <input
                            type="text"
                            value={hostName}
                            onChange={(e) => { setHostName(e.target.value) }} />
                    </label>
                </Form.Group>

                <br />

                <Form.Group>
                    <label htmlFor="phoneNumber">Phone#:
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => { setPhoneNumber(e.target.value) }} />
                    </label>
                </Form.Group>

                <br />

                <Form.Group>
                    <label htmlFor="location">Location:
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => { setLocation(e.target.value) }} />
                    </label>
                </Form.Group>

                <br />

                <Form.Group>
                    <label htmlFor="description">Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }} />
                    </label>
                </Form.Group>

                <br />

                <Form.Group>
                    <label htmlFor="date">Meet Date:
                        <input
                            type="text"
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }} />
                    </label>
                </Form.Group>

                <br />

                <Form.Group>
                    <label htmlFor="time">Meet Time:
                        <input
                            type="text"
                            value={time}
                            onChange={(e) => { SetTime(e.target.value) }} />
                    </label>
                </Form.Group>

                <br />

                <Form.Group>
                    <Form.Select htmlFor="Type of car" className="dropdown">
                        <option value="Type Of Meet"></option>
                        <option value="Euro">Euro 🏎️</option>
                        <option value="JDM">JDM 🏎️</option>
                        <option value="American muscle">American Muscle 🏎️</option>
                        <option value="mixed carmeet">Mixed carmeet 🏎️🏎️🏎️</option>
                    </Form.Select>
                </Form.Group>

                <br />

                <input type="submit" value="🛞 Add Meet 🛞" />

            </Form>
        </>
    )
}
