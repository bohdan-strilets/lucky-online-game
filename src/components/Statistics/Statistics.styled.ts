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

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;

  border-bottom: 2px dotted var(--brown-color);

  :last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;
