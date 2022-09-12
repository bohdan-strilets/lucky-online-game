import Container from 'components/InterfaceElements/Container';
import personage from 'images/success/success.png';

import { ISuccessState } from 'types/ISuccess';
import { Wrapper, Image, Message } from './Success.styled';

const Success: React.FC<ISuccessState> = ({ experience, money }) => {
  return (
    <Wrapper>
      <Image src={personage} alt="Character boy and girl." />
      <Message>
        <Container type="transparent" width="auto" padding="15px">
          <p>Great job, you managed to earn some money and experience.</p>
          <br />
          <p>- Experience: {`${experience}XP`}</p>
          <p>- Money: ${`${money}$`}</p>
          <br />
          <p>Continue in the same spirit.</p>
        </Container>
      </Message>
    </Wrapper>
  );
};

export default Success;
