import Title from 'components/InterfaceElements/Title';
import Container from 'components/InterfaceElements/Container';
import BackButton from 'components/InterfaceElements/BackButton';

import { IPolicyState } from 'types/IPolicy';
import { Text } from '../Policy.styled';

const Mobile: React.FC<IPolicyState> = ({ title, text }) => {
  return (
    <>
      <Title type="h1">{title}</Title>

      <Container
        type="transparent"
        width="300px"
        margin="10px 0"
        padding="10px"
      >
        <BackButton margin="0 0 30px 0" />
        <Text>{text}</Text>
      </Container>
    </>
  );
};

export default Mobile;
