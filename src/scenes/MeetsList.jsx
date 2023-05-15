import { useEffect } from "react"
import MeetsPanel from "./MeetsPanel"
import { Container, Row, Col, } from "react-bootstrap"


export default function ({ meets, setMeets }) {


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
            <Container>
                <h1>Upcoming Meets</h1>
                <Row>

                    {!meets
                        ? "Loading..."
                        : meets.map(meet =>
                            <MeetsPanel key={meets.id} meets={meet} />
                        )
                    }

                </Row>
            </Container>
        </>
    )
}