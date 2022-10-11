import { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useGetLevelInfoQuery } from 'redux/level/levelApi';
import useSound from 'use-sound';
import { getSoundOff } from 'redux/options/optionsSelectors';

import { getUser, getProducts } from 'redux/user/userSelectors';
import moment from 'moment';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import { IDeleteSessionRes } from 'types/IUserRessponse';

const useProfile = () => {
  const [showEditAvatarModal, setShowEditAvatarModal] = useState(false);
  const [showEditEmailModal, setShowEditEmailModal] = useState(false);
  const [showEditPasswordModal, setShowEditPasswordModal] = useState(false);
  const [showEditComplexityModal, setShowEditComplexityModal] = useState(false);
  const [showDeleteSessionModal, setshowDeleteSessionModal] = useState(false);

  const user = useAppSelector(getUser);
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();
  const { data } = useGetLevelInfoQuery();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const age = () => {
    if (user.dateBirth) {
      return user.dateBirth?.length > 9
        ? Number.parseInt(moment(user.dateBirth).fromNow(true))
        : 0;
    }
  };

  const deleteGameSession = async () => {
    const res = await dispatch(operations.deleteSession());
    play({ id: 'counter_click' });

    if ((res.payload as IDeleteSessionRes).status === 'ok') {
      setshowDeleteSessionModal(false);
    }
  };

  const switchEditAvatarModal = (state: boolean) => {
    setShowEditAvatarModal(state);
    play({ id: 'counter_click' });
  };

  const switchEditEmailModal = (state: boolean) => {
    setShowEditEmailModal(state);
    play({ id: 'counter_click' });
  };

  const switchEditPasswordModal = (state: boolean) => {
    setShowEditPasswordModal(state);
    play({ id: 'counter_click' });
  };

  const switchEditComplexityModal = (state: boolean) => {
    setShowEditComplexityModal(state);
    play({ id: 'counter_click' });
  };

  const switchDeleteSessionModal = (state: boolean) => {
    setshowDeleteSessionModal(state);
    play({ id: 'counter_click' });
  };

  return {
    showEditAvatarModal,
    switchEditAvatarModal,
    showEditEmailModal,
    switchEditEmailModal,
    showEditPasswordModal,
    switchEditPasswordModal,
    showEditComplexityModal,
    switchEditComplexityModal,
    showDeleteSessionModal,
    switchDeleteSessionModal,
    data,
    age,
    deleteGameSession,
    user,
    products,
  };
};

export default useProfile;
