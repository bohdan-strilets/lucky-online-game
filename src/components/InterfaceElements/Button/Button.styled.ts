import styled from '@emotion/styled';
import { IButtonWrapperStyled } from 'types/IButton';

export const ButtonWrapper = styled.button<IButtonWrapperStyled>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  margin: ${({ margin }) => (margin ? margin : '')};

  font-family: inherit;
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);

  color: var(--white-color);
  box-shadow: ${({ shadow }) =>
    shadow ? 'inset 0px 25px 0px rgba(255, 255, 255, 0.1)' : ''};
  background: ${({ background }) => {
    if (background === 'green') {
      return 'var(--green-gradient)';
    } else if (background === 'blue') {
      return 'var(--blue-gradient)';
    }
  }};

  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '')};
  border: 3px solid #fae355;

  cursor: pointer;

  :hover,
  :focus {
    background: ${({ background }) => {
      if (background === 'green') {
        return 'linear-gradient(142.82deg, #AEE861 11.11%, #6DC53E 83.28%)';
      } else if (background === 'blue') {
        return 'linear-gradient(142.82deg, #A3D7FB 11.11%, #38A9EE 83.28%)';
      }
    }};
  }
`;
