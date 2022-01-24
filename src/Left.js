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
          <Nav defaultActiveKey="/home" className="flex-column m-2">
            <h6>MY AUDIBLE</h6>
            <Nav.Link href="#library" className="text-dark  m-2">
              <IC.BookFill style={{ color: "orange" }} /> Library
            </Nav.Link>
            <Nav.Link href="#my-favorites" className="text-dark  m-2">
              <IC.HeartFill style={{ color: "orange" }} />
              <span>My Favorites</span>
            </Nav.Link>
            <Nav.Link href="#listen-again" className="text-dark  m-2">
              <IC.Earbuds style={{ color: "orange" }} />
              <span>Listen Again</span>
            </Nav.Link>
            <Nav.Link href="#Bookmarks" className="text-dark  m-2">
              <IC.BookmarkFill style={{ color: "orange" }} />
              <span>Bookmarks</span>
            </Nav.Link>
            <Nav.Link href="#notes" className="text-dark  m-2">
              <IC.VectorPen style={{ color: "orange" }} />
              <span>Notes</span>
            </Nav.Link>
          </Nav>
        </Row>
        <Row className="pt-4 pb-4 ">
          <Nav defaultActiveKey="/home" className="flex-column  m-2">
            <h6>GET MORE</h6>
            <Nav.Link href="#on-sale" className="text-dark  m-2">
              <IC.WalletFill style={{ color: "orange" }} />
              <span>On Sale</span>
            </Nav.Link>
            <Nav.Link href="#discover" className="text-dark  m-2">
              <IC.CompassFill style={{ color: "orange" }} />
              <span>Discover</span>
            </Nav.Link>
            <Nav.Link href="#trending" className="text-dark  m-2">
              <IC.CompassFill style={{ color: "orange" }} />
              <span>Trending</span>
            </Nav.Link>
            <Nav.Link href="#recommendations" className="text-dark m-2  ">
              <IC.BookmarkFill style={{ color: "orange" }} />
              <span>Recommendations</span>
            </Nav.Link>
          </Nav>
        </Row>
        <Row>
          <Nav defaultActiveKey="/home" className="flex-column m-2">
            <h6>ACCOUNT</h6>
            <Nav.Link href="#my-account" className="text-dark m-2">
              <IC.PersonFill style={{ color: "orange" }} />
              <span>My Account</span>
            </Nav.Link>
            <Nav.Link href="#history" className="text-dark m-2">
              <IC.BookHalf style={{ color: "orange" }} />
              <span>History</span>
            </Nav.Link>
            <Nav.Link href="#settings" className="text-dark m-2">
              <IC.GearFill style={{ color: "orange" }} />
              <span>Settings</span>
            </Nav.Link>
            <Nav.Link href="#logout" className="text-dark m-2">
              <IC.BoxArrowInLeft style={{ color: "orange" }} />
              <span>Logout</span>
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </>
  );
}

export default Left;
