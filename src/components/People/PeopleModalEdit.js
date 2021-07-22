import { useState, useEffect } from "react";
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
import "./People.css";

const PeopleModalEdit = ({ showModalEdit, toggleEdit, data, setData }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [dataIndex, setDataIndex] = useState(null);

  const [dataActive, setDataActive] = useState({});

  useEffect(() => {
    let { activeModal, show } = showModalEdit;
    setIsShowModal(show);
    setDataIndex(activeModal);
    setDataActive(data[activeModal]);
  }, [showModalEdit, data, setData, setDataActive]);

  const onChangeInput = ({ target }) => {
    setDataActive((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onClickSaveEdit = () => {
    let cloneData = [...data];
    cloneData[dataIndex] = {
      name: dataActive?.name || "-",
      src: dataActive?.src || "-",
      occupation: dataActive?.occupation || "-",
      description: dataActive?.description || "-",
    };

    setData(cloneData);
  };

  const onUploadImage = ({ target }) => {
    if (target.name === "src") {
      var reader = new FileReader();
      var url = reader.readAsDataURL(target.files[0]);
      reader.onloadend = () => {
        setDataActive((prevState) => ({
          ...prevState,
          src: reader.result,
        }));
      };
    }
  };

  return (
    <div>
      <Modal isOpen={isShowModal} toggle={toggleEdit} className={""}>
        <ModalHeader toggle={toggleEdit} className="exit-modal text-thin-blue border-0 text-center">
          Edit People
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
                    src={dataActive?.src || ImagePlaceholder}
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
                  value={dataActive?.name || ""}
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
                  value={dataActive?.occupation || ""}
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
                  value={dataActive?.description || ""}
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

          {/* {show ? data[activeModal].name : ""}
          {show ? data[activeModal].occupation : ""}
          {show ? (data[activeModal].desc ? "" : "") : ""}
          {show ? data[activeModal].src : ""} */}
        </ModalBody>
        <ModalFooter className="border-0">
          <Button color="" onClick={toggleEdit}>
            Cancel
          </Button>
          <Button
            className="button-blue px-5"
            onClick={() => {
              toggleEdit();
              onClickSaveEdit();
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PeopleModalEdit;
