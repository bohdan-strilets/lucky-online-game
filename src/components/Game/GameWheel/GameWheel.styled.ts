import styled from '@emotion/styled';

export const OuterCircle = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 500px;

  background: var(--blue-gradient);
  border: 10px solid var(--white-transparent);
  border-radius: 50%;
`;

export const InnerCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 330px;
  height: 330px;

  background: var(--green-gradient);
  border: 15px solid var(--white-transparent);
  border-radius: 50%;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5) inset;
`;

export const Value = styled.span`
  font-size: 130px;
  font-weight: 900;

  color: var(--white-color);
  text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.2);
`;
