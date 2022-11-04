import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Wrapper = styled.div`
  @media screen and (max-width: 1439px) {
    position: fixed;
    bottom: 0;
    left: 0;

    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;

  @media screen and (min-width: ${screenWidth.desktop}) {
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

  @media screen and (min-width: ${screenWidth.tablet}) and (max-width: 1439px) {
    margin-right: 100px;
  }
`;
