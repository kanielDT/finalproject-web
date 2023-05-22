import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Container, Row, Col, Dropdown, Button, ButtonGroup } from "react-bootstrap"

export default function MeetsForm() {

    const [title, setTitle] = useState("")
    const [hostName, setHostName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, SetTime] = useState("")
    const [type, setType] = useState("")
    const navigate = useNavigate()

    const handleAddMeets = (e) => {
        e.preventDefault()

        fetch("https://car-meets-kdt.web.app/meets", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ title, hostName, phoneNumber, location, description, date, time, type })
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
            <div className="background" >
                <Container>
                    <Dropdown className="dp-1s" as={ButtonGroup} >
                        <Button className="bg-dark">Menu</Button>

                        <Dropdown.Toggle className="bg-dark" />

                        <Dropdown.Menu className="bg-dark" >
                            <Dropdown.Item href="/" className="text-white">Meets List</Dropdown.Item>
                            <Dropdown.Item href="/meets" className="text-white">~Create a Meet-up</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h1 className="h1-Form">Creek Meet Form</h1>
                    <Form onSubmit={handleAddMeets} sm={12} med={6} lg={4} className="Form" >
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="title"><h3>Name of Meet</h3>
                                        <Form.Control type="text"
                                            value={title}
                                            onChange={(e) => { setTitle(e.target.value) }}></Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                            <br />
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="hostName"><h3>Host:</h3>
                                        <Form.Control
                                            type="text"
                                            value={hostName}
                                            onChange={(e) => { setHostName(e.target.value) }}></Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        {/* <Form.Group>
                        <label htmlFor="phoneNumber">Phone#:
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => { setPhoneNumber(e.target.value) }} />
                        </label>
                    </Form.Group> */}

                        <br />

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="location"><h3>Location:</h3>
                                        <Form.Control
                                            type="text"
                                            value={location}
                                            onChange={(e) => { setLocation(e.target.value) }}></Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                            <br />


                            <br />

                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="date"><h3>Meet Date:</h3>
                                        <Form.Control
                                            type="text"
                                            value={date}
                                            onChange={(e) => { setDate(e.target.value) }}></Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="time"><h3>Meet Time:</h3>
                                        <Form.Control
                                            type="text"
                                            value={time}
                                            onChange={(e) => { SetTime(e.target.value) }}></Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Col>

                            <br />

                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="Type/Genre of Cars"><h3>Type/Genre of Cars:</h3>
                                        <Form.Control
                                            type="text"
                                            value={type}
                                            onChange={(e) => { setType(e.target.value) }}></Form.Control>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />

                        <Form.Group>
                            <Form.Label htmlFor="description"><h3>Description:</h3>
                                <Form.Control
                                    type="text"
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}></Form.Control>
                            </Form.Label>
                        </Form.Group>

                        <input type="submit" value="🛞 Add Meet 🛞" className="input-align" />

                    </Form>
                </Container>
                <footer className="text-white text-center">&copy;2023 Kaniel Tapper</footer>
            </div>
        </>
    )
}
