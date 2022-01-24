import { Container, Row, Card, Col, CardGroup } from "react-bootstrap";
import greenlight from "../Photo/green.png";
import apromised from "../Photo/apromised.png";
import justasiam from "../Photo/justasiam.png";
import becoming from "../Photo/becoming.png";
import * as IC from "react-bootstrap-icons";

function Body2() {
  const library = [
    {
      photo: greenlight,
      title: "48 Laws of Power",
      subtitle: "thangmd",
    },
    {
      photo: apromised,
      title: "48 Laws of Power",
      subtitle: "thangmd",
    },
    {
      photo: justasiam,
      title: "48 Laws of Power",
      subtitle: "thangmd",
    },
    {
      photo: becoming,
      title: "48 Laws of Power",
      subtitle: "thangmd",
    },
  ];
  return (
    <Container>
      <Row className="mb-4 pt-4 pb-4 border rounded">
        <div className="h5 px-4">
          <IC.BookHalf style={{ color: "orange" }} />
          <span className="px-2">From the Library</span>
        </div>
        <CardGroup style={{ justifyContent: "space-around" }}>
          {library.map((Audio, index) => (
            <Card className="border rounded mx-2">
              <Card.Img variant=" p-2" key={index} src={Audio.photo} />
              <div className="px-4">
                <Card.Title>{Audio.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {Audio.subtitle}
                </Card.Subtitle>
              </div>
            </Card>
          ))}
        </CardGroup>
      </Row>
    </Container>
  );
}

export default Body2;
