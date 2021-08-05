import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
const TaksItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <>
      <Container style={{ marginTop: 20 }}>
        <Row className="justify-content-md-center">
          <Col>
            <p>{props.task.todo}</p>
          </Col>
          <Col>
            <Button onClick={deleteHandler} variant="dark">
              Delete Movie
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TaksItem;
