import { Row, Container } from "reactstrap";

import apple from "../../images/5-partners/apple.PNG";
import airbnb from "../../images/5-partners/airbnb.png";
import google from "../../images/5-partners/google.PNG";
import nvidia from "../../images/5-partners/nvidia.PNG";
import tesla from "../../images/5-partners/tesla.PNG";
import samsung from "../../images/5-partners/samsung.PNG";
import facebook from "../../images/5-partners/facebook.PNG";
import microsoft from "../../images/5-partners/microsoft.PNG";
import "../styles/style.css";
const Partnership = () => {
  const partnerList = [
    { src: apple, alt: "apple" },
    { src: airbnb, alt: "airbnb" },
    { src: google, alt: "google" },
    { src: nvidia, alt: "nvidia" },
    { src: tesla, alt: "tesla" },
    { src: samsung, alt: "samsung" },
    { src: facebook, alt: "facebook" },
    { src: microsoft, alt: "microsoft" },
  ];

  const renderPartnerImage = () => {
    return partnerList.map((item, index) => {
      return (
        <div key={index} style={{ width: "120px", height: "120px" }}>
          <img src={item.src} alt={item.alt} className="h-100 w-100" style={{ objectFit: "contain" }} />
        </div>
      );
    });
  };

  return (
    <Container className="py-5">
      <Row className="d-flex justify-content-center align-items-center">
        <h1 className="text-center sub-title">We've worked with</h1>
      </Row>
      <Row className="d-flex flew-wrap flex-row justify-content-center align-items-center" xs="12">
        {renderPartnerImage()}
      </Row>
    </Container>
  );
};

export default Partnership;
