import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

export const Header = styled.div`
  margin-bottom: 50px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Controllers = styled.ul`
  display: flex;
  margin-bottom: 15px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: 30px;

  border-bottom: 2px dotted var(--brown-color);

  :last-child {
    margin-bottom: 0;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: auto;

  opacity: 1;

  cursor: pointer;
  transition: border-color var(--hover-effect), opacity var(--hover-effect);

  :hover,
  :focus {
    border-color: var(--brown-color);
    opacity: 0.7;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${screenWidth.tablet}) {
    position: absolute;
    top: -50px;
    left: 50px;

    width: 93px;
    height: 93px;

    border-radius: 50%;
    border: 3px solid var(--white-color);
  }
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 50px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 34px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    font-size: 44px;
  }
`;

export const Nickname = styled.span`
  font-size: 18px;
  color: var(--green-color);

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  margin-bottom: 15px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    font-size: 20px;
  }
`;

export const Value = styled.span`
  margin-right: 5px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    margin-right: 10px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    text-transform: uppercase;
  }
`;

export const EditBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.5;
  }
`;
