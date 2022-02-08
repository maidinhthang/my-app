import { Col } from "react-bootstrap";
import Noti from "./Noti";
import TopAuthers from "./TopAuthers";
import Playing from "./Playing";

function Right() {
  return (
    <Col className="right">
      <Noti />
      <TopAuthers />
      <Playing />
    </Col>
  );
}
export default Right;
