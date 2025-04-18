import React from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./AppLayout.style.css";

const AppLayout = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://wallpapers.com/images/hd/netflix-logo-redon-black-l2sdc7dpfo35m127.png"
              width={100}
              alt="netflix logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link
                  to="/movies"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Movies
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
