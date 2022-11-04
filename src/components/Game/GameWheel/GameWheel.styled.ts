import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

import { IInnerCircleStyled } from 'types/IGameWheel';

export const OuterCircle = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 270px;
  height: 270px;

  background: var(--blue-gradient);
  border: 10px solid var(--1white-transparent);
  border-radius: 50%;

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: 500px;
    height: 500px;
  }
`;

export const InnerCircle = styled.div<IInnerCircleStyled>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 180px;

  background: ${({ isWon }) =>
    isWon ? 'var(--green-color)' : 'var(--red-color)'};
  border: 15px solid var(--white-transparent);
  border-radius: 50%;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.5) inset;

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: 330px;
    height: 330px;
  }
`;

export const Value = styled.span`
  font-size: 80px;
  font-weight: 900;

  color: var(--white-color);
  text-shadow: 5px 5px 3px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 130px;
  }
`;
