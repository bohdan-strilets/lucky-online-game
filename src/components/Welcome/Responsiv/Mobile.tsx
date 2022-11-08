import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import useSound from 'use-sound';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';

import { Title, Text } from '../Welcome.styled';

const Mobile: React.FC<{}> = () => {
  const { isVerified } = useAppSelector(getUser);
  const navigate = useNavigate();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const clickHandler = () => {
    play({ id: 'counter_click' });
    if (isVerified) {
      navigate('/profile');
    }
  };

  return (
    <Container
      type="transparent"
      alignItems="center"
      width="300px"
      padding="50px"
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
        width="250px"
        borderRadius="50px"
        shadow
        onClick={clickHandler}
      >
        START
      </Button>
    </Container>
  );
};

export default Mobile;
