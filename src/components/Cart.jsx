import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/features/cartSlice';

function Cart() {
  const dispatch = useDispatch()
    const cartList = useSelector(state=>state.cart.cartList)
  return (
    <Container>


    <Row>
      {!cartList
      ?<h1>Nothing to show</h1>
      :cartList.map((item,index)=>(
        <Col key={index} sm={4}>
        <Card className="m-2">
          <img
            variant="top"
            height="400px"
            style={{ margin: "20px" }}
            src={item.image}
            alt={item.name}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description.slice(0, 90)}</Card.Text>
            <Card.Text>${item.price.toFixed(2)}</Card.Text>
            <Card.Text>quantity : 0</Card.Text>
            <Button
              variant="danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
      ))
      }
    </Row>
    </Container>
  );
}

export default Cart;