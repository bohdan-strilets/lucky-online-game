import Title from 'components/Title';
import Container from 'components/Container';
import BackButton from 'components/BackButton';

import { IPolicyState } from 'types/IPolicy';
import { Text } from './Policy.styled';

const Policy: React.FC<IPolicyState> = ({ title, text }) => {
  return (
    <>
      <Title type="h1">{title}</Title>

      <Container
        type="transparent"
        width="856px"
        padding="50px"
        margin="50px 0"
      >
        <BackButton margin="0 0 30px 0" />
        <Text>{text}</Text>
      </Container>
    </>
  );
};

export default Policy;
