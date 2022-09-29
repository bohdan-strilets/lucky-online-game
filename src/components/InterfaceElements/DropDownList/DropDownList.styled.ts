import styled from '@emotion/styled';
import { IWrapper } from 'types/IDropDownListState';

export const Wrapper = styled.div<IWrapper>`
  position: absolute;
  top: ${({ top }) => (top ? top : '')};
  right: ${({ right }) => (right ? right : '')};
  left: ${({ left }) => (left ? left : '')};
  bottom: ${({ bottom }) => (bottom ? bottom : '')};

  width: 227px;

  border: 3px solid var(--brown-color);
  border-radius: 8px;
  color: var(--brown-color);

  font-size: 19px;
  line-height: 24px;

  cursor: default;
  overflow: hidden;
  z-index: 99;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

export const Option = styled.div`
  background-color: #fff9ed;
  padding: 10px;

  transition: background var(--hover-effect);
  cursor: pointer;

  :hover,
  :focus {
    background: #fde3a7;
  }
`;
