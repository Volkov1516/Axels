import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';

import { SHADOWS, COLORS } from './constants';

export const ProductCard = styled(Card)`
  margin-top: 24px;
  padding-bottom: 10px;
  &:hover {
    box-shadow: ${SHADOWS.common};
  }
`;

export const ProductImgWrapper = styled.div`
  min-height: 280px;
`;

export const ProductImg = styled(Card.Img)`
  width: 100%;
`;

export const ProductTitle = styled(Card.Title)`
  padding: 4px;
  margin: 0 auto;
`;

export const ProductDescription = styled(Card.Text)`
  text-align: center;
  color: ${COLORS.gray};
  padding: 0 14px 0 14px;
`;

export const ProductLink = styled(Link)`
  padding: 4px; 
  margin: auto;
  text-decoration: none;
`;

