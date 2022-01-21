import { Col, Container, Row } from "react-bootstrap";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Header from "./Header";
import Footer from "./Footer";

function TabMain() {
  return (
    <Col className="border rounded p-3">
      <Header className="pt-2 pb-2 border rounded" />
      <Body1 className="pt-2 pb-2 border rounded" />
      <Body2 className="pt-2 pb-2 border rounded" />
      <Footer className="pt-2 pb-2 border rounded" />
    </Col>
  );
}
export default TabMain;
