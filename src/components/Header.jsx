import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button } from "react-bootstrap";
import { UserName } from "../styled/Header.js"

const Header = ({ isAuth, setIsAuth }) => {
  const handleLogout = () => setIsAuth(false)
  
  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{color: 'white'}}> Home </Navbar.Brand>
        </Link>
        {isAuth && <div className="justify-content-end">
          <UserName>{isAuth.email}</UserName>
          <Button onClick={handleLogout} variant="outline-light" size="sm" >Logout</Button>  
        </div>}
      </Container>
    </Navbar>
  );
};

export default Header;
