import Container from 'components/InterfaceElements/Container';
import Frame from './Frame';

const StatusBar: React.FC<{}> = () => {
  return (
    <Container type="transparent" width="280px" height="100vh" padding="20px">
      <Frame />
    </Container>
  );
};

export default StatusBar;
