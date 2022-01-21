import { Col, Container, Row, Image } from "react-bootstrap";
import bloodhair2 from "./Photo/bloodhair2.png";
import lifeof from "./Photo/lifeof.png";

function Right() {
  return (
    <>
      <Container className="pt-2 pb-2">
        <Row className="pt-2 pb-2 border rounded">
          <h6>Notifications</h6>
          <Row className="pt-1 pb-1">
            <Col className="m-0 p-0">
              <Image src={bloodhair2} />
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col className="m-0 p-0">
              <Image src={lifeof} />
            </Col>
          </Row>
        </Row>
      </Container>
      <Container className="pt-2 pb-2">
        <Row className="pt-2 pb-2 border rounded">
          <h6>Top Authers</h6>
        </Row>
      </Container>
    </>
  );
}
export default Right;
