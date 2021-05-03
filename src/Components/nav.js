import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Look Book</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Shop</Nav.Link>
          <NavDropdown title="More Shopping" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Category</NavDropdown.Item>
            <NavDropdown.Item href="/">Category 2</NavDropdown.Item>
            <NavDropdown.Item href="/">Category 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Special Category</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
