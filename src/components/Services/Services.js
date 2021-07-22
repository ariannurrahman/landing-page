import { Row, Col, Container } from "reactstrap";
import ServicesCard from "./ServicesCard";
import heart from "../../images/7-icons/heart.svg";
import David from "../../images/4-people/david-campion.jpg";
import Frank from "../../images/4-people/vincent-joignie.jpg";
import Lucas from "../../images/4-people/jerome-boudot.jpg";
import Angelina from "../../images/4-people/manuela-faveri.jpg";
import Jessica from "../../images/4-people/romane-regad.jpg";
import "./Services.css";

const items = [
  {
    name: "David Champion",
    src: David,
    caption: "CEO of iCloud",
    comment: "System is excellent. It has made my system user experience to become one of the easiest!",
  },
  {
    name: "David Frank van Hord",
    src: Frank,
    caption: "CEO of Marks.co",
    comment: "I just wanted to share a quick note and let you know that you guys do a really good job.",
  },
  {
    name: "Lucas Bond",
    src: Lucas,
    caption: "BOD of Skyscanner",
    comment: "Now it's almost like having a designer. I just choose the page, make the change",
  },
  {
    name: "Angelina",
    src: Angelina,
    caption: "Random Girl",
  },
  {
    name: "Jessica",
    src: Jessica,
    caption: "Random Girl",
  },
];
const Services = () => {
  return (
    <Container fluid className="py-5 position-relative">
      <Row xs="auto" className="py-5">
        <Col xs="3" sm="2" className="d-flex justify-content-center align-items-center">
          <div id="icon-wrapper" className="shadow-lg" style={{ backgroundColor: "red" }}>
            <img src={heart} alt="heart" id="icon-image" />
          </div>
        </Col>
        <Col xs="9" sm="5">
          <h1 className="sub-title">What other people say about our service</h1>
        </Col>
      </Row>

      <Row>
        <ServicesCard cardContent={items} />
      </Row>
    </Container>
  );
};

export default Services;
