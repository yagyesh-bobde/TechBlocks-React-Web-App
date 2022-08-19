import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';

const  NavbarC = () =>  {
    const expand = 'md';
    const location = useLocation();
    return (
        <Navbar key={expand} fixed='top' expand={expand} className="mb-3 d-flex" variant='dark' style={{ backgroundColor: `${(location.pathname === '/')? 'transparent !important': 'black'}` }}>
            <Container >
                <Navbar.Brand href="/" style={{ fontFamily: 'monospace', fontWeight: '700', fontSize:'1.25rem', color: 'white' }}>TechBlocks</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3" style={{ color:'white !important'}}>
                            <Nav.Link href="/academy">Academy</Nav.Link>
                            <Nav.Link href="/exchange">ExchangeRates</Nav.Link>
                            <Nav.Link href="/stats">Statistics</Nav.Link>                        
                        </Nav>
                        
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavbarC;