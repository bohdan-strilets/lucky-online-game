import { useAppSelector } from 'hooks/useAppSelector';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';

const useGreetings = () => {
  const [showRulles, setShowRulles] = useState(false);
  const navigate = useNavigate();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const toogle = () => {
    setShowRulles(prevstate => !prevstate);
    play({ id: 'counter_click' });
  };

  const redirectToProfile = () => {
    navigate('/profile');
    play({ id: 'counter_click' });
  };

  const redirectToSignup = () => {
    navigate('/sign-up');
    play({ id: 'counter_click' });
  };

  const redirectToSignin = () => {
    navigate('/sign-in');
    play({ id: 'counter_click' });
  };

  return {
    isLoggedIn,
    toogle,
    showRulles,
    redirectToProfile,
    redirectToSignup,
    redirectToSignin,
  };
};

export default useGreetings;
