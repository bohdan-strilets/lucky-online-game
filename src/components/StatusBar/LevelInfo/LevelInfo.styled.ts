import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  margin: 30px 0 80px 0;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5px;
  padding: 4px;

  background-color: var(--white-color);
  border-radius: 5px;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2));
`;

export const Progress = styled.div<{ percengate: number }>`
  width: ${({ percengate }) => (percengate ? `${percengate}%` : '100%')};
  height: 4px;

  background-color: var(--green-color);
  border-radius: 10px;
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
`;
