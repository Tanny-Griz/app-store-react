import { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">OShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        { user.isAuth ?
          <Nav className="ms-auto">
             <Nav.Link href="#home">Log in</Nav.Link>
            <Nav.Link href="#link">Admin panel</Nav.Link>
            : <Nav.Link href="#link">Sign up</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          : <Nav className="ms-auto">
          <Nav.Link href="#home">Log in</Nav.Link>
         <Nav.Link href="#link">Admin panel</Nav.Link>
         <Nav.Link href="#link">Sign up</Nav.Link>
         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Separated link
           </NavDropdown.Item>
         </NavDropdown>
       </Nav>
         }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar