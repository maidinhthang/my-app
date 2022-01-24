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
    <Container>
      <Row className="mb-4 pt-4 pb-4 border rounded">
        <div className="h4 m-2 px-4 mb-4">
          <IC.BookHalf style={{ color: "orange" }} />
          <span className="px-3">Books That Might To Your Testy</span>
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
