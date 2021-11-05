import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Button } from 'react-bootstrap';

import { SET_USER } from '../redux/features/auth/authSlice.js';
import { UserName, NavbarBrand, BrandLink } from '../styled/Header.js';

const Header = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(SET_USER(false));
  }

  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <BrandLink to="/">
          <NavbarBrand> Home </NavbarBrand>
        </BrandLink>
        {isAuth && (
          <div className="justify-content-end">
            <UserName>{isAuth.email}</UserName>
            <Button onClick={handleLogout} variant="outline-light" size="sm">
              Logout
            </Button>
          </div>
        )}
      </Container>
    </Navbar>
  )
};

export default Header;
