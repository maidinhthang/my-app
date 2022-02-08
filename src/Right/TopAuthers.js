import { Col, Container, Row, Image } from "react-bootstrap";
import peterthiel from "../Photo/peterthiel.png";
import barakobama from "../Photo/barakobama.png";
import jayshetty from "../Photo/jayshetty.png";
import jamesclear from "../Photo/jamesclear.png";
import cicelytyson from "../Photo/cicelytyson.png";
import robertgreene from "../Photo/robertgreene.png";

function TopAuthers() {
  const authers1 = [
    {
      photo: peterthiel,
      name: "Peter Thiel",
    },
    {
      photo: barakobama,
      name: "Barak Obama",
    },
    {
      photo: jayshetty,
      name: "Jay Shetty",
    },
  ];
  const authers2 = [
    {
      photo: cicelytyson,
      name: "Cicely Tyson",
    },
    { photo: jamesclear, name: "James clear" },
    {
      photo: robertgreene,
      name: "Robert Greene",
    },
  ];

  return (
    <Container fluid className="topauther">
      <Row className="mainheadercard px-0">
        <Col>
          <span>Top Authers</span>
        </Col>
        <Col className="mainheadercard text-muted px-0">
          <span className="d-flex justify-content-end">..</span>
        </Col>
      </Row>
      <Row className="gridauther">
        <Row>
          {authers1.map((auther1, index) => (
            <Col className="photoauther mx-0 px-0">
              <Col>
                <Image src={auther1.photo} />
              </Col>
              <Col>
                <span className="nameauther">{auther1.name}</span>
              </Col>
            </Col>
          ))}
        </Row>
        <Row>
          {authers2.map((auther2, index) => (
            <Col className="photoauther mx-0 px-0">
              <Col>
                <Image src={auther2.photo} />
              </Col>
              <Col>
                <span className="nameauther">{auther2.name}</span>
              </Col>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
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
export default TopAuthers;
