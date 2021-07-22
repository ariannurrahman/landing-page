import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import ImagePlaceholder from "../../images/4-people/placeholder.png";
import pencil from "../../images/7-icons/pencil.svg";
import "../styles/utility/variable.css";
const PeopleModalAdd = ({ toggle, showModal, setData }) => {
  const [addPeople, setAddPeople] = useState({});
  const [imageFile, setImageFile] = useState("");
  const onChangeInput = ({ target }) => {
    setAddPeople((prevState) => ({
      ...prevState,
      [target.name]: target.value,
      src: imageFile,
    }));
  };

  const onUploadImage = ({ target }) => {
    if (target.name === "src") {
      var reader = new FileReader();
      var url = reader.readAsDataURL(target.files[0]);
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
    }
  };

  const onClickSave = () => {
    setData((prevState) => [...prevState, addPeople]);
  };

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle} className="border-0 rounded-0">
        <ModalHeader toggle={toggle} className="exit-modal text-thin-blue border-0 text-center">
          Add People
        </ModalHeader>
        <ModalBody>
          <Form className="d-flex justify-content-center align-items-center flex-column">
            <Row className="d-flex justify-content-center align-items-center mb-2" style={{ position: "relative" }}>
              <FormGroup style={{ width: "90%" }}>
                <Input
                  type="file"
                  id="src"
                  name="src"
                  onChange={onUploadImage}
                  label=""
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </FormGroup>
              <div
                style={{ width: "200px", height: "200px", position: "relative" }}
                className="d-flex justify-content-center align-items-center  "
              >
                <div
                  style={{ width: "200px", height: "200px" }}
                  className="d-flex justify-content-center align-items-center flex-column rounded-circle"
                >
                  <img
                    src={imageFile || ImagePlaceholder}
                    alt="user upload"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    className="rounded-circle p-0"
                  />
                </div>

                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgb(217,240,255)",
                    position: "absolute",
                    bottom: "4px",
                    right: "12px",
                  }}
                  className="d-flex justify-content-center align-items-center flex-column rounded-circle"
                >
                  <img
                    onClick={() => document.getElementById("src").click()}
                    src={pencil}
                    alt="pencil to add"
                    onChange={onUploadImage}
                    style={{ width: "20px", height: "20px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </Row>

            <FormGroup style={{ width: "90%" }}>
              <Label className="text-thin-blue" for="name">
                Name
              </Label>
              <Col className="pb-2">
                <Input
                  onChange={onChangeInput}
                  className="text-thin-gray shadow-sm py-3"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  bsSize="lg"
                />
              </Col>
            </FormGroup>
            <FormGroup style={{ width: "90%" }}>
              <Label className="text-thin-blue" for="position">
                Position
              </Label>
              <Col className="pb-2">
                <Input
                  onChange={onChangeInput}
                  className="text-thin-gray shadow-sm py-3"
                  type="text"
                  name="occupation"
                  id="occupation"
                  placeholder="Enter position"
                  bsSize="lg"
                />
              </Col>
            </FormGroup>
            <FormGroup style={{ width: "90%" }}>
              <Label className="text-thin-blue" for="description">
                Description
              </Label>
              <Col className="pb-2">
                <Input
                  onChange={onChangeInput}
                  className="text-thin-gray shadow-sm py-3"
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Enter description"
                  bsSize="lg"
                  style={{ minHeight: "120px" }}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="border-0">
          <Button color="" onClick={toggle}>
            Cancel
          </Button>
          <Button
            className="button-blue px-5"
            onClick={() => {
              toggle();
              onClickSave();
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PeopleModalAdd;
