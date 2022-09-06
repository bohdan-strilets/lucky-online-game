import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';

import Container from 'components/Container';
import Button from 'components/Button';

import { Title, Text } from './Welcome.styled';

const Welcome: React.FC<{}> = () => {
  const { isVerified } = useAppSelector(getUser);
  const navigate = useNavigate();

  const clickHandler = () => {
    if (isVerified) {
      navigate('/profile');
    }
  };

  return (
    <Container
      type="transparent"
      width="856px"
      padding="50px"
      alignItems="center"
    >
      <Title>Welcome</Title>
      <Text>
        Your account has been successfully registered. An email has been sent to
        your email from link to confirm registration. To continue, you need
        confirm registration.
      </Text>
      <Button
        type="button"
        background="green"
        height="60px"
        width="756px"
        borderRadius="50px"
        shadow
        onClick={clickHandler}
      >
        START
      </Button>
    </Container>
  );
};

export default Welcome;
