import React, { useContext } from 'react'
import { Context } from '..'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { observer } from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useNavigate()
  return (
    <Navbar bg='light' expand='lg' className='mb-4 py-3'>
      <Container>
        <Navbar.Brand href='#home'>OShop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {user.isAuth
            ? <Nav className='ms-auto'>
              <Button onClick={() => history(ADMIN_ROUTE)}>Admin panel</Button>
              <Button onClick={() => history(LOGIN_ROUTE)}>Log out</Button>
            </Nav>
            : <Nav className='ms-auto'>
              <Button className='btn-light' onClick={() => user.setIsAuth(true)}>Sign up</Button>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
})

export default NavBar
