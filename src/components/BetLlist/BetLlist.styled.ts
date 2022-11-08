import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 900;

  margin-bottom: 40px;
`;

export const CategoriesList = styled.ul`
  font-weight: 900;
  font-size: 18px;

  padding: 20px 15px 50px 15px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CategoriesItem = styled.li`
  text-transform: uppercase;

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: 150px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 20px 15px;

  :nth-of-type(odd) {
    background-color: var(--white-transparent);
    border-radius: 8px;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 150px;
  text-align: center;

  @media screen and (min-width: ${screenWidth.tablet}) {
    align-items: center;
    justify-content: center;
  }
`;

export const IsWon = styled.div<{ isWon: boolean }>`
  width: 16px;
  height: 16px;

  border-radius: 50%;
  background-color: ${({ isWon }) =>
    isWon ? 'var(--green-color)' : 'var(--red-color)'};
`;
