import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Text = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
