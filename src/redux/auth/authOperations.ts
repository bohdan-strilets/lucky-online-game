import api from 'api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthRes } from 'types/IAuthRessponse';
import { ISignupData, ISigninData } from 'types/IProfile';

const signup = createAsyncThunk<IAuthRes, ISignupData>(
  'auth/signup',
  async user => {
    try {
      const { data } = await api.post('/api/v1/auth/signup', user);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;

      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const signin = createAsyncThunk<IAuthRes, ISigninData>(
  'auth/signin',
  async user => {
    try {
      const { data } = await api.post('/api/v1/auth/signin', user);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const signout = createAsyncThunk('auth/signout', async () => {
  try {
    const { data } = await api.get('/api/v1/auth/signout');
    return data;
  } catch (error: any) {
    const message = error.response.data.message;
    message
      ? toast.warning(message)
      : toast.warning('Sorry something went wrong... Please try again.');
  }
});

const authOperations = {
  signup,
  signin,
  signout,
};

export default authOperations;
