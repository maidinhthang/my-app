import { Col, Container, Row, Image, Card } from "react-bootstrap";
import blood from "../Photo/blood.png";
import light from "../Photo/light.png";

function Noti() {
  const audios = [
    {
      photo: blood,
      title: "Blood Heir",
      subtitle: "purchased",
      time: "2 mins",
    },
    {
      photo: light,
      title: "Light of the Jedi",
      subtitle: "Bookmarrked",
      time: "2 mins",
    },
  ];
  return (
    <Container fluid className="noti ">
      <Row>
        <Col className="mainheadercard px-0">
          <span>Notifications</span>
        </Col>
        <Col className="mainheadercard text-muted px-0">
          <span className="d-flex justify-content-end">..</span>
        </Col>
      </Row>
      <Row className="notilist d-flex align-content-between mx-0 px-0">
        {audios.map((audio, index) => (
          <Col md={12}>
            <Row className="d-flex align-items-center">
              <Col md={3} className="mx-0 px-0">
                <Image src={audio.photo} />
              </Col>
              <Col md={7} className="mx-0 px-0">
                <Card.Title className="texttitle">{audio.title}</Card.Title>
                <Card.Subtitle className="textsubtitle">
                  {audio.subtitle}
                </Card.Subtitle>
              </Col>
              <Col md={2} className="fonttime mx-0 px-0">
                {audio.time}
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Noti;
