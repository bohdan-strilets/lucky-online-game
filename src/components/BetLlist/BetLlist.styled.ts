import styled from '@emotion/styled';

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
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 900;
  font-size: 18px;

  padding: 20px 15px 50px 15px;
`;

export const CategoriesItem = styled.li`
  width: 150px;
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 15px;

  :nth-of-type(odd) {
    background-color: var(--white-transparent);
    border-radius: 8px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  text-align: center;
`;

export const IsWon = styled.div<{ isWon: boolean }>`
  width: 16px;
  height: 16px;

  border-radius: 50%;
  background-color: ${({ isWon }) =>
    isWon ? 'var(--green-color)' : 'var(--red-color)'};
`;
