import { IRadioButtonState } from 'types/IRadioButton';
import {
  Wrapper,
  Input,
  CustomRadio,
  SelectRadio,
  Label,
} from './RadioButton.styled';

const RadioButton: React.FC<IRadioButtonState> = ({
  label,
  name,
  value,
  checked,
}) => {
  return (
    <Wrapper>
      <Input type="radio" name={name} value={value} defaultChecked={checked} />
      <CustomRadio>{checked && <SelectRadio />}</CustomRadio>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default RadioButton;
