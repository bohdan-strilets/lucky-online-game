import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import { IDeleteAccountRes } from 'types/IUserRessponse';

const useProfileControllers = () => {
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteAccount = async () => {
    const res = await dispatch(operations.deleteAccount());

    if ((res.payload as IDeleteAccountRes).status === 'ok') {
      navigate('/');
    }
  };

  const switchEditProfileModal = (state: boolean) => {
    setShowEditProfileModal(state);
    play({ id: 'counter_click' });
  };

  const switchDialogModal = (state: boolean) => {
    setShowDialogModal(state);
    play({ id: 'counter_click' });
  };

  return {
    switchEditProfileModal,
    switchDialogModal,
    showDialogModal,
    showEditProfileModal,
    deleteAccount,
  };
};

export default useProfileControllers;
