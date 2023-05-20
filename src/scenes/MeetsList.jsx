import { useEffect } from "react"
import MeetsPanel from "./MeetsPanel"
import { Container, Row } from "react-bootstrap"
import NavBar from "./NavBar"
import Footer from "./Footer"


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
            {/* <NavBar /> */}
            <div className="my-events">
                <Container>
                    <div className="text-center text-danger">
                        <h1>Creek Car-Meets</h1>
                    </div>
                    <Row>

                        {!meets
                            ? "Loading..."
                            : meets.map(meet => {
                                return <MeetsPanel setMeets={setMeets} key={meet._id} meets={meet} />
                            }
                            )
                        }

                    </Row>
                </Container>
            </div>
            {/* <Footer /> */}
        </>
    )
}