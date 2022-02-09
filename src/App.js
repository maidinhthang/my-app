import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import TabMain from "./Main/Main";
import Right from "./Right/Right";
import Left from "./Left/Left";

function App() {
  return (
    <Container fluid className="audible">
      <Left />
      <TabMain />
      <Right />
    </Container>
  );
}

export default App;
