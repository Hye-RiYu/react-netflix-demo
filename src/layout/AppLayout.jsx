import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchBykeyword = (event) => {
    event.preventDefault();
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
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
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/movies" style={{ color: "white" }}>
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchBykeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
