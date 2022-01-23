import { Col, Container, Row, Image } from "react-bootstrap";
import bloodhair2 from "./Photo/bloodhair2.png";
import lifeof from "./Photo/lifeof.png";
import peterthiel from "./Photo/peterthiel.png";
import barakobama from "./Photo/barakobama.png";
import jayshetty from "./Photo/jayshetty.png";
import jameclear from "./Photo/justasiam.png";
import cicelytyson from "./Photo/cicelytyson.png";
import robertgreene from "./Photo/robertgreene.png";

function Right() {
  return (
    <>
      <Container className="pt-2 pb-2">
        <Row className="pt-2 pb-2">
          <h6>Notifications</h6>
          <Row className="pt-1 pb-1">
            <Col className="m-0 p-0">
              <Image src={bloodhair2} />
            </Col>
          </Row>
          <Row className="pt-1 pb-1">
            <Col className="m-0 p-0">
              <Image src={lifeof} />
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
