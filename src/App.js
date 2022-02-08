import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import TabMain from "./Main/Main";
import Right from "./Right/Right";

function App() {
  return (
    <Container fluid className="audible">
      <TabMain />
      <Right />
    </Container>
  );
}

export default App;
