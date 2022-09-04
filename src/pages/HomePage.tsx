import Greetings from 'components/Greetings';
import BackButton from 'components/BackButton';

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Greetings />
      <BackButton />
    </>
  );
};

export default HomePage;
