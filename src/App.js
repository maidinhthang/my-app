import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  CardGroup,
  Card,
} from "react-bootstrap";
import "./App.css";
import Photo from "./photo.png";

function App() {
  return (
    <Container fluid>
      {/* left */}
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

        {/* Main */}

        <Col md={6} className="border-start border-end">
          <Container>
            <Navbar>
              <Nav className="me-auto ">
                <Nav.Link href="#books">Books</Nav.Link>
                <Nav.Link href="#podcast">Podcast</Nav.Link>
                <Nav.Link href="#live">Live</Nav.Link>
                <Nav.Link href="#radio">Radio</Nav.Link>
              </Nav>
            </Navbar>
            <Container className="pt-4 pb-4">
              <Row className="pt-4 pb-4 border rounded">
                <h6>From the Library</h6>
                <CardGroup>
                  <Card className="border rounded">
                    <Card.Img variant="top" src={Photo} />
                    <Card.Title>48 Laws of Power</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                  <Card className="border rounded">
                    <Card.Img variant="top" src="obama_2.png" />
                    <Card.Title>Zero to One</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                  <Card className="border rounded">
                    <Card.Img variant="top" src="test.png" />
                    <Card.Title>Atomic Habits</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                  <Card className="border rounded">
                    <Card.Img variant="top" src="test.png" />
                    <Card.Title>Think Like Monk</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                </CardGroup>
              </Row>
            </Container>
            <Container className="pt-4 pb-4">
              <Row className="pt-4 pb-4 border rounded">
                <h6>Books That Might Fit To Your Taste</h6>

                <CardGroup>
                  <Card className="border rounded">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Title>Green Lights</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                  <Card className="border rounded">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Title>A Promised land</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                  <Card className="border rounded">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Title>Just As I Am</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                  <Card className="border rounded">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Title>Becoming</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                      thangmd
                    </Card.Subtitle>
                  </Card>
                </CardGroup>
              </Row>
            </Container>
            <Container className="pt-4 pb-4">
              <Row className="pt-2 pb-2 border rounded">
                <h6>Recently Played</h6>
                <Row className="pt-1 pb-1">Everything that remains</Row>
                <Row className="pt-1 pb-1">A Time for Mercy</Row>
                <Row className="pt-1 pb-1">Rhythm of war</Row>
              </Row>
            </Container>
          </Container>
        </Col>

        <Col md={3}>
          <Container>
            <Row className="pt-4 pb-4">
              <h6>Notifications</h6>
              <Row className="pt-1 pb-1"></Row>
              <Row className="pt-1 pb-1">
                <h7></h7>
              </Row>
            </Row>
            <Row className="pt-4 pb-4">
              <h6>Top Authors</h6>
            </Row>

            <Row className="pt-4 pb-4">
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
              <Col>.......</Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
