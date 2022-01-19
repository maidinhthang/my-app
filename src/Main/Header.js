import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Navbar>
      <Nav className="me-auto ">
        <Nav.Link href="#books">Books</Nav.Link>
        <Nav.Link href="#podcast">Podcast</Nav.Link>
        <Nav.Link href="#live">Live</Nav.Link>
        <Nav.Link href="#radio">Radio</Nav.Link>
      </Nav>
    </Navbar>
  );
}
