import { Container, Row, Col, Nav } from "react-bootstrap";
import "./App.css";

function Left() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="px-4">
          <Row>
            <Nav defaultActiveKey="/home" className="flex-column">
              <h6>MY AUDIBLE</h6>
              <Nav.Link href="#library">Library</Nav.Link>
              <Nav.Link href="#my-favorites">My Favorites</Nav.Link>
              <Nav.Link href="#listen-again">Listen Again</Nav.Link>
              <Nav.Link href="#Bookmarks">Bookmarks</Nav.Link>
              <Nav.Link href="#notes">Notes</Nav.Link>
            </Nav>
          </Row>
          <Row className="pt-4 pb-4">
            <Nav defaultActiveKey="/home" className="flex-column">
              <h6>GET MORE</h6>
              <Nav.Link href="#on-sale">On Sale</Nav.Link>
              <Nav.Link href="#discover">Discover</Nav.Link>
              <Nav.Link href="#trending">Trending</Nav.Link>
              <Nav.Link href="#recommendations">Recommendations</Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Nav defaultActiveKey="/home" className="flex-column">
              <h6>ACCOUNT</h6>
              <Nav.Link href="#my-account">My Account</Nav.Link>
              <Nav.Link href="#history">History</Nav.Link>
              <Nav.Link href="#settings">Settings</Nav.Link>
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Left;
