import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Row, Col } from 'react-bootstrap';

import { 
  ProductCard, ProductImg, ProductTitle, ProductDescription, ProductImgWrapper, 
  ProductLink
} from '../styled/Home.js';

const Home = ({ products }) => (
  <Container>
    <Row>
      {products &&
        products.map((product, index) => (
          <Col key={index} lg="3" md="4" sm="6" >
            <ProductCard>
              <ProductImgWrapper>
                <ProductImg src={product.img} alt="product img" variant="top" />
              </ProductImgWrapper>
              <ProductTitle> {product.title} </ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductLink to={`/product/${product.id}`}>
                <Button variant="primary">Details</Button>
              </ProductLink>
            </ProductCard>
          </Col>
        ))}
    </Row>
  </Container>
);

export default Home;
