import React from "react";
import TaksItem from "./TaksItem";
import { useState, useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

var data = {};

let i = 0;
const Tasks = () => {
  const [task, addTask] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch("https://swapi.dev/api/films/");
      data = await response.json();
      data = data.results;
    }
    fetchMovies();
  }, []);
  // adding task  while keeeping record  of previous tasks in list
  var content = <p style={{ textAlign: "center" }}></p>;
  const addTasks = () => {
    addTask((prevstate) => {
      try {
        return [...prevstate, { id: data[i].episode_id, todo: data[i].title }];
      } catch (e) {
        i = 0;
        return [...prevstate, { id: data[i].episode_id, todo: data[i].title }];
      }
    });
    i++;
  };

  const deleteTask = (id) => {
    addTask((prev) => {
      const updatedTask = prev.filter((obj) => obj.id !== id);
      return updatedTask;
    });
  };
  if (task.length === 0) {
    console.log(i);
    content = (
      <p style={{ textAlign: "center" }}>No movies found. Maybe add one?</p>
    );
  }

  if (task.length > 0) {
    content = task.map((onetask) => {
      return (
        <TaksItem
          task={onetask}
          deleteTask={deleteTask}
          key={onetask?.id}
          id={onetask?.id}
          onDelete={deleteTask}
        />
      );
    });
  }
  return (
    <>
      {" "}
      <div>{content}</div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Button onClick={addTasks} variant="dark">
              Add Movie
            </Button>
          </Col>
          <Col>
            <p></p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tasks;
