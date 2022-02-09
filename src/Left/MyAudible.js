import { Container, Row, Nav, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function MyAudible() {
  const list = [
    { icon: IC.BookFill, nav: "Library" },
    { icon: IC.HeartFill, nav: "My Favorite" },
    { icon: IC.Earbuds, nav: "Listen Again" },
    { icon: IC.BookmarkFill, nav: "Bookmarks" },
    { icon: IC.VectorPen, nav: "Notes" },
  ];
  return (
    <Container fluid className="myaudio">
      <Row>
        <Row>
          <span className="texttitleleft">MY AUDIBLE</span>
        </Row>
        <Row>
          <Col className="myaudiobody">
            {list.map((li, index) => (
              <Row className="rownav">
                <Nav.Link href="#library" className="textnavleft">
                  <li.icon style={{ color: "orange" }} />
                  <span className="px-3">{li.nav}</span>
                </Nav.Link>
              </Row>
            ))}
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default MyAudible;
