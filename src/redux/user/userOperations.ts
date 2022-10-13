import api from 'api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  IAuthRes,
  ICurrentRes,
  IChangeAvatarRes,
  IChangeAccountRes,
  IDeleteAccountRes,
  IChangeEmailRes,
  IChangePasswordRes,
  IChangeComplexityRes,
  ICreateSessionRes,
  IChangeBankRes,
  IDeleteSessionRes,
  IResetPasswordRes,
  IBuyItemRes,
} from 'types/IUserRessponse';
import {
  ISignupData,
  ISigninData,
  IEditProfileData,
  IEditEmailData,
  IEditPasswordData,
  IEditComplexityData,
  IEditBankData,
  IResetPasswordData,
  IBuyItemData,
  ISellItemData,
} from 'types/IProfile';

const signup = createAsyncThunk<IAuthRes, ISignupData>(
  'user/signup',
  async user => {
    try {
      const { data } = await api.post('api/v1/auth/signup', user);
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
      const { data } = await api.post('api/v1/auth/signin', user);
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
    const { data } = await api.get('api/v1/auth/signout');
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
      const { data } = await api.get('api/v1/user/get-current');
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
      const { data } = await api.patch('api/v1/user/change-avatar', avatar);
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
      const { data } = await api.patch('api/v1/user/change-profile', newData);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const deleteAccount = createAsyncThunk<IDeleteAccountRes>(
  'user/delete-account',
  async () => {
    try {
      const { data } = await api.delete('api/v1/user/delete-account');
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const changeEmail = createAsyncThunk<IChangeEmailRes, IEditEmailData>(
  'user/change-email',
  async email => {
    try {
      const { data } = await api.patch('api/v1/user/change-email', email);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const changePassword = createAsyncThunk<IChangePasswordRes, IEditPasswordData>(
  'user/change-password',
  async password => {
    try {
      const { data } = await api.patch('api/v1/user/change-password', password);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const changeComplexity = createAsyncThunk<
  IChangeComplexityRes,
  IEditComplexityData
>('user/change-complexity', async complexity => {
  try {
    const { data } = await api.patch(
      'api/v1/user/change-complexity',
      complexity,
    );
    return data;
  } catch (error: any) {
    const message = error.response.data.message;
    message
      ? toast.warning(message)
      : toast.warning('Sorry something went wrong... Please try again.');
  }
});

const createSession = createAsyncThunk<ICreateSessionRes, IEditComplexityData>(
  'user/create-session',
  async gameData => {
    try {
      const { data } = await api.patch('api/v1/user/new-session', gameData);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const changeBank = createAsyncThunk<IChangeBankRes, IEditBankData>(
  'user/change-bank',
  async bank => {
    try {
      const { data } = await api.patch('api/v1/user/change-bank', bank);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const deleteSession = createAsyncThunk<IDeleteSessionRes>(
  'user/delete-session',
  async () => {
    try {
      const { data } = await api.delete('api/v1/user/delete-session');
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const sendPasswordResetEmail = createAsyncThunk<
  IResetPasswordRes,
  IEditEmailData
>('user/send-password-reset-email', async email => {
  try {
    const { data } = await api.post('api/v1/user/send-password-email', email);
    return data;
  } catch (error: any) {
    const message = error.response.data.message;
    message
      ? toast.warning(message)
      : toast.warning('Sorry something went wrong... Please try again.');
  }
});

const resetPassword = createAsyncThunk<IResetPasswordRes, IResetPasswordData>(
  'user/reset-password',
  async resetPassword => {
    try {
      const { data } = await api.post(
        'api/v1/user/reset-password',
        resetPassword,
      );
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const buyItem = createAsyncThunk<IBuyItemRes, IBuyItemData>(
  'user/buy-item',
  async buyData => {
    try {
      const { data } = await api.post('api/v1/user/buy-item', buyData);
      return data;
    } catch (error: any) {
      const message = error.response.data.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const sellItem = createAsyncThunk<IBuyItemRes, ISellItemData>(
  'user/sell-item',
  async sellData => {
    try {
      const { data } = await api.put('api/v1/user/sell-item', sellData);
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
  deleteAccount,
  changeEmail,
  changePassword,
  changeComplexity,
  createSession,
  changeBank,
  deleteSession,
  sendPasswordResetEmail,
  resetPassword,
  buyItem,
  sellItem,
};

export default operations;
