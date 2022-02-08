import { Col, Row, Image, Card, ProgressBar, Container } from "react-bootstrap";
import obamaright from "../Photo/obamaright.png";
import * as IC from "react-bootstrap-icons";

function Playing() {
  return (
    <Container fluid className="playing">
      <Card className="playcontent">
        <Card.Title className="mainheadercard text-white d-flex justify-content-center">
          Now Playing
        </Card.Title>
        <Card.Img variant="top" src={obamaright} className="playingphoto" />
        <Card.Body className="playingtitle text-white">
          <Card.Title className="cardtitle  d-flex justify-content-center">
            A Promised Land
          </Card.Title>
          <Card.Subtitle className="cardsubtitle">barak obama</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <ProgressBar now={60} variant="white" />
          <Row className="mt-4 pt-2 mb-5 h5">
            <Col className=" px-2 d-flex justify-content-center">
              <IC.ArrowRepeat />
            </Col>
            <Col className="px-2 d-flex justify-content-center">
              <IC.CaretLeftFill />
            </Col>
            <Col className="px-2 d-flex justify-content-center">
              <IC.PauseBtn />
            </Col>
            <Col className="px-2 d-flex justify-content-center">
              <IC.CaretRightFill />
            </Col>
            <Col className="px-2 d-flex justify-content-center">
              <IC.VolumeUp />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      {/* <Row>
        <h4 className="d-flex justify-content-center">Now Playing</h4>
      </Row>
      <Row>
        <Col>
          <Card.Img variant="top p-2" src={obamaright} />
          <Row className="p-4 px-4">
            <Card.Title className="px-4 d-flex justify-content-center">
              48 Laws of Power
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
              thangmd
            </Card.Subtitle>
          </Row>
          <ProgressBar now={60} variant="white" />

          <Row className="pt-4">
            <Col className="px-4 d-flex justify-content-center">
              <IC.ArrowRepeat />
            </Col>
            <Col className="px-4 d-flex justify-content-center">
              <IC.CaretLeftFill />
            </Col>
            <Col className="px-4 d-flex justify-content-center">
              <IC.PauseBtn />
            </Col>
            <Col className="px-4 d-flex justify-content-center">
              <IC.CaretRightFill />
            </Col>
            <Col className="px-4 d-flex justify-content-center">
              <IC.VolumeUp />
            </Col>
          </Row>
        </Col>
      </Row> */}
    </Container>
  );
}
export default Playing;
