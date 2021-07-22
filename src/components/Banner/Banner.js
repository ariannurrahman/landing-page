import { Row, Col, Container } from "reactstrap";

import illustration from "../../images/2-banner/banner.png";
import leftCube from "../../images/2-banner/banner-rounded-001.svg";
import rightCube from "../../images/2-banner/banner-rounded-002.svg";
import "./Banner.css";
const Banner = () => {
  return (
    <Container fluid className="banner-container p-0">
      <Row xs="12" className="banner-wrapper px-0 mx-0">
        <Row className="banner-row">
          <Col xs="11" sm="6" lg="6" xl="5" className="p-0 m-0 d-flex justify-content-start flex-column">
            <h1 className="text-white banner-title w-100">Make development easy with us.</h1>
            <p className="text-white w-100 banner-desc">
              Doing development can never be easy, and it takes and resources.
              <br />
              We at EasyWork has the solution.
            </p>
          </Col>
          <Col xs="11" sm="6" lg="6" xl="5">
            <img src={illustration} alt="banner illustration" id="middle-image" />
          </Col>
        </Row>
        <img src={rightCube} alt="right two cube" id="right-image" />
        <img src={leftCube} alt="left two cube" id="left-image" />
      </Row>
    </Container>
  );
};

export default Banner;
