import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Home = ({ products }) => {
  const ProductCard = styled(Card)`
    margin: 10px;
  `;

  const ProductImg = styled(Card.Img)`
    height: 200px;
    width: 100%;
  `;

  const ProductTitle = styled(Card.Title)`
    padding: 4px;
    margin: 0 auto;
  `;

  const ProductDescription = styled(Card.Text)`
    padding: 4px;
  `;

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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
