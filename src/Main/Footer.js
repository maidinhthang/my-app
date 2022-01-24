import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";
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
          <Col md={1} className="m-0 p-0">
            <span className="mx-3">1</span>
            <Image src={everything} />
          </Col>
          <Col className="m-0 p-0">
            <Card.Title> Everything that remains</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Col>
          <Col md={2}>
            <Row>
              <Col className="mb-2 text-muted">12:45</Col>
              <Col>
                <IC.PlayBtn style={{ color: "orange" }} />
              </Col>
              <Col>
                <IC.PlusSquare style={{ color: "orange" }} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-1 pb-1">
          <Col md={1} className="m-0 p-0">
            <span className="mx-3">2</span>
            <Image src={atime} />
          </Col>
          <Col className="m-0 p-0">
            <Card.Title> A Time for Mercy</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Col>
          <Col md={2}>
            <Row>
              <Col className="mb-2 text-muted">12:45</Col>
              <Col>
                <IC.PlayBtn style={{ color: "orange" }} />
              </Col>
              <Col>
                <IC.PlusSquare style={{ color: "orange" }} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="pt-1 pb-1">
          <Col md={1} className="m-0 p-0">
            <span className="mx-3">3</span>
            <Image src={r} />
          </Col>
          <Col className="m-0 p-0">
            <Card.Title> Rhythm of war</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Col>
          <Col md={2}>
            <Row>
              <Col className="mb-2 text-muted">12:45</Col>
              <Col>
                <IC.PlayBtn style={{ color: "orange" }} />
              </Col>
              <Col>
                <IC.PlusSquare style={{ color: "orange" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default Footer;
