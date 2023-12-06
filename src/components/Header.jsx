// Navbar.js
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState(0);
  const cartList = useSelector((state) => state.cart.cartList);
  useEffect(() => setCount(cartList.length), [cartList.length]);
  return (
    <Navbar bg="dark" className="w-100 ">
      <Navbar.Brand style={{ color: "cyan" }} href="#home">
        Navbar
      </Navbar.Brand>
      <Nav className="me-auto d-flex justify-content-between">
        <Nav.Link as={Link} to="/product" style={{ color: "cyan" }}>
          Products
        </Nav.Link>
      </Nav>
      <Nav.Link as={Link} to="/cart" style={{ color: "cyan" }} className="px-4">
        Cart<Badge>{count}</Badge>
      </Nav.Link>
      <Nav.Link as={Link} to="/login" style={{ color: "cyan" }} className="px-3">
          login
        </Nav.Link>
      
    </Navbar>
  );
};

export default Header;
