import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import { FormWrapper, SubmitButton }  from './styledLogin'

const Login = ({ isAuth, setIsAuth }) => {

  const [inputEmailValue, setInputEmailValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAuth({
      id: 1,
      email: inputEmailValue,
      password: "123"
    })
  }

  return (
    <Container>
      <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control required type="text" placeholder="Enter your email" value={inputEmailValue} onChange={e => setInputEmailValue(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control required type="password" placeholder="Enter your password" />
        </Form.Group>

        <SubmitButton type="submit" > Sign In </SubmitButton>

        <SubmitButton type="submit" variant="outline-danger" size="sm" > Sign Up </SubmitButton>
      </Form>
      </FormWrapper>
    </Container>
  )
}

export default Login
