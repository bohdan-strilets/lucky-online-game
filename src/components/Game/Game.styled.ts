import styled from '@emotion/styled';
import screenWidth from 'helpers/screenWidth';

import { IWrapperStyled, IItemStyled, ILabel } from 'types/IGame';

export const Form = styled.form`
  width: 270px;
  margin-bottom: 15px;

  @media screen and (min-width: ${screenWidth.tablet}) {
    width: 650px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${screenWidth.desktop}) {
    width: 600px;
  }
`;

export const Wrapper = styled.div<IWrapperStyled>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : '')};

  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
`;

export const Item = styled.label<IItemStyled>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  margin: ${({ margin }) => (margin ? margin : '')};

  background-color: ${({ background }) => {
    if (background === 'red') {
      return 'var(--red-color)';
    }

    if (background === 'black') {
      return 'var(--black-color)';
    }

    return 'var(--green-color)';
  }};

  box-shadow: inset 0px 25px 0px rgba(255, 255, 255, 0.1);
  color: var(--white-color);
  border: 3px solid var(--white-transparent);

  border-top-right-radius: ${({ topRightRadius }) =>
    topRightRadius ? topRightRadius : '10px'};
  border-top-left-radius: ${({ topLeftRadius }) =>
    topLeftRadius ? topLeftRadius : '10px'};
  border-bottom-right-radius: ${({ bottomRightRadius }) =>
    bottomRightRadius ? bottomRightRadius : '10px'};
  border-bottom-left-radius: ${({ bottomLeftRadius }) =>
    bottomLeftRadius ? bottomLeftRadius : '10px'};

  cursor: pointer;
  transition: box-shadow var(--hover-effect);

  :hover,
  :focus {
    box-shadow: none;
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Label = styled.span<ILabel>`
  font-weight: 900;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '24px')};
  text-align: center;
  text-transform: uppercase;

  color: var(--white-color);
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
`;
