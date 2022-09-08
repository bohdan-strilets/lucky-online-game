import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';
import { IWrapperStyled, IInputStyled } from 'types/IEntryField';

export const Wrapper = styled.label<IWrapperStyled>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => (margin ? margin : '')};
`;

export const Label = styled.span`
  font-size: 15px;
  text-transform: uppercase;
  color: var(--brown-color);

  margin-bottom: 6px;
`;

export const Input = styled(Field)<IInputStyled>`
  width: ${({ width }) => (width ? width : '')};
  height: ${({ height }) => (height ? height : '')};
  padding: 0 15px;

  font-family: inherit;
  font-weight: 700;
  font-size: 19px;

  color: var(--brown-color);
  background: var(--white-transparent);
  border: 2px solid var(--brown-color);
  border-radius: 8px;
  outline: none;

  :focus {
    border: 2px solid rgba(105, 74, 4, 0.7);
  }

  ::placeholder {
    font-size: 19px;
    color: var(--brown-color);
    opacity: 0.5;
  }
`;

export const Error = styled(ErrorMessage)`
  margin-top: 5px;
  color: red;
`;
