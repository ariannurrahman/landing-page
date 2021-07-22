import { Row, Col, Container } from "reactstrap";
import ContactUsForm from "./ContactUsForm";
import MapComponent from "./MapComponent";
const ContactUs = () => {
  return (
    <Container style={{ backgroundColor: "white", width: "90%" }} className="py-5 ">
      <h1 className="text-center sub-title py-5 align-middle">Contact Us</h1>
      <Row className="d-flex justify-content-center align-items-center" xs="12" sm="8" lg="6">
        <Col xs="12" sm="6" lg="5" className="p-0 shadow rounded border-0 shadow-md py-5">
          <ContactUsForm />
        </Col>
        <Col xs="12" sm="6" lg="5" className="p-0 ">
          <MapComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
