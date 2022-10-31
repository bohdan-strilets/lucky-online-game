import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: ${screenWidth.tablet}) {
    margin-right: 30px;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const AuthLink = styled(NavLink)`
  font-weight: 900;
  font-size: 30px;
  text-transform: uppercase;

  color: var(--brown-color);

  &.active {
    opacity: 0.7;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 42px;
  }
`;
