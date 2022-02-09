import { Container, Row, Nav, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Account() {
  const list = [
    { icon: IC.PersonFill, nav: "My Account" },
    { icon: IC.BookHalf, nav: "History" },
    { icon: IC.GearFill, nav: "Settings" },
    { icon: IC.BoxArrowInLeft, nav: "Logout" },
  ];
  return (
    <Container fluid className="account">
      <Row>
        <Row>
          <span className="texttitleleft">ACCOUNT</span>
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
export default Account;
