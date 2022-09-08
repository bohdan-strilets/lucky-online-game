import styled from '@emotion/styled';
import background from 'images/container/background.png';
import { IWrapperStyled, IPointStyled } from 'types/IContainer';

export const Wrapper = styled.div<IWrapperStyled>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => {
    if (alignItems === 'center') {
      return 'center';
    }

    if (alignItems === 'right') {
      return 'flex-end';
    }

    return 'flex-start';
  }};

  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  padding: ${({ padding }) => (padding ? padding : '')};
  margin: ${({ margin }) => (margin ? margin : '')};

  background-image: ${({ type }) => {
    if (type === 'color') {
      return `url(${background})`;
    }

    if (type === 'transparent') {
      return '';
    }
  }};

  background-position: ${({ type }) => (type === 'color' ? 'center' : '')};
  background-size: ${({ type }) => (type === 'color' ? 'cover' : '')};
  background-repeat: ${({ type }) => (type === 'color' ? 'no-repeat' : '')};
  background-color: var(--brown-transparent);

  border: ${({ type }) =>
    type === 'transparent' ? '5px solid rgba(244, 248, 252, 0.7)' : ''};
  border-top: ${({ type }) =>
    type === 'color' ? '3px solid var(--brown-color)' : ''};
  border-bottom: ${({ type }) =>
    type === 'color' ? '3px solid var(--brown-color)' : ''};
  border-radius: ${({ type }) => (type === 'transparent' ? '15px' : '')};

  backdrop-filter: ${({ type }) =>
    type === 'transparent' ? 'blur(15px)' : ''};
  filter: ${({ type }) =>
    type === 'color' ? 'drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))' : ''};
`;

export const Point = styled.div<IPointStyled>`
  position: absolute;
  top: ${({ top }) => (top ? top : '')};
  bottom: ${({ bottom }) => (bottom ? bottom : '')};
  left: ${({ left }) => (left ? left : '')};
  right: ${({ right }) => (right ? right : '')};

  width: 10px;
  height: 10px;

  border-radius: 50%;
  background: var(--gold-gradient);
`;
