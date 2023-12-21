import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingCartComponent from '../ShoppingCartComponent/ShoppingCartComponent';

import { Link } from 'react-router-dom';
import { useGetCategories } from '../../hooks/useProduct';

const NavBarComponent = () => {
  const { categories } = useGetCategories();

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to='/'>Flame-eShop</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {categories.map((category, index) => {
                    return (
                      <NavDropdown.Item
                      key={index} href={`/category/${category}`}>
                        {category}
                      </NavDropdown.Item>
                    );
                  })
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <ShoppingCartComponent/>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBarComponent;
