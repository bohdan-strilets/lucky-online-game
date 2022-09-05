import styled from '@emotion/styled';

export const Tuple = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
  margin-top: 30px;
`;

export const StyledLink = styled.button`
  font-family: inherit;
  font-size: 19px;

  border: none;
  background-color: transparent;
  color: var(--green-color);

  cursor: pointer;
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.7;
  }
`;
