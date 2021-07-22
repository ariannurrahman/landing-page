import { Row, Col } from "reactstrap";
import logo from "../../images/1-header/logo.png";
import leftCube from "../../images/2-banner/banner-rounded-001.svg";
import rightCube from "../../images/2-banner/banner-rounded-002.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-5 mt-5 w-100 h-100 position-relative d-flex">
      <Row
        className="d-flex justify-content-center align-items-start flex-row flex-wrap w-100 position-relative"
        style={{ zIndex: "5" }}
      >
        <Col xs="9" sm="3" className="d-flex justify-content-center align-items-center flex-row">
          <div style={{ width: "100px", height: "100%" }} className="p-3">
            <img src={logo} alt="logo" className="w-100" style={{ objectFit: "contain", height: "100px" }} />
          </div>
          <h3 className="text-white">Easy Work</h3>
        </Col>

        <Col xs="9" sm="3">
          <p className="text-white p-0 m-0 w-100">Address</p>
          <p className=" p-0 m-0 mb-3">
            52-1, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
          </p>
        </Col>

        <Col xs="9" sm="3">
          <p className="w-100  text-white mb-0 mt">Contact</p>
          <p className="w-100 p-0 m-0">03-7451-5283</p>
          <p className="w-100  text-white mb-0 mt-3">Fax</p>
          <p className="w-100 p-0 m-0">03-7451-5283</p>
        </Col>
      </Row>
      <img src={rightCube} alt="right two cube" id="footer-right-image" className="position-absolute" />
      <img src={leftCube} alt="left two cube" id="footer-left-image" className="position-absolute" />
    </footer>
  );
};

export default Footer;
