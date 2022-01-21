import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import Left from "./Left";
import TabMain from "./Main/Main";
import Right from "./Right";
function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0 m-0">
          <Left />
        </Col>
        <Col md={7} className="p-0 m-0">
          <TabMain />
        </Col>
        <Col md={2} className="p-0 m-0">
          <Right />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
