import { IButtonState } from 'types/IButton';
import { ButtonWrapper } from './Button.styled';

const Button: React.FC<IButtonState> = ({
  children,
  type,
  width,
  height,
  margin,
  background,
  shadow,
  borderRadius,
  onClick,
  disabled,
  ...otherAttributes
}) => {
  return (
    <ButtonWrapper
      type={type}
      width={width}
      height={height}
      margin={margin}
      background={background}
      shadow={shadow}
      borderRadius={borderRadius}
      onClick={onClick}
      disabled={disabled}
      {...otherAttributes}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
