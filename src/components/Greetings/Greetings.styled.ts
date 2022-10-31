import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  text-align: center;

  margin-bottom: 30px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 44px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 1.75;

  margin-bottom: 20px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ShowRulesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;

  color: var(--green-color);
  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.6;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 19px;
  }
`;

export const Warning = styled.p`
  color: var(--red-color);
  margin-top: 20px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;
