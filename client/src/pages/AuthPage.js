import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const AuthPage = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='p-4'>
            <Form className='md d-flex flex-column'>
              <h2 className='text-center'>
                {isLogin ? 'Authorization' : 'Registration'}
              </h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                ...
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              {isLogin
                ? <div className='d-flex justify-content-between'>
                  <p>
                No account? <NavLink to={REGISTRATION_ROUTE}>register</NavLink>
                  </p>
                  <Button className='align-self-end' variant="outline-success" type="submit">
                Log in
                  </Button>
                </div>
                : <div className='d-flex justify-content-between'>
                  <p>
                Have an account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
                  </p>
                  <Button className='align-self-end' variant="outline-success" type="submit">
                Sign up
                  </Button>
                </div>
              }
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AuthPage
