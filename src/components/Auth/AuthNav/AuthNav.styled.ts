import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
`;

export const Item = styled.li`
  margin-right: 30px;

  :last-child {
    margin-right: 0;
  }
`;

export const AuthLink = styled(NavLink)`
  font-weight: 900;
  font-size: 42px;
  text-transform: uppercase;

  color: var(--brown-color);

  &.active {
    opacity: 0.7;
  }
`;
