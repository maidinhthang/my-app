import { Container, Row, Card, CardGroup, Col } from "react-bootstrap";
import power from "../Photo/power.png";
import zero from "../Photo/zero.png";
import atomic from "../Photo/atomic.png";
import thinklike from "../Photo/thinklike.png";
import * as IC from "react-bootstrap-icons";
function Body1() {
  return (
    <Container>
      <Row className="pt-4 pb-4 border rounded">
        <div className="h5 px-4">
          <IC.BookHalf style={{ color: "orange" }} />
          <span className="px-2">From the Library</span>
        </div>
        <CardGroup style={{ justifyContent: "space-around" }}>
          <Card className="border rounded mx-2">
            <Card.Img variant=" p-2" src={power} />
            <div className="px-4">
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </div>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={zero} />
            <div className="px-4">
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </div>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={atomic} />
            <div className="px-4">
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </div>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={thinklike} />
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
export default Body1;
