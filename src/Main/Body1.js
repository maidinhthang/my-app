import { Container, Row, Card, Button, Col } from "react-bootstrap";
import power from "../Photo/power.png";
import zero from "../Photo/zero.png";
import atomic from "../Photo/atomic.png";
import thinklike from "../Photo/thinklike.png";
import * as IC from "react-bootstrap-icons";

function Body1() {
  const library = [
    {
      photo: power,
      title: "48 Laws of Power",
      subtitle: "Robert",
    },
    {
      photo: zero,
      title: "Zero to One",
      subtitle: "Peter Thiel",
    },
    {
      photo: atomic,
      title: "Atimic Habits",
      subtitle: "James Clear",
    },
    {
      photo: thinklike,
      title: "Think like Monk",
      subtitle: "Jay Shetty ",
    },
  ];
  return (
    <Container fluid className="maincard1">
      <Container fluid className="mainbodycard">
        <Row>
          <Col className="mainheadercard px-0">
            <IC.BookHalf className="pb-1" style={{ color: "orange" }} />
            <span className="mx-2">From The Library</span>
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
export default Body1;
