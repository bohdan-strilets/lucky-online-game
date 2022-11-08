import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Title = styled.h1`
  font-weight: 900;
  font-size: 42px;
  text-transform: uppercase;
  text-align: center;

  margin-bottom: 15px;
`;

export const Tuple = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
