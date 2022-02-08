import { Navbar, Nav } from "react-bootstrap";
function Header() {
  return (
    <Navbar className="mainnav ">
      <Nav className="mainfont">
        <Nav.Link href="#books">Books</Nav.Link>
        <Nav.Link href="#podcast">Podcast</Nav.Link>
        <Nav.Link href="#live">Live</Nav.Link>
        <Nav.Link href="#radio">Radio</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default Header;
