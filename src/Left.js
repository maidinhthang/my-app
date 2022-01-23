import { Row, Nav, Image, Container } from "react-bootstrap";
import "./App.css";
import audible from "./Photo/audible.png";
import amazon from "./Photo/inaudiable.png";
import * as IC from "react-bootstrap-icons";
function Left() {
  return (
    <>
      <Image fluid src={audible} />
      <Container>
        <Row>
          <Nav defaultActiveKey="/home" className="flex-column m-1">
            <h6>MY AUDIBLE</h6>
            <Nav.Link href="#library" className="text-dark  m-1">
              <IC.BookFill style={{ color: "orange" }} /> Library
            </Nav.Link>
            <Nav.Link href="#my-favorites" className="text-dark  m-1">
              <IC.HeartFill style={{ color: "orange" }} />
              My Favorites
            </Nav.Link>
            <Nav.Link href="#listen-again" className="text-dark  m-1">
              <IC.Earbuds style={{ color: "orange" }} />
              Listen Again
            </Nav.Link>
            <Nav.Link href="#Bookmarks" className="text-dark  m-1">
              <IC.BookmarkFill style={{ color: "orange" }} />
              Bookmarks
            </Nav.Link>
            <Nav.Link href="#notes" className="text-dark  m-1">
              <IC.VectorPen style={{ color: "orange" }} />
              Notes
            </Nav.Link>
          </Nav>
        </Row>
        <Row className="pt-4 pb-4 ">
          <Nav defaultActiveKey="/home" className="flex-column  m-1">
            <h6>GET MORE</h6>
            <Nav.Link href="#on-sale" className="text-dark  m-1">
              <IC.WalletFill style={{ color: "orange" }} />
              On Sale
            </Nav.Link>
            <Nav.Link href="#discover" className="text-dark  m-1">
              <IC.CompassFill style={{ color: "orange" }} />
              Discover
            </Nav.Link>
            <Nav.Link href="#trending" className="text-dark  m-1">
              <IC.CompassFill style={{ color: "orange" }} />
              Trending
            </Nav.Link>
            <Nav.Link href="#recommendations" className="text-dark m-1  ">
              <IC.BookmarkFill style={{ color: "orange" }} />
              Recommendations
            </Nav.Link>
          </Nav>
        </Row>
        <Row>
          <Nav defaultActiveKey="/home" className="flex-column m-1">
            <h6>ACCOUNT</h6>
            <Nav.Link href="#my-account" className="text-dark m-1">
              <IC.PersonFill style={{ color: "orange" }} />
              My Account
            </Nav.Link>
            <Nav.Link href="#history" className="text-dark m-1">
              <IC.BookHalf style={{ color: "orange" }} />
              History
            </Nav.Link>
            <Nav.Link href="#settings" className="text-dark m-1">
              <IC.GearFill style={{ color: "orange" }} />
              Settings
            </Nav.Link>
            <Nav.Link href="#logout" className="text-dark m-1">
              <IC.BoxArrowInLeft style={{ color: "orange" }} />
              Logout
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </>
  );
}

export default Left;
