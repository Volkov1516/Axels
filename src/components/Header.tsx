import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Button } from 'react-bootstrap';

import { SET_USER } from '../redux/features/auth/authSlice';
import { UserName, NavbarBrand, BrandLink } from '../styled/Header.js';
import { useAppSelector, useAppDispatch } from '../redux/hooks'

const Header = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(SET_USER({
      id: 0,
      email: '',
      password: '',
      logged: false
    }));
  }

  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <BrandLink to="/">
          <NavbarBrand> Home </NavbarBrand>
        </BrandLink>
        {isAuth.logged && (
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
