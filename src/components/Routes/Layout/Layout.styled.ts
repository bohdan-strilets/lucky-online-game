import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

import { IBodyStyled } from 'types/ILayout';

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0 auto;
`;

export const Body = styled.div<IBodyStyled>`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${screenWidth.desktop}) {
    justify-content: ${({ showSidebars }) =>
      showSidebars ? 'space-between' : 'center'};
  }
`;
