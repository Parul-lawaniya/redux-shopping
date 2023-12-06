// Login.js
import axios from 'axios';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from './features/auth/authSlice';
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
  // const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  //api requested from reqres.in site
  const handleLogin = async()=>{
    try {
      const res = await axios({
        method:'post',
        url:'https://reqres.in/api/login',
        data:{    
          email: "eve.holt@reqres.in",
          password: "cityslicka"}
      })
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        {/* <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group> */}
        <Button variant="primary" className="d-flex m-3"type="button"onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
    
  );
};

export default Login;
