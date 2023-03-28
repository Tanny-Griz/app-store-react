import React, {useState, useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { registration, login } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { emailRegex } from '../utils/regexp'

const AuthPage = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    if (emailRegex.test(email)) {
      try {
        let userData
        if (isLogin) {
          userData = await login(email, password)
        } else {
          userData = await registration(email, password)
        }
        user.setUser(userData)
        user.setIsAuth(true)
        history(SHOP_ROUTE)
      } catch (e) {
        setError(e.response.data.message)
      }
    } else {
      setError('Please enter a valid email!')
    }
  }
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col md={{ span: 6, offset: 3 }}>
          <Card className='p-4'>
            <Form className='md d-flex flex-column'>
              <h2 className='text-center'>
                {isLogin ? 'Authorization' : 'Registration'}
              </h2>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  value={email}
                  placeholder='Enter email' />
                <Form.Text className='text-muted'>
                ...
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  value={password}
                  placeholder='Password' />
              </Form.Group>
              <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                {isLogin
                  ? <div>
                    No account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
                  </div>
                  : <div>
                    Have an account? <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
                  </div>
                }
                {/* <p>
                  Use email: <b>test_admin@gmail.com </b> and password: <b>12345</b> to login as admin
                </p> */}
                <p className='text-danger'>{error || ''}</p>
                <Button
                  className='mt-3'
                  variant={'outline-success'}
                  onClick={click}
                >
                  {isLogin ? 'Log in' : 'Sign up'}
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
})

export default AuthPage
