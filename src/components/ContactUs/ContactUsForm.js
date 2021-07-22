import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/style.css";

const ContactUsForm = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label className="text-thin-blue" for="name">
            Name
          </Label>
          <Input className="text-thin-gray py-2 shadow-sm" type="text" name="name" id="name" placeholder="Enter name" />
        </FormGroup>

        <FormGroup>
          <Label className="text-thin-blue" for="email">
            Email
          </Label>
          <Input
            className="text-thin-gray py-2 shadow-sm"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </FormGroup>

        <FormGroup>
          <Label className="text-thin-blue" for="subject">
            Subject
          </Label>
          <Input
            className="text-thin-gray py-2 shadow-sm"
            type="text"
            name="subject"
            id="subject"
            placeholder="Please select your subject"
          />
        </FormGroup>

        <FormGroup>
          <Label className="text-thin-blue" for="message">
            Message
          </Label>
          <Input
            className="text-thin-gray py-2 shadow-sm"
            style={{ minHeight: "120px" }}
            type="textarea"
            name="message"
            id="message"
            placeholder="Write your message here"
          />
        </FormGroup>
        <Button className="button-blue my-3 text-center float-end" style={{ width: "40%" }}>
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUsForm;
