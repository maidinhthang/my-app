import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";
import everything from "../Photo/everything.png";
import atime from "../Photo/atime.png";
import r from "../Photo/r.png";
import * as IC from "react-bootstrap-icons";

function Footer() {
  const recentlyPlay = [
    {
      no: "01",
      photo: everything,
      title: "Everything that remains",
      subtitle: "chapter 3",
      time: "12:45",
    },
    {
      no: "02",
      photo: atime,
      title: "A Time for Mercy",
      subtitle: "last chapter",
      time: "12:45",
    },
    {
      no: "03",
      photo: r,
      title: "Rhythm of war",
      subtitle: "chapter 14",
      time: "12:45",
    },
  ];
  return (
    <Container>
      <Row className="mb-4 pt-4 pb-4 border rounded">
        <div className="h4 m-2 px-4 mb-4">
          <IC.Headphones style={{ color: "orange" }} />
          <span className="px-3"> Recently Played</span>
        </div>
        {recentlyPlay.map((audio, index) => (
          <Row key="index" className="pt-1 pb-1">
            <Col md={2} className="m-0 p-0 ms-4">
              <span className="mx-1 px-3 h6">{audio.no}</span>
              <Image src={audio.photo} />
            </Col>
            <Col>
              <Card.Title>{audio.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {audio.subtitle}
              </Card.Subtitle>
            </Col>
            <Col md={3}>
              <Row className="h4">
                <Col className="mb-2 text-muted">{audio.time}</Col>
                <Col>
                  <IC.PlayBtn style={{ color: "orange" }} />
                </Col>
                <Col>
                  <IC.PlusSquare style={{ color: "orange" }} />
                </Col>
              </Row>
            </Col>
          </Row>
        ))}

        {/* <Row className="pt-1 pb-1">
          <Col md={1} className="m-0 p-0">
            <span className="mx-1">1</span>
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
            <span className="mx-2">2</span>
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
            <span className="mx-2">3</span>
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
        </Row> */}
      </Row>
    </Container>
  );
}
export default Footer;
