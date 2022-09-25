import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useSettingsBar = () => {
  const [fullScreen, setFullScreen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { inGame, avatarURL, name } = useAppSelector(getUser);

  const logout = () => {
    dispatch(operations.signout());
    navigate('/');
  };

  const createNewGame = () => {
    if (inGame) {
      navigate('/game');
    } else {
      navigate('/new-game');
    }
  };

  const switchFullScreen = async () => {
    const elem = document.documentElement;
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

  return {
    logout,
    createNewGame,
    switchFullScreen,
    avatarURL,
    name,
    navigate,
    fullScreen,
  };
};

export default useSettingsBar;
