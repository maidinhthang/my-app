import { Container, Row, Card, Button, Col } from "react-bootstrap";
import greenlight from "../Photo/greenlight.png";
import apromised from "../Photo/apromised.png";
import justasiam from "../Photo/justasiam.png";
import becoming from "../Photo/becoming.png";
import * as IC from "react-bootstrap-icons";

function Body2() {
  const library = [
    {
      photo: greenlight,
      title: "Green Light",
      subtitle: "Matthew McConaughey",
    },
    {
      photo: apromised,
      title: "A Promised Lands",
      subtitle: "Barak Obama",
    },
    {
      photo: justasiam,
      title: "Just As I Am",
      subtitle: "Cicely Tyson",
    },
    {
      photo: becoming,
      title: "Becoming",
      subtitle: "Michelle Obama",
    },
  ];
  return (
    <Container fluid className="maincard2">
      <Container fluid className="mainbodycard">
        <Row>
          <Col className="mainheadercard px-0">
            <IC.SunsetFill className="mb-1" style={{ color: "orange" }} />
            <span className="mx-2">Books That Might Fit To Your Taste</span>
          </Col>
          <Col className="mainheadercard text-muted px-0">
            <span className="d-flex justify-content-end ">See All</span>
          </Col>
        </Row>
        <Row className="mx-0 px-0 maincardcontent">
          {library.map((audio, index) => (
            <Card className="card">
              <div className="cardphoto">
                <Card.Img src={audio.photo} />
                <IC.PlayFill className="cardbutton"></IC.PlayFill>
              </div>
              <Card.Body className="m-1 p-1">
                <Card.Title className="texttitle ">{audio.title}</Card.Title>
                <Card.Subtitle className="textsubtitle">
                  {audio.subtitle}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default Body2;
