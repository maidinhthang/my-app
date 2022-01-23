import { Container, Row, Card, Col, CardGroup } from "react-bootstrap";
import greenlight from "../Photo/green.png";
import apromised from "../Photo/apromised.png";
import justasiam from "../Photo/justasiam.png";
import becoming from "../Photo/becoming.png";
import * as IC from "react-bootstrap-icons";

function Body2() {
  return (
    <Container>
      <Row className="pt-4 pb-4 border rounded">
        <div className="h5 px-4">
          <IC.BookHalf style={{ color: "orange" }} />
          <span className="px-2">From the Library</span>
        </div>
        <CardGroup style={{ justifyContent: "space-around" }}>
          <Card className="border rounded mx-2">
            <Card.Img variant=" p-2" src={greenlight} />
            <div className="px-4">
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </div>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={apromised} />
            <div className="px-4">
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </div>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={justasiam} />
            <div className="px-4">
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </div>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={becoming} />
            <div className="px-4">
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </div>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}
export default Body2;
