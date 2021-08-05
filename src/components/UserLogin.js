import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const UserLogin = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && username.trim().length > 0
    );
  };

  //funciton that transfer username and password to app.js
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(username, password);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row style={{ marginTop: 100, marginLeft: 50, marginRight: 50 }}>
        <Col>
          <Form.Control
            placeholder="Enter username!"
            type="text"
            id="username"
            onChange={userNameChangeHandler}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Enter password > 6!"
            type="password"
            id="password"
            onChange={passwordHandler}
          />
        </Col>
      </Row>
      <div
        className="d-grid gap-2"
        style={{ marginTop: 30, marginLeft: 150, marginRight: 150 }}
      >
        <Button variant="dark" size="lg" disabled={!formIsValid} type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};
export default UserLogin;
