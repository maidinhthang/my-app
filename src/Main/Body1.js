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
    <Container>
      <Row className="mb-4 pt-4 pb-4 border rounded ">
        <div className="h4 m-2 px-4 mb-4">
          <IC.BookHalf style={{ color: "orange" }} />
          <span className="px-3 ">
            From the Library
            <span className="justify-content-end">see all</span>
          </span>
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
