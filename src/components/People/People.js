import { useState } from "react";

import { Row, Col, Container, Button } from "reactstrap";
import PeopleCard from "./PeopleCard";
import PeopleModalAdd from "./PeopleModalAdd";
import smile from "../../images/7-icons/happy-face.svg";
import garbage from "../../images/7-icons/garbage.svg";
import FrankLtarnam from "../../images/4-people/gaetan-houssin.jpg";
import BobShefley from "../../images/4-people/nicolas-lebarreau.jpg";
import JasonStewars from "../../images/4-people/jerome-mahuet.jpg";
import SabrinaRachel from "../../images/4-people/manuela-faveri.jpg";
import MarissaLawren from "../../images/4-people/darlene-chabrat.jpg";
import RomaneRegad from "../../images/4-people/romane-regad.jpg";
import TaniaFerreira from "../../images/4-people/tania-ferreira.jpg";
import "./People.css";
const People = () => {
  const [data, setData] = useState([
    {
      name: "Frank Ltarnam",
      src: FrankLtarnam,
      occupation: "CEO",
    },
    {
      name: "Bob Shefley",
      src: BobShefley,
      occupation: "UI/UX Designer",
    },
    {
      name: "Jason Stewars",

      src: JasonStewars,
      occupation: "Full-Stack Developer",
    },
    {
      name: "Sabrina Rachel",
      src: SabrinaRachel,
      occupation: "Marketing",
    },
    {
      name: "Marissa Lawren",
      src: MarissaLawren,
      occupation: "Customer Support",
    },
    {
      name: "Romane Regad",
      src: RomaneRegad,
      occupation: "Jr UI/UX Designer",
    },
    {
      name: "Tania Ferreira",
      src: TaniaFerreira,
      occupation: "Business Analyst",
    },
  ]);

  const [isEditToDelete, setEditToDelete] = useState(false);
  const [dataCheckedList, setDataCheckedList] = useState([]);

  const [showModalAdd, setShowModal] = useState(false);

  const toggleModalAdd = () => {
    setShowModal(!showModalAdd);
  };

  const toggleIsEditToDelete = () => {
    setEditToDelete(!isEditToDelete);
  };

  const onClickDelete = () => {
    let toDelete = (dataCheckedList, data) => {
      return dataCheckedList.name === data.name;
    };

    let deleted = data.filter((item) => {
      let indexFound = dataCheckedList.findIndex((idx) => toDelete(idx, item));
      return indexFound === -1;
    });

    setData(deleted);
    setEditToDelete(!isEditToDelete);
  };

  return (
    <Container fluid className="pt-5">
      <Row xs="12" className="py-5 w-100 ">
        <Col xs="3" sm="2" className="d-flex justify-content-center align-items-center">
          <div id="icon-wrapper" className="shadow-lg" style={{ backgroundColor: "rgb(255,0,185)" }}>
            <img src={smile} alt="happy face" id="icon-image" />
          </div>
        </Col>
        <Col xs="9" sm="4">
          <h1 className="sub-title">Our important people is listed here</h1>
        </Col>
        <Col xs="12" sm="4" className="people-button-container">
          {isEditToDelete ? (
            <>
              <Button
                className="m-2 px-4"
                style={{ backgroundColor: "transparent", color: "gray", border: "none" }}
                onClick={toggleIsEditToDelete}
              >
                Cancel
              </Button>
              <Button
                className=" rounded-circle border-0 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "rgb(249,232,232)",
                  width: "40px",
                  height: "40px",
                }}
                onClick={onClickDelete}
              >
                <img src={garbage} alt="garbage" id="icon-image" />
              </Button>
            </>
          ) : (
            <>
              <Button
                className="m-2 px-4"
                style={{ backgroundColor: "rgb(245,255,219)", color: "rgb(255,198,0)", border: "none" }}
                onClick={toggleIsEditToDelete}
              >
                Edit
              </Button>
              <Button
                className="m-2 px-4"
                style={{ backgroundColor: "rgb(242,218,255)", color: "rgb(132,9,190)", border: "none" }}
                onClick={toggleModalAdd}
              >
                Add
              </Button>
            </>
          )}
        </Col>
      </Row>

      <Row>
        <PeopleCard
          data={data}
          isEditToDelete={isEditToDelete}
          setDataCheckedList={setDataCheckedList}
          setData={setData}
        />
      </Row>
      <PeopleModalAdd toggle={toggleModalAdd} showModal={showModalAdd} setData={setData} data={data} />
    </Container>
  );
};

export default People;
