import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

import { Link } from 'react-router-dom';

export const Tuple = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;

  color: var(--brown-color);

  margin-top: 30px;
`;

export const PolicyLink = styled(Link)`
  color: var(--green-color);
`;
