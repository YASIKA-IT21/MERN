import { Navbar, Nav, Container, NavDropdown, Badge, Form, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          BEST ONLINE SHOP
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in shop..." />
              {/* Added Button to wrap the icon */}
              <Button variant="outline-light" style={{ backgroundColor: 'orange' }}>
  <i className="bi bi-search" style={{ color: 'black', fontSize: '1.2rem' }}></i>
</Button>


            </InputGroup>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/admin/orders">Admin</Nav.Link>
      
          
            

            <NavDropdown title="Yasika" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/user-orderpage">My orders</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/user">My profile</NavDropdown.Item>
            <NavDropdown.Item >Logout</NavDropdown.Item>
            
            
             
            </NavDropdown>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
           < Nav.Link as={Link} to="/register">Register</Nav.Link>
           <Nav.Link as={Link} to="/cart">
  <Badge pill bg="danger">
    6
  </Badge>
  <i className="bi bi-cart">Cart</i>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
