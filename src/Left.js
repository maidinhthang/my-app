import { Col, Row, Nav, Image, Container } from "react-bootstrap";
import audible from "./Photo/audible.png";
import amazon from "./Photo/inaudiable.png";
import * as IC from "react-bootstrap-icons";
function Left() {
  const list = [
    { icon: IC.BookFill, nav: "Library" },
    { icon: IC.BookFill, nav: "My Favorite" },
    { icon: IC.BookFill, nav: "Listen Again" },
    { icon: IC.BookFill, nav: "Bookmarks" },
    { icon: IC.BookFill, nav: "Notes" },
  ];
  return (
    <>
      <Row>
        <Image md={12} fluid src={audible} />
      </Row>
      <Container>
        <Row>
          <span className="text-dark h4 m-2 pb-4">MY AUDIBLE</span>
          <Nav.Link href="#library" className="text-dark h5 m-2 pb-4">
            <IC.BookFill style={{ color: "orange" }} />
            <span className="px-3">Library</span>
          </Nav.Link>
          <Nav.Link href="#my-favorites" className="text-dark h5 m-2 pb-4">
            <IC.HeartFill style={{ color: "orange" }} />
            <span className="px-3">My Favorite</span>
          </Nav.Link>
          <Nav.Link href="#listen-again" className="text-dark h5 m-2 pb-4">
            <IC.Earbuds style={{ color: "orange" }} />
            <span className="px-3">Listen Again</span>
          </Nav.Link>
          <Nav.Link href="#Bookmarks" className="text-dark h5 m-2 pb-4">
            <IC.BookmarkFill style={{ color: "orange" }} />
            <span className="px-3">Bookmarks</span>
          </Nav.Link>
          <Nav.Link href="#notes" className="text-dark h5 m-2 pb-4">
            <IC.VectorPen style={{ color: "orange" }} />
            <span className="px-3">Notes</span>
          </Nav.Link>
        </Row>
        <Row className="pt-4 pb-4 ">
          <span className="text-dark h4 m-2 pb-4">GET MORE</span>
          <Nav.Link href="#on-sale" className="text-dark h5 m-2 pb-4">
            <IC.WalletFill style={{ color: "orange" }} />
            <span className="px-3">On Sale</span>
          </Nav.Link>
          <Nav.Link href="#discover" className="text-dark h5 m-2 pb-4">
            <IC.CompassFill style={{ color: "orange" }} />
            <span className="px-3">Discover</span>
          </Nav.Link>
          <Nav.Link href="#trending" className="text-dark h5 m-2 pb-4">
            <IC.CompassFill style={{ color: "orange" }} />
            <span className="px-3">Trending</span>
          </Nav.Link>
          <Nav.Link href="#recommendations" className="text-dark h5 m-2 pb-4">
            <IC.BookmarkFill style={{ color: "orange" }} />
            <span className="px-3">Recommendation</span>
          </Nav.Link>
        </Row>
        <Row>
          <span className="text-dark h4 m-2 pb-4">GCCOUNT</span>
          <Nav.Link href="#my-account" className="text-dark h5 m-2 pb-4">
            <IC.PersonFill style={{ color: "orange" }} />
            <span className="px-3">My Account</span>
          </Nav.Link>
          <Nav.Link href="#history" className="text-dark h5 m-2 pb-4">
            <IC.BookHalf style={{ color: "orange" }} />
            <span className="px-3">History</span>
          </Nav.Link>
          <Nav.Link href="#settings" className="text-dark h5 m-2 pb-4">
            <IC.GearFill style={{ color: "orange" }} />
            <span className="px-3">Settings</span>
          </Nav.Link>
          <Nav.Link href="#logout" className="text-dark h5 m-2 pb-4">
            <IC.BoxArrowInLeft style={{ color: "orange" }} />
            <span className="px-3">Logout</span>
          </Nav.Link>
        </Row>
      </Container>
    </>
  );
}

export default Left;
