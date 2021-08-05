import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import User from "./User";
import Tasks from "./Tasks";
import Home from "./Home";

const NavBar = (props) => {
  const { logout, username } = props;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            variant="pills"
            className="mr-auto"
            variant="tabs"
            defaultActiveKey="/"
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/user">
              User
            </Nav.Link>
            <Nav.Link as={Link} to="/tasks">
              Tasks
            </Nav.Link>
          </Nav>
          <Button variant="dark" onClick={logout} style={{ marginLeft: 20 }}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user">
          <User logOut={logout} username={username} />
        </Route>

        <Route exact path="/tasks" component={Tasks} />
      </Switch>
    </>
  );
};

export default NavBar;
