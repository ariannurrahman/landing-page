import { useState } from "react";
import { Container, Row, Card, CardImg, CardText, CardBody, CardTitle, FormGroup, Input } from "reactstrap";
import PeopleModalEdit from "./PeopleModalEdit";
import ImagePlaceholder from "../../images/4-people/placeholder.png";
const PeopleCard = ({ data, isEditToDelete, setDataCheckedList, setData }) => {
  const [showModalEdit, setShowModalEdit] = useState({
    activeModal: 0,
    show: false,
  });
  const toggleEdit = (index) => {
    console.log(index);
    setShowModalEdit((prevState) => ({
      ...prevState,
      activeModal: index,
      show: !showModalEdit.show,
    }));
  };

  const onCheck = (data) => {
    setDataCheckedList((prevState) => [...prevState, data]);
  };

  const renderCard = () => {
    if (!data.length) return null;

    return data.map((card, index) => {
      return (
        <Card
          key={`${index}${card.name}`}
          style={{ width: "200px", minHeight: "360px", height: "100%", position: "relative" }}
          className="shadow rounded m-4 p-0 border-0"
        >
          {isEditToDelete ? (
            <FormGroup check style={{ position: "absolute", top: "4px", left: "8px" }}>
              <Input
                type="checkbox"
                name="checkbox"
                style={{ borderRadius: "50%" }}
                onClick={() => onCheck(data[index])}
              />
            </FormGroup>
          ) : null}

          <CardImg
            top
            style={{ width: "100%", minWidth: "200px", minHeight: "220px", maxHeight: "220px", objectFit: "contain" }}
            src={card.src || ImagePlaceholder}
            alt={`${card.name}-${card.occupation}`}
            onClick={() => toggleEdit(index)}
          />
          <CardBody className="d-flex justify-content-start align-items-center flex-wrap flex-column">
            <CardTitle tag="p" style={{ color: "black" }}>
              {card.name}
            </CardTitle>

            <CardText>{card.occupation}</CardText>
            <CardText>{card.description || null}</CardText>
          </CardBody>
        </Card>
      );
    });
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center flex-wrap flex-row"> {renderCard()}</Row>
      <PeopleModalEdit showModalEdit={showModalEdit} toggleEdit={toggleEdit} data={data} setData={setData} />
    </Container>
  );
};

export default PeopleCard;
