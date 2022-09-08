import { IEntryFieldState } from 'types/IEntryField';
import { Wrapper, Label, Input, Error } from './EntryField.styled';

const EntryField: React.FC<IEntryFieldState> = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
  width,
  height,
  margin,
}) => {
  return (
    <Wrapper margin={margin}>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        width={width}
        height={height}
      />
      <Error name={name} component="div" />
    </Wrapper>
  );
};

export default EntryField;
