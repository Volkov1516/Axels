import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Form } from 'react-bootstrap';

import { SET_USER } from '../redux/features/auth/authSlice';
import { FormWrapper, SubmitButton, FormWarning } from '../styled/Login';
import { useAppDispatch } from '../redux/hooks';

const Login = () => {
  const dispatch = useAppDispatch();

  const [toggleSign, setToggleSign] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required!').min(8, 'Too Short!').email('Invalid email!'),
      password: Yup.string().required('Required!').min(8, 'Too Short!').max(20, 'Too long!'),
    }),
    onSubmit: (values) => {
      dispatch(SET_USER({
        id: 1,
        email: values.email,
        password: values.password,
        logged: true
      }))
    },
  });

  const SignUp = () => (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control 
            id="email" name="email" type="text" placeholder="example@mail.com" 
            value={formik.values.email} onChange={formik.handleChange} 
          />
          {formik.errors.email && <FormWarning>{formik.errors.email}</FormWarning>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control 
            id="password" name="password" type="password" placeholder="Create a password" 
            value={formik.values.password} onChange={formik.handleChange} 
          />
          {formik.errors.password && <FormWarning>{formik.errors.password}</FormWarning>}
        </Form.Group>
        <SubmitButton type="submit" > Sign Up </SubmitButton>
        <SubmitButton onClick={() => setToggleSign(!toggleSign)} variant="outline-danger" size="sm" >
          Sign In
        </SubmitButton>
      </Form>
    </FormWrapper>
  )

  const SignIn = () => (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control 
            id="email" name="email" type="text" placeholder="example@mail.com" 
            value={formik.values.email} onChange={formik.handleChange} 
          />
          {formik.errors.email && <FormWarning>{formik.errors.email}</FormWarning>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control 
            id="password" name="password" type="password" placeholder="Create a password" 
            value={formik.values.password} onChange={formik.handleChange} 
          />
          {formik.errors.password && <FormWarning>{formik.errors.password}</FormWarning>}
        </Form.Group>
        <SubmitButton type="submit" > Sign In </SubmitButton>
        <SubmitButton onClick={() => setToggleSign(!toggleSign)} variant="outline-danger" size="sm" >
          Sign Up
        </SubmitButton>
      </Form>
    </FormWrapper>
  )

  return (
    <Container>
      { toggleSign ? <SignIn /> : <SignUp /> }
    </Container>
  )
}

export default Login;
