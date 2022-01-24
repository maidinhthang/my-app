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
    <Container className="pt-2 pb-2">
      <Row className="pt-2 pb-2">
        <h5 className="mb-4">Notifications</h5>
        {audios.map((audio, index) => (
          <Row className="pt-1 pb-1 px-4">
            <Col md={2} key={index} className="m-0 p-0">
              <Image src={audio.photo} />
            </Col>
            <Col md={7}>
              <Card.Title>{audio.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {audio.subtitle}
              </Card.Subtitle>
            </Col>
            <Col md={3}>
              <span className="mb-2 text-muted">{audio.time}</span>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
}
export default Noti;
