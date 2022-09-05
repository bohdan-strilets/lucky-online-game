import api from 'api';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ISignupRes } from 'types/IAuthRessponse';
import { ISignupData } from 'types/IProfile';

const signup = createAsyncThunk<ISignupRes, ISignupData>(
  'auth/signup',
  async user => {
    try {
      const { data } = await api.post('/api/v1/auth/signup', user);
      return data;
    } catch (error: any) {
      const message = error.message;
      message
        ? toast.warning(message)
        : toast.warning('Sorry something went wrong... Please try again.');
    }
  },
);

const authOperations = {
  signup,
};

export default authOperations;
