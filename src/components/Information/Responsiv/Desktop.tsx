import Container from 'components/InterfaceElements/Container';
import Rules from 'components/Greetings/Rules';

const Desktop: React.FC<{}> = () => {
  return (
    <Container
      type="transparent"
      width="1050px"
      padding="70px 50px"
      margin="50px"
    >
      <h1>Rules of the game</h1>

      <Rules />
    </Container>
  );
};

export default Desktop;
