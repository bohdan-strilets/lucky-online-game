import styled from '@emotion/styled';
import { ICustomCheckboxStyled } from 'types/ICheckbox';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
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

export const CustomCheckbox = styled.div<ICustomCheckboxStyled>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  background: ${({ checked }) => (checked ? 'var(--brown-color)' : '')};
  border: 2px solid var(--brown-color);
  border-radius: 8px;
`;

export const Label = styled.span`
  font-size: 19px;
  margin-left: 10px;
`;
