import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Points = styled.p`
  margin-right: 3px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    margin-right: 10px;
  }
`;
