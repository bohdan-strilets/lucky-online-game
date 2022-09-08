import { IContainerState } from 'types/IContainer';
import { Wrapper, Point } from './Container.styled';

const Container: React.FC<IContainerState> = ({
  children,
  type,
  width,
  height,
  padding,
  margin,
  alignItems,
  top,
  bottom,
  left,
  right,
}) => {
  return (
    <Wrapper
      type={type}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      alignItems={alignItems}
    >
      {children}

      {type === 'color' && (
        <>
          <Point top="-7px" left="-5px" />
          <Point top="-7px" right="-5px" />
          <Point bottom="-7px" left="-5px" />
          <Point bottom="-7px" right="-5px" />
        </>
      )}
    </Wrapper>
  );
};

export default Container;
