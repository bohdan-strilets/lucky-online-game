import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Wrapper = styled.div`
  position: relative;
`;

export const Message = styled.div`
  position: absolute;
  top: 33%;
  left: -10px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    top: 5%;
    left: 53%;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    top: 5%;
    left: 50%;
  }
`;
