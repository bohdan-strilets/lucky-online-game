import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Tuple = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
  margin-top: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 19px;
  color: var(--green-color);
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.7;
  }
`;
