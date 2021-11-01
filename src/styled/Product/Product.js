import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { SHADOWS, COLORS } from '../constants';

export const ProductCard = styled.div`
    margin: 20px 0px 20px 0px;
    padding: 10px 10px 10px 10px;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    box-shadow: ${SHADOWS.common};
    display: flex;
  `;

export const ProductImg = styled.img`
    width: 300px;
  `;

export const ProductInfo = styled.div``;

export const ProductDescription = styled.p`
  color: ${COLORS.gray};
`;

export const InputSectionLogin = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
`;

export const InputSectionLoginText = styled.p`
  font-weight: 600;
`;

export const InputSection = styled.div`
    width: 802px;
    margin: 0 auto;
    display: flex;
  `;

export const ReviewInput = styled.input`
    width: 640px;
    height: 60px;
    padding-left: 10px;
  `;

export const ReviewButton = styled(Button)`
    width: 100px;
    height: 60px;
    margin-bottom: 5px;
  `;

export const CommentsSection = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px 0px 20px 0px;
    padding: 10px 40px 10px 40px;
  `;
