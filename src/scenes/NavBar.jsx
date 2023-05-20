import { Dropdown, Button, ButtonGroup } from "react-bootstrap"

export default function NavBar() {
    return (
        <Dropdown className="dp-1s" as={ButtonGroup}>
            <Button variant="success">Split Button</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item href="/">Meets List</Dropdown.Item>
                <Dropdown.Item href="/meets">~Create a Meet-up</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
