import { Row, Col, Container } from "reactstrap";

import firstContent from "../../images/3-content/content-001.png";
import secondContent from "../../images/3-content/content-002.png";
import "./Overview.css";
const Overview = () => {
  return (
    <Container className="overview-container">
      <Col xs="10" sm="11">
        <Row xs="12" sm="6" lg="12" className="overview-first-section d-flex justify-content-center flex-row flex-wrap">
          <Col xs="12" sm="7" lg="6">
            <img src={firstContent} alt="first content" id="image-content" />
          </Col>
          <Col xs="12" sm="5" lg="4" className="p-0 pr-1 d-flex justify-content-center flex-column">
            <h1 className="sub-title">We can give you our best user experience to your system</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standar dummy text ever since the 1500s, when an unknown printer took a gallery of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
        </Row>
        <Row xs="12" sm="6" lg="6" className="overview-second-section d-flex justify-content-center flex-row flex-wrap">
          <Col xs="12" sm="5" lg="4" className="p-0 pl-1 d-flex justify-content-center flex-column">
            <h1 className="sub-title">Easy access. Whenever, wherever you want</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standar dummy text ever since the 1500s, when an unknown printer took a gallery of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
          <Col xs="12" sm="7" lg="6">
            <img src={secondContent} alt="second content" id="image-content" />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Overview;
