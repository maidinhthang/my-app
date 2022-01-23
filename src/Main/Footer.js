import { Col, Container, Row, Image } from "react-bootstrap";
import everything from "../Photo/everything.png";
import atime from "../Photo/atime.png";
import r from "../Photo/r.png";
import * as IC from "react-bootstrap-icons";

function Footer() {
  return (
    <Container className="pt-2 pb-2">
      <Row className="pt-2 pb-2 border rounded">
        <h6>
          <IC.Headphones style={{ color: "orange" }} />
          Recently Played
        </h6>
        <Row className="pt-1 pb-1">
          <Col md={1}>1</Col>
          <Col md={1} className="m-0 p-0">
            <Image src={everything} />
          </Col>
          <Col md={4} className="m-0 p-0">
            Everything that remains
          </Col>
        </Row>
        <Row className="pt-1 pb-1">
          <Col md={1}>2</Col>
          <Col md={1} className="m-0 p-0">
            <Image src={atime} />
          </Col>
          <Col md={4} className="m-0 p-0">
            A Time for Mercy
          </Col>
        </Row>
        <Row className="pt-1 pb-1">
          <Col md={1}>3</Col>
          <Col md={1} className="m-0 p-0">
            <Image src={r} />
          </Col>
          <Col md={4} className="m-0 p-0">
            Rhythm of war
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default Footer;
