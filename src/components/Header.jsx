import { Navbar,Container } from 'react-bootstrap';

// Homeページです
const Header = () => {
    return(
        <>
            <Navbar expand="lg" variant="dark" bg="primary">
                <Container>
                    <Navbar.Brand href="/home">DeMiAオフィスいる人リスト</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header