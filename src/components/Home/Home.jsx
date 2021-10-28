import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ProductCard, ProductImg, ProductTitle, ProductDescription } from './styledHome.js'

const Home = ({ products }) => {
  return (
    <Container>
      <Row>
        {products &&
          products.map((product, index) => (
            <Col key={index} lg="3" md="4" sm="6">
              <ProductCard>
                <ProductImg src={product.img} alt="product img" variant="top" />
                <ProductTitle> {product.title} </ProductTitle>
                <ProductDescription>
                  {product.description}
                </ProductDescription>
                <Link
                  to={`/product/${product.id}`}
                  style={{ padding: "4px", margin: "0 auto" }}
                >
                  <Button variant="primary">Details</Button>
                </Link>
              </ProductCard>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
