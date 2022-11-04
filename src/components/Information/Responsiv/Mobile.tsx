import Container from 'components/InterfaceElements/Container';
import Rules from 'components/Greetings/Rules';

const Mobile: React.FC<{}> = () => {
  return (
    <Container
      type="transparent"
      width="300px"
      padding="10px"
      margin="0 0 80px 0"
    >
      <h1>Rules of the game</h1>

      <Rules />
    </Container>
  );
};

export default Mobile;
