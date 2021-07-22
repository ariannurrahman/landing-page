import { useEffect, useRef, useState } from "react";
import { Row, Col, Container, CardTitle, CardText } from "reactstrap";
import right from "../../images/7-icons/arrow-right.svg";
const ServicesCard = ({ cardContent }) => {
  const [viewWidth, setViewWidth] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setViewWidth(window.innerWidth);
  }, [setViewWidth]);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft = scrollOffset;
    setViewWidth(window.innerWidth);
  };
  const renderCommentList = () => {
    return cardContent.map((item, index) => {
      return (
        <Col
          key={index}
          xs="12"
          md="4"
          lg="4"
          xl="4"
          className="mb-5 d-flex flex-column justify-content-start shadow border rounded mx-3"
          style={{ padding: "1rem 1rem 1rem 1rem", width: "400px" }}
        >
          <div className="d-flex flex-row align-items-center w-100">
            <div style={{ width: "60px", height: "60px" }}>
              <img
                src={item.src}
                alt={item.name + " - " + item.caption}
                className="w-100 h-100 rounded-circle"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start h-100">
              <CardTitle
                tag="h5"
                className="h-100 fw-bold p-0 m-0 mt-2 ml-3 pl-3 d-flex flex-column justify-content-center align-items-start align-middle"
              >
                {item.name}
              </CardTitle>
              <p className="fw-light p-0 m-0 pb-1  " style={{ fontSize: "12px" }}>
                {item.caption}
              </p>
            </div>
          </div>
          <CardText className="mt-4">"{item.comment || `-`}"</CardText>
        </Col>
      );
    });
  };

  return (
    <>
      <div
        onClick={() => scroll(viewWidth + 10000)}
        className="position-absolute border-none float-end mb-5"
        id="arrow-wrapper"
      >
        <img src={right} alt="right-arrow" className="w-100 h-100" id="icon-image" />
      </div>
      <Container fluid>
        <div className="d-flex flex-nowrap overflow-auto" ref={ref} id="slide-container">
          {renderCommentList()}
        </div>
        <Row xs="12" className="d-flex flex-nowrap justify-content-center">
          <Col xs="12" className="d-flex flex-nowrap justify-content-center">
            <button
              style={{
                width: "20px",
                height: "20px",
                border: "none",
                backgroundColor: "rgb(45,10,137)",
                borderRadius: "50%",
              }}
              onClick={() => scroll("-100%")}
            ></button>
            <button
              style={{
                width: "20px",
                height: "20px",
                border: "none",
                backgroundColor: "rgb(45,10,137)",

                borderRadius: "50%",
              }}
              onClick={() => scroll(viewWidth / 2)}
              className="mx-3 border-none "
            ></button>
            <button
              style={{
                width: "20px",
                height: "20px",
                border: "none",
                backgroundColor: "rgb(45,10,137)",
                borderRadius: "50%",
              }}
              onClick={() => scroll(viewWidth + 10000)}
            ></button>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default ServicesCard;
