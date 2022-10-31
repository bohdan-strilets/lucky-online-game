import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Tuple = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledLink = styled.button`
  font-family: inherit;
  font-size: 14px;

  border: none;
  background-color: transparent;
  color: var(--green-color);

  cursor: pointer;
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.7;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 19px;
  }
`;
