import { Container, Row, Card, CardGroup, Col } from "react-bootstrap";
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
      subtitle: "thangmd",
    },
    {
      photo: zero,
      title: "48 Laws of Power",
      subtitle: "thangmd",
    },
    {
      photo: atomic,
      title: "48 Laws of Power",
      subtitle: "thangmd",
    },
    {
      photo: thinklike,
      title: "48 Laws of Power",
      subtitle: "thangmd",
    },
  ];
  return (
    <Container>
      <Row className="mb-4 pt-4 pb-4 border rounded">
        <div className="d-flex h5  px-4">
          <IC.BookHalf style={{ color: "orange" }} />
          <span className="px-2">From the Library</span>
          <span className="d-flex justify-content-end">more</span>
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
export default Body1;
