import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 44px;
  font-weight: 900;
  text-align: center;

  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 20px;
  text-align: center;
  line-height: 1.75;

  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  margin-bottom: 30px;
`;

export const ShowRulesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 19px;

  color: var(--green-color);
  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.6;
  }
`;

export const Warning = styled.p`
  color: var(--red-color);
  margin-top: 20px;
`;
