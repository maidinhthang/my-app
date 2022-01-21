import { Container, Row, Card, Col, CardGroup } from "react-bootstrap";
import greenlight from "../Photo/green.png";
import apromised from "../Photo/apromised.png";
import justasiam from "../Photo/justasiam.png";
import becoming from "../Photo/becoming.png";
import * as IC from "react-bootstrap-icons";

function Body2() {
  return (
    <Container className="pt-4 pb-4">
      <Row className="pt-4 pb-4 border rounded">
        <h6>
          <IC.DropletFill />
          From the Library
        </h6>
        <CardGroup style={{ width: "50rem" }}>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={greenlight} />
            <Card.Title>Green Light</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={apromised} />
            <Card.Title>A promised lands</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={justasiam} />
            <Card.Title>Jush I Am</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
          <Card className="border rounded mx-2">
            <Card.Img variant="top p-2" src={becoming} />
            <Card.Title>Becoming</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}
export default Body2;
