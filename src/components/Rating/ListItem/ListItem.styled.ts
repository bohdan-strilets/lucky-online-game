import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

import greenPositionBg from 'images/rating/greenPositionBg.png';
import bluePositionBg from 'images/rating/bluePositionBg.png';

import { IListItemStyled } from 'types/IListItem';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Position = styled.div<IListItemStyled>`
  position: absolute;
  top: 5px;
  left: -18px;

  width: 60px;
  height: 36px;

  background: ${({ position }) =>
    position > 3 ? `url(${bluePositionBg})` : `url(${greenPositionBg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${screenWidth.desktop}) {
    top: 5px;
    left: -60px;

    width: 90px;
    height: 56px;
  }
`;

export const Number = styled.span`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 24px;
  color: var(--white-color);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;

  border: 3px solid #f4f8fc;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  color: var(--brown-color);
`;

export const UserMetrics = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.p`
  width: 70px;
  text-align: center;

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: 90px;
  }
`;
