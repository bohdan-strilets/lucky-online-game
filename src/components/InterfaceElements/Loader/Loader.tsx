import { Wrapper, Spinner, Text } from './Loader.styled';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';

const Loader: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Spinner>
        <IconSwitcher name="loader" size="66px" stroke="var(--brown-color)" />
      </Spinner>
      <Text>LUCKY - online game</Text>
    </Wrapper>
  );
};

export default Loader;
