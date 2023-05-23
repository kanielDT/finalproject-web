import { useEffect } from "react"
import MeetsPanel from "./MeetsPanel"
import { Container, Row, Dropdown, ButtonGroup, Button } from "react-bootstrap"


export default function MeetsList({ meets, setMeets }) {


    useEffect(() => {
        fetch("https://car-meets-kdt.web.app/meets")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setMeets(data)
            })
            .catch(alert)
    }, [])

    return (
        <>
            <div className="my-events">
                <Container>
                    <Dropdown className="dp-1s" as={ButtonGroup} >
                        <Button className="bg-dark">Menu</Button>

                        <Dropdown.Toggle className="bg-dark" />

                        <Dropdown.Menu className="bg-dark" >
                            <Dropdown.Item href="/" className="text-white">Meets List</Dropdown.Item>
                            <Dropdown.Item href="/meets" className="text-white">~Create a Meet-up</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <h1 className="text-center">Creek Car Meets</h1>
                    <Row className="d-flex justify-content-center ">
                        {!meets
                            ? "Loading..."
                            : meets.map(meet => {
                                return <MeetsPanel setMeets={setMeets} key={meet._id} meets={meet} />
                            }
                            )
                        }
                    </Row>
                </Container>
                <footer className=" mt-5 text-white text-center">&copy;2023 Kaniel Tapper</footer>
            </div>
        </>
    )
}