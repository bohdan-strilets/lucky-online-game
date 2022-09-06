import api from 'api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IAuthRes,
  ICurrentRes,
  IChangeAvatarRes,
  IChangeAccountRes,
} from 'types/IUserRessponse';
import { ISignupData, ISigninData, IEditProfileData } from 'types/IProfile';

const signup = createAsyncThunk<IAuthRes, ISignupData>(
  'user/signup',
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
  'user/signin',
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

const signout = createAsyncThunk('user/signout', async () => {
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

const getCurrentUser = createAsyncThunk<ICurrentRes>(
  'user/get-current-user',
  async () => {
    try {
      const { data } = await api.get('/api/v1/user/get-current');
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const changeAvatar = createAsyncThunk<IChangeAvatarRes, any>(
  'user/change-avatar',
  async avatar => {
    try {
      const { data } = await api.patch('/api/v1/user/change-avatar', avatar);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const changeAccount = createAsyncThunk<IChangeAccountRes, IEditProfileData>(
  'user/change-account',
  async newData => {
    try {
      const { data } = await api.put('/api/v1/user/change-profile', newData);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const operations = {
  signup,
  signin,
  signout,
  getCurrentUser,
  changeAvatar,
  changeAccount,
};

export default operations;
