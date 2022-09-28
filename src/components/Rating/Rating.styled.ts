import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
