import { Container, Row, Card, CardGroup } from "react-bootstrap";
import power from "../Photo/power.png";
import zero from "../Photo/zero.png";
import atomic from "../Photo/atomic.png";
import thinklike from "../Photo/thinklike.png";
import * as IC from "react-bootstrap-icons";
function Body1() {
  //   const checkPhoto = [
  //     {
  //       photo: power,
  //       title: "48 Laws of Power",
  //       subTitle: "thangmd",
  //     },
  //     {
  //       photo: zero,
  //       title: "Zero to One",
  //       subTitle: "thangmd",
  //     },
  //     {
  //       photo: atomic,
  //       title: "Atomic Habits",
  //       subTitle: "thangmd",
  //     },
  //     {
  //       photo: thinklike,
  //       title: "Think Like Monk",
  //       subTitle: "thangmd",
  //     },
  //   ];
  //   return checkPhoto.map((photo, index) => (
  //     <Card key={index} className="border rounded mx-2">
  //       <Card.Img variant="top p-2" src={photo} />
  //       <Card.Title>{photo.title}</Card.Title>
  //       <Card.Subtitle className="mb-2 text-muted">
  //         {photo.Subtitle}
  //       </Card.Subtitle>
  //     </Card>
  //   ));
  return (
    <Container>
      <Row className="pt-4 pb-4 border rounded">
        <h6>
          <IC.BookHalf />
          From the Library
        </h6>
        <CardGroup style={{ width: "50rem" }}>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={power} />
            <Card.Title>48 Laws of Power</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={zero} />
            <Card.Title>Zero to One</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={atomic} />
            <Card.Title>Atomic Habits</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={thinklike} />
            <Card.Title>Think Like Monk</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}
export default Body1;
