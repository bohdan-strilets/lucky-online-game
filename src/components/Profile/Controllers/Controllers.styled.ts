import styled from '@emotion/styled';

export const List = styled.ul`
  position: absolute;
  top: -25px;
  right: 30px;

  display: flex;
`;

export const Item = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;
