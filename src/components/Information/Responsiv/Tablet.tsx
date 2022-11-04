import Container from 'components/InterfaceElements/Container';
import Rules from 'components/Greetings/Rules';

const Tablet: React.FC<{}> = () => {
  return (
    <Container
      type="transparent"
      width="680px"
      padding="40px 10px 10px 10px"
      margin="50px 0 80px 0"
    >
      <h1>Rules of the game</h1>

      <Rules />
    </Container>
  );
};

export default Tablet;
