import styled from '@emotion/styled';
import { Field } from 'formik';

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
`;

export const Input = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CustomRadio = styled.div`
  position: relative;

  width: 20px;
  height: 20px;
  margin-right: 10px;

  background: var(--brown-transparent);
  border: 2px solid var(--brown-color);
  border-radius: 50%;
`;

export const SelectRadio = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 10px;
  height: 10px;

  background-color: var(--brown-color);
  border-radius: 50%;
`;

export const Label = styled.span`
  font-size: 19px;
`;
