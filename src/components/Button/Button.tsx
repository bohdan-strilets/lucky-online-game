import { IButtonState } from 'types/IButton';
import { ButtonWrapper } from './Button.styled';

const Button: React.FC<IButtonState> = ({
  children,
  type,
  width,
  height,
  background,
  shadow,
  borderRadius,
  onClick,
}) => {
  return (
    <ButtonWrapper
      type={type}
      width={width}
      height={height}
      background={background}
      shadow={shadow}
      borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
