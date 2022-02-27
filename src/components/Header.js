import { Navbar,Container } from 'react-bootstrap';

// Homeページです
function Header(){
    return(
        <>
            <Navbar expand="lg" variant="dark" bg="primary">
                <Container>
                    <Navbar.Brand href="#">DeMiAオフィスいる人リスト</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header