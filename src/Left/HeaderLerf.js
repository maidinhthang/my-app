import { Container, Image } from "react-bootstrap";
import inaudiable from "../Photo/inaudiable.png";

function HeaderLeft() {
  return (
    <Container className="leftheader">
      <Image src={inaudiable} className="headerphoto" />
    </Container>
  );
}

export default HeaderLeft;
