import Container from 'components/InterfaceElements/Container';
import { Text } from './Title.styled';
import { ITitleState } from 'types/ITitle';

const Title: React.FC<ITitleState> = ({ children, type }) => {
  return (
    <Container
      type="color"
      width="100%"
      height="auto"
      padding="15px"
      margin="10px"
      alignItems="center"
    >
      {type === 'h1' && (
        <h1>
          <Text type={type}>{children}</Text>
        </h1>
      )}

      {type === 'h2' && (
        <h2>
          <Text type={type}>{children}</Text>
        </h2>
      )}

      {type === 'h3' && (
        <h3>
          <Text type={type}>{children}</Text>
        </h3>
      )}

      {type === 'h4' && (
        <h4>
          <Text type={type}>{children}</Text>
        </h4>
      )}
    </Container>
  );
};

export default Title;
