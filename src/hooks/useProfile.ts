import { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useGetLevelInfoQuery } from 'redux/level/levelApi';

import { getUser } from 'redux/user/userSelectors';
import moment from 'moment';

import { IDeleteSessionRes } from 'types/IUserRessponse';

const useProfile = () => {
  const [showEditAvatarModal, setShowEditAvatarModal] = useState(false);
  const [showEditEmailModal, setShowEditEmailModal] = useState(false);
  const [showEditPasswordModal, setShowEditPasswordModal] = useState(false);
  const [showEditComplexityModal, setShowEditComplexityModal] = useState(false);
  const [showDeleteSessionModal, setshowDeleteSessionModal] = useState(false);

  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const { data } = useGetLevelInfoQuery();
  const age = () => {
    if (user.dateBirth) {
      return user.dateBirth?.length > 9
        ? Number.parseInt(moment(user.dateBirth).fromNow(true))
        : 0;
    }
  };

  const deleteGameSession = async () => {
    const res = await dispatch(operations.deleteSession());

    if ((res.payload as IDeleteSessionRes).status === 'ok') {
      setshowDeleteSessionModal(false);
    }
  };

  return {
    showEditAvatarModal,
    setShowEditAvatarModal,
    showEditEmailModal,
    setShowEditEmailModal,
    showEditPasswordModal,
    setShowEditPasswordModal,
    showEditComplexityModal,
    setShowEditComplexityModal,
    showDeleteSessionModal,
    setshowDeleteSessionModal,
    data,
    age,
    deleteGameSession,
    user,
  };
};

export default useProfile;
