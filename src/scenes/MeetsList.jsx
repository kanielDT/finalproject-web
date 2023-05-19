import { useEffect } from "react"
import MeetsPanel from "./MeetsPanel"
import { Container, Row } from "react-bootstrap"


export default function MeetsList({ meets, setMeets }) {


    useEffect(() => {
        fetch("https://car-meets-kdt.web.app/meets")
            .then(resp => resp.json())
            .then(data => {
                // console.log(data)
                setMeets(data)
            })
            .catch(alert)
    }, [])

    return (
        <>
            <Container>
                <h1>Creek Car-Meets</h1>
                <Row>

                    {!meets
                        ? "Loading..."
                        : meets.map(meet => {
                            console.log(meet)
                            return <MeetsPanel setMeets={setMeets} key={meet._id} meets={meet} />
                        }
                        )
                    }

                </Row>
            </Container>
        </>
    )
}