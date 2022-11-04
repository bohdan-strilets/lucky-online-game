import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Wrapper = styled.div`
  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Chart = styled.div`
  width: 280px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: 320px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: 470px;
  }
`;
