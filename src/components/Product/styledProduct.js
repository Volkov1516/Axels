import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const ProductCard = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px 0px 20px 0px;
    padding: 10px 40px 10px 40px;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    box-shadow: 0 20px 35px #E5E5E5;
    display: flex;
  `;

export const ProductImg = styled.img`
    width: 400px;
    height: 400px;
  `;

export const ProductInfo = styled.div`
    width: 100%;
    margin-left: 10px;
  `;

export const ProductDescription = styled.p`
  color: gray;
`;

export const InputSectionLogin = styled.div`
  width: 400px;
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
