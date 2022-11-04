import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const List = styled.ul`
  display: flex;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    position: absolute;
    top: -25px;
    right: 30px;
  }
`;

export const Item = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;
