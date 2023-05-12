import { useEffect } from "react"
import MeetsPanel from "./MeetsPanel"


export default function ({ meets, setMeets }) {


    useEffect(() => {
        fetch("https://car-meets-kdt.web.app/meets")
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setMeets(data)
            })
            .catch(alert)
        console.log(meets)
    }, [])

    return (
        <>
            <h1>Upcoming Meets</h1>
            {!meets
                ? "Loading..."
                : meets.map(meet => <MeetsPanel key={meets.id} meets={meet} />
                )
            }
        </>
    )
}