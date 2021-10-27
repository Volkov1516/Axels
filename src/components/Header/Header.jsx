import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" bg="primary">
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand style={{ color: "#fff" }}>Logo Text</Navbar.Brand>
        </Link>
        <Link to="/login">
          <Button className="justify-content-end">Login</Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
