import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const User = (props) => {
  const [valid, isValid] = useState(false);
  const [psd, setPsd] = useState("");

  //for showing username and hidden password on screen
  const user = props.username.userName;
  const pass = props.username.passWord;

  const passwordChangeHandler = (event) => {
    setPsd(event.target.value);

    isValid(event.target.value.trim().length > 6);
    console.log(psd);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.logOut();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Username:
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext type="text" defaultValue={user} readOnly />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              plaintext
              readonly
              id="pswd"
              value={pass}
            />
          </Col>
        </Form.Group>
        {/* input box for changing password */}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Change Password:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              onChange={passwordChangeHandler}
              style={{ width: 150 }}
            />
          </Col>
        </Form.Group>

        <div
          className="d-grid gap-2"
          style={{ marginLeft: 150, marginRight: 150 }}
        >
          <Button variant="dark" size="lg" disabled={!valid} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default User;
