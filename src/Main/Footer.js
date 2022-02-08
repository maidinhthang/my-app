import { Container, Row, Card, Button, Col, Image } from "react-bootstrap";
import everything from "../Photo/everything.png";
import atime from "../Photo/atime.png";
import rhythm from "../Photo/rhythm.png";
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
      photo: rhythm,
      title: "Rhythm of war",
      subtitle: "chapter 14",
      time: "12:45",
    },
  ];
  return (
    <Container fluid className="maincard3">
      <Container fluid className="mainbodycard">
        <Row>
          <Col className="mainheadercard px-0">
            <IC.Headphones className="mb-1" style={{ color: "orange" }} />
            <span className="mx-2">Recently Played</span>
          </Col>
          <Col className="mainheadercard text-muted px-0">
            <span className="d-flex justify-content-end ">See All</span>
          </Col>
        </Row>
        <Row className="mx-0 px-0 maincardcontent align-content-between">
          {recentlyPlay.map((play, index) => (
            <Row
              key="index"
              className="rowfooter d-flex align-items-center mx-0 px-0"
            >
              <Col md={8}>
                <Row>
                  <Col md={1} className="m-0 p-0 d-flex align-items-center">
                    <span className=" texttitle">{play.no}</span>
                  </Col>
                  <Col md={2} className="d-flex justify-content-end">
                    <Image src={play.photo} />
                  </Col>
                  <Col md={9}>
                    <Card.Title className="texttitle">{play.title}</Card.Title>
                    <Card.Subtitle className="textsubtitle">
                      {play.subtitle}
                    </Card.Subtitle>
                  </Col>
                </Row>
              </Col>
              <Col
                md={4}
                className="h4 d-flex justify-content-end align-items-center mx-0 px-0"
              >
                <Row>
                  <Col className="fonttime d-flex align-items-center">
                    {play.time}
                  </Col>
                  <Col>
                    <IC.PlayFill className="cardbuttonplay"></IC.PlayFill>
                  </Col>
                  <Col>
                    <IC.Plus className="cardbuttonplay" />
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default Footer;
