import { Col, Container, Row, Image, Card, ProgressBar } from "react-bootstrap";
import blood from "./Photo/blood.png";
import light from "./Photo/light.png";
import peterthiel from "./Photo/peterthiel.png";
import barakobama from "./Photo/barakobama.png";
import jayshetty from "./Photo/jayshetty.png";
import jamesclear from "./Photo/jamesclear.png";
import cicelytyson from "./Photo/cicelytyson.png";
import robertgreene from "./Photo/robertgreene.png";
import obamaright from "./Photo/obamaright.png";
import * as IC from "react-bootstrap-icons";

function Right() {
  return (
    <>
      <Container className="pt-2 pb-2">
        <Row className="pt-2 pb-2">
          <h6>Notifications</h6>
          <Row className="pt-1 pb-1">
            <Col md={2} className="m-0 p-0">
              <Image src={blood} />
            </Col>
            <Col>
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </Col>
            <Col md={2}>
              <span className="mb-2 text-muted">2 mins</span>
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col md={2} className="m-0 p-0">
              <Image src={light} />
            </Col>
            <Col>
              <Card.Title>48 Laws of Power</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">thangmd</Card.Subtitle>
            </Col>
            <Col md={2}>
              <span className="mb-2 text-muted">2 mins</span>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container className="pt-2 pb-2">
        <Row className="pt-2 pb-2">
          <h6>Top Authers</h6>
          <Row className="g-2">
            <Col>
              <Col>
                <Image src={peterthiel} />
              </Col>
              <Col>
                <span>Peter Thiel</span>
              </Col>
            </Col>
            <Col>
              <Col>
                <Image src={barakobama} />
              </Col>
              <Col>
                <span>Barak Obama</span>
              </Col>
            </Col>
            <Col>
              <Col>
                <Image src={jayshetty} />
              </Col>
              <Col>
                <span>Jay Shetty</span>
              </Col>
            </Col>
          </Row>
          <Row className="g-2">
            <Col>
              <Col>
                <Image src={cicelytyson} />
              </Col>
              <Col>
                <span>Cicely Tyson</span>
              </Col>
            </Col>
            <Col>
              <Col>
                <Image src={jamesclear} />
              </Col>
              <Col>
                <span>James Clear</span>
              </Col>
            </Col>
            <Col>
              <Col>
                <Image src={robertgreene} />
              </Col>
              <Col>
                <span>Robert Greene</span>
              </Col>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container className="pt-2 pb-2 bg-dark text-white ">
        <Row>
          <h4 className="d-flex justify-content-center">Now Playing</h4>
        </Row>
        <Row>
          <Col>
            <Card.Img variant="top p-2" src={obamaright} />
            <Row className="p-4 px-4">
              <Card.Title className="px-4 d-flex justify-content-center">
                48 Laws of Power
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted d-flex justify-content-center">
                thangmd
              </Card.Subtitle>
            </Row>
            <ProgressBar now={60} variant="white" />
          </Col>
          <Row className="">
            <IC.PauseBtn />
          </Row>
        </Row>
      </Container>
    </>
  );
}
//   return (
//     <>
//       <Container className="pt-2 pb-2">
//         <Row className="pt-2 pb-2 border rounded">
//           <h6>Notifications</h6>
//           <div className="pl-4">
//             <div className="py-1">
//               <div className="col">
//                 <Image src={bloodhair2} />
//               </div>
//             </div>
//             <div className="py-1">
//               <div className="col">
//                 <Image src={lifeof} />
//               </div>
//             </div>
//           </div>
//         </Row>
//       </Container>
//       <Container className="pt-2 pb-2">
//         <Row className="pt-2 pb-2 border rounded">
//           <h6 className="px-4">Top Authers</h6>
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "space-around",
//             }}
//           >
//             <div
//               className="p-2"
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <Image src={peterthiel} style={{ width: "100px" }} />
//               <span>Peter Thiel</span>
//             </div>
//             <div
//               className="p-2"
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <Image src={barakobama} style={{ width: "100px" }} />
//               <span>Barak Obama</span>
//             </div>
//             <div
//               className="p-2"
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <Image src={jayshetty} style={{ width: "100px" }} />
//               <span>Jay Shetty</span>
//             </div>
//             <div
//               className="p-2"
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <Image src={cicelytyson} style={{ width: "100px" }} />
//               <span>Cicely Tyson</span>
//             </div>
//             <div
//               className="p-2"
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <Image src={jameclear} style={{ width: "100px" }} />
//               <span>James Clear</span>
//             </div>
//             <div
//               className="p-2"
//               style={{ display: "flex", flexDirection: "column" }}
//             >
//               <Image src={robertgreene} style={{ width: "100px" }} />
//               <span>Robert Greene</span>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// }
export default Right;
