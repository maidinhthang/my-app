import { Col, Container, Row } from "react-bootstrap";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Header from "./Header";
import Footer from "./Footer";

function TabMain() {
  return (
    <Col>
      <Header />
      <Body1 />
      <Body2 />
      <Footer />
    </Col>
  );
}
export default TabMain;
