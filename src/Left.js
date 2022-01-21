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
              <IC.BookFill /> Library
            </Nav.Link>
            <Nav.Link href="#my-favorites" className="text-dark  m-1">
              <IC.HeartFill />
              My Favorites
            </Nav.Link>
            <Nav.Link href="#listen-again" className="text-dark  m-1">
              <IC.Earbuds />
              Listen Again
            </Nav.Link>
            <Nav.Link href="#Bookmarks" className="text-dark  m-1">
              <IC.BookmarkFill />
              Bookmarks
            </Nav.Link>
            <Nav.Link href="#notes" className="text-dark  m-1">
              <IC.VectorPen />
              Notes
            </Nav.Link>
          </Nav>
        </Row>
        <Row className="pt-4 pb-4 ">
          <Nav defaultActiveKey="/home" className="flex-column  m-1">
            <h6>GET MORE</h6>
            <Nav.Link href="#on-sale" className="text-dark  m-1">
              <IC.WalletFill />
              On Sale
            </Nav.Link>
            <Nav.Link href="#discover" className="text-dark  m-1">
              <IC.CompassFill />
              Discover
            </Nav.Link>
            <Nav.Link href="#trending" className="text-dark  m-1">
              <IC.CompassFill />
              Trending
            </Nav.Link>
            <Nav.Link href="#recommendations" className="text-dark m-1  ">
              <IC.BookmarkFill />
              Recommendations
            </Nav.Link>
          </Nav>
        </Row>
        <Row>
          <Nav defaultActiveKey="/home" className="flex-column m-1">
            <h6>ACCOUNT</h6>
            <Nav.Link href="#my-account" className="text-dark m-1">
              <IC.PersonFill />
              My Account
            </Nav.Link>
            <Nav.Link href="#history" className="text-dark m-1">
              <IC.BookHalf />
              History
            </Nav.Link>
            <Nav.Link href="#settings" className="text-dark m-1">
              <IC.GearFill />
              Settings
            </Nav.Link>
            <Nav.Link href="#logout" className="text-dark m-1">
              <IC.BoxArrowInLeft />
              Logout
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </>
  );
}

export default Left;
