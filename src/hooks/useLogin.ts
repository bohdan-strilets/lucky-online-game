import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import useSound from 'use-sound';
import { useAppSelector } from 'hooks/useAppSelector';
import { getSoundOff } from 'redux/options/optionsSelectors';

import sounds from 'sounds/sounds.mp3';
import sprite from 'sounds/sprite';
import operations from 'redux/user/userOperations';
import { toast } from 'react-toastify';

import { ISigninData } from 'types/IProfile';
import { IAuthRes } from 'types/IUserRessponse';
import signinSchema from 'helpers/validationSchemas/signinSchema';

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const soundOff = useAppSelector(getSoundOff);
  const [play] = useSound(sounds, { sprite: sprite, soundEnabled: soundOff });

  const [showModalResetPassword, setShowModalResetPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const toogleModalResetPassword = () => {
    setShowModalResetPassword(prevState => !prevState);
    play({ id: 'counter_click' });
  };

  const login = async (values: ISigninData) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    const res = await dispatch(operations.signin(user));

    (res.payload as IAuthRes).status === 'ok'
      ? navigate('/profile')
      : toast.warning('Sorry something went wrong... Please try again.');
  };

  return {
    initialValues,
    login,
    showModalResetPassword,
    signinSchema,
    toogleModalResetPassword,
    play,
  };
};

export default useLogin;
