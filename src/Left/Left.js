import { Col, Container, Row } from "react-bootstrap";

import HeaderLerf from "./HeaderLerf";
import MyAudible from "./MyAudible";
import GetMore from "./GetMore";
import Account from "./Account";

function Left() {
  return (
    <Container fluid className="layoutletf">
      <HeaderLerf />
      <Col className="layoutconten">
        <MyAudible />
        <GetMore />
        <Account />
      </Col>
    </Container>
  );
}
export default Left;
