import { Container } from "react-bootstrap";
import { NavigationBar } from "./NavigationBar";

export function Dashboard() {
    return (
        <>
            <NavigationBar />
            <Container>
                <p>Using this app you can add student, remove student, search a specific student and update student</p>
            </Container>
        </>

    );
}