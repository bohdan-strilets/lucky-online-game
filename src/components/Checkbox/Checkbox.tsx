import IconSwitcher from 'components/IconSwitcher';
import { ICheckboxState } from 'types/ICheckbox';
import { Wrapper, Input, CustomCheckbox, Label } from './Checkbox.styled';

const Checkbox: React.FC<ICheckboxState> = ({
  label,
  name,
  value,
  required,
  checked,
}) => {
  return (
    <Wrapper>
      <Input
        type="checkbox"
        name={name}
        defaultChecked={checked}
        value={value}
        required={required}
      />
      <CustomCheckbox checked={checked}>
        {checked && (
          <IconSwitcher name="check" fill="var(--white-color)" size="16px" />
        )}
      </CustomCheckbox>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;