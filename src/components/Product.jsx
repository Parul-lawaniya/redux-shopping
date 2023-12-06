import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";
import { addToCart } from "../redux/features/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();
  return (
    <Container>
      <h2>Your Shopping Cart</h2>
      <Button onClick={() => dispatch(getProducts())}>Fetch Products</Button>
      <Row>
        {products &&
          products.map((product) => (
            <Col key={product.id} sm={4}>
              <Card className="m-2">
                <img
                  variant="top"
                  height="400px"
                  style={{ margin: "20px" }}
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description.slice(0, 90)}</Card.Text>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div style={{ marginTop: "20px" }}>
        {/* <Button variant="primary">Proceed to Checkout</Button> */}
      </div>
    </Container>
  );
};

export default Cart;
