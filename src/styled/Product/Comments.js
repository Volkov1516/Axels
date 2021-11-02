import styled from 'styled-components';
import { SHADOWS } from '../constants';

export const CommentContainer = styled.div `
  padding: 10px 30px;
  margin-bottom: 40px;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
  box-shadow: ${SHADOWS.common};
  display: flex;
`;

export const UserInfo = styled.div `
  width: 300px;
  margin-right: 14px;
`;

  