import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import { getSoundOff } from 'redux/options/optionsSelectors';
import { switchSound } from 'redux/options/optionsSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSound from 'use-sound';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';

const useSettingsBar = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const soundOff = useAppSelector(getSoundOff);
  const { inGame, avatarURL, name } = useAppSelector(getUser);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const logout = () => {
    dispatch(operations.signout());
    navigate('/');
    play({ id: 'counter_click' });
  };

  const createNewGame = () => {
    if (inGame) {
      navigate('/game');
    } else {
      navigate('/new-game');
    }

    play({ id: 'counter_click' });
  };

  const openBetList = () => {
    navigate('/bet-list');
    play({ id: 'counter_click' });
  };

  const openProfile = () => {
    navigate('/profile');
    play({ id: 'counter_click' });
  };

  const openStatistics = () => {
    navigate('/statistics');
    play({ id: 'counter_click' });
  };

  const openStore = () => {
    navigate('/store');
    play({ id: 'counter_click' });
  };

  const openRating = () => {
    navigate('/rating');
    play({ id: 'counter_click' });
  };

  const openInformation = () => {
    navigate('/information');
    play({ id: 'counter_click' });
  };

  const switchFullScreen = async () => {
    const elem = document.documentElement;
    play({ id: 'counter_click' });

    try {
      await elem.requestFullscreen();
      setFullScreen(true);
      if (fullScreen) {
        await document.exitFullscreen();
        setFullScreen(false);
      }
    } catch (error) {
      toast.warning('Something went wrong. Try reloading the page.');
    }
  };

  const soundSwitch = () => {
    soundOff ? dispatch(switchSound(false)) : dispatch(switchSound(true));
  };

  const switcherMobileMenu = () => {
    play({ id: 'counter_click' });
    return setShowMobileMenu(prevState => !prevState);
  };

  return {
    logout,
    createNewGame,
    switchFullScreen,
    avatarURL,
    name,
    fullScreen,
    openBetList,
    openProfile,
    openStatistics,
    openStore,
    openRating,
    openInformation,
    soundSwitch,
    soundOff,
    showMobileMenu,
    switcherMobileMenu,
  };
};

export default useSettingsBar;
