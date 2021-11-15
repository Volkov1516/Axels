import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { COLORS } from './constants';

export const UserName = styled.span`
  color: ${COLORS.white};
  margin-right: 10px;
`;

export const NavbarBrand = styled.h1`
  color: ${COLORS.white};
  font-size: 24px;
`;

export const BrandLink = styled(Link)`
  text-decoration: none;
`;

