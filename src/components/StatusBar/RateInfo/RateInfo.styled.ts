import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  margin-bottom: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 5px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.p`
  text-transform: uppercase;
`;

export const Value = styled.p`
  font-weight: 900;
`;
