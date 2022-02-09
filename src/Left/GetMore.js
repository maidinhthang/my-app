import { Container, Row, Nav, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function GetMore() {
  const list = [
    { icon: IC.WalletFill, nav: "On Sale" },
    { icon: IC.CompassFill, nav: "Discover" },
    { icon: IC.CompassFill, nav: "Trending" },
    { icon: IC.BookmarkFill, nav: "Recommendation" },
  ];
  return (
    <Container fluid className="getmore">
      <Row>
        <Row>
          <span className="texttitleleft">Get More</span>
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
export default GetMore;
