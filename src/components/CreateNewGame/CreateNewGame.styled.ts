import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;

  width: 100%;
`;

export const Text = styled.p`
  text-align: center;

  margin-bottom: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media screen and (min-width: ${screenWidth.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    margin-bottom: 15px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;
