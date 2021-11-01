import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { SHADOWS, COLORS } from './constants'

export const ProductCard = styled(Card)`
    margin-top: 24px;
    padding-bottom: 10px;
    &:hover {
      box-shadow: ${SHADOWS.common};
    }
  `;

export const ProductImgWrapper = styled.div`
    height: 260px;
  `;

export  const ProductImg = styled(Card.Img)`
    width: 100%;
  `;

export  const ProductTitle = styled(Card.Title)`
    padding: 4px;
    margin: 0 auto;
  `;

export  const ProductDescription = styled(Card.Text)`
    padding: 0px 10px 0px 10px;
    color: ${COLORS.gray};
  `;