import React, { useState } from "react";
import { useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Badge,
} from "react-bootstrap";

//action
import { Link } from "react-router-dom";

//import { getSearchProducts } from "../redux/actions/productAction";

export default function Header({ match }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const [searchFood, setSearchFood] = useState();


  const history = useHistory();
  let data = JSON.parse(localStorage.getItem("user"));
  console.log("hello", data);

  function logout() {
    localStorage.clear();
    alert("LogOut sucessfully");
    history.push("/signin");
    window.location.reload(true);
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">FoodBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to="/products/all">
          {" "}
          Food Items{" "}
        </Nav.Link>
        <NavDropdown
          as={Link}
          to="/products/all"
          title="Category"
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item as={Link} to="/products/Indian">
            Indian
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/products/Italian">
            Italian
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/search/Chinese">
            Chinese
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/products/Maxican">
            Maxican
          </NavDropdown.Item>
        </NavDropdown>
        <Form className="d-flex mr-sm-10 ">
          <FormControl
            type="search"
            placeholder="search"
            className="me-2"
            aria-label="Search"
            style={{ marginLeft: "60px", paddingRight: "40rem" }}
            onChange={(e) => setSearchFood(e.target.value)}
          />

          <Link to={`/products/search/${searchFood}`}>
            <Button variant="outline-success">Search</Button>
          </Link>
        </Form>
        <br />

        {localStorage.getItem("user") ? (
          <Nav
          // className="me-auto my-2 my-lg-0"
          // style={{ maxHeight: "100px" }}
          // navbarScroll
          >
            <NavDropdown title="user" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Link to="/cart">
              <Button variant="primary me-2">
                Cart <Badge bg="secondary">{getCartCount()}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </Link>
          </Nav>
        ) : (
          <Nav>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/signin">
                SignIn
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                SignUp
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin">
                Admin
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
