import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Wrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 900;

  margin-bottom: 10px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    margin-bottom: 40px;
  }
`;

export const CategoriesList = styled.ul`
  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CategoriesItem = styled.li`
  width: 90px;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  margin-bottom: 15px;

  :last-child {
    margin-bottom: 0;
  }
`;
