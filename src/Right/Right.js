import { Col } from "react-bootstrap";
import Noti from "./Noti";
import TopAuthers from "./TopAuthers";
import Playing from "./Playing";

function Right() {
  return (
    <Col style={{ backgroundColor: "#F4F9FF" }} className="p-3">
      <Noti className="pt-2 pb-2" />
      <TopAuthers className="pt-2 pb-2" />
      <Playing className="pt-2 pb-2 " />
    </Col>
  );
}
export default Right;
