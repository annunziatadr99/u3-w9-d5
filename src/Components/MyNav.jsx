import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
const MyNav = () => (
  <Navbar expand="lg" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
          alt="logo netflix"
          height={80}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#TV Shows">TV Shows</Nav.Link>
          <Nav.Link href="#Movies">Movies</Nav.Link>
          <Nav.Link href="#Recently Added">Recently Added</Nav.Link>
          <Nav.Link href="#My List">My List</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#home">
            <Search />
          </Nav.Link>
          <Nav.Link href="#link">KIDS</Nav.Link>
          <Nav.Link href="#home">
            <BellFill />
          </Nav.Link>
          <NavDropdown title={<PersonFill />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
