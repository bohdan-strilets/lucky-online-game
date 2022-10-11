import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';

import { List, Item, AuthLink } from './AuthNav.styled';

const AuthNav: React.FC<{}> = () => {
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  return (
    <List>
      <Item>
        <AuthLink to="/sign-in" onClick={() => play({ id: 'counter_click' })}>
          Sign in
        </AuthLink>
      </Item>
      <Item>
        <AuthLink to="/sign-up" onClick={() => play({ id: 'counter_click' })}>
          Sign up
        </AuthLink>
      </Item>
    </List>
  );
};

export default AuthNav;
