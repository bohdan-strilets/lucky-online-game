import { createSlice } from '@reduxjs/toolkit';

import authOperations from './authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { IAuthState } from 'types/IAuthState';

const initialState: IAuthState = {
  user: {
    _id: null,
    name: null,
    nickname: null,
    email: null,
    dateBirth: null,
    gender: null,
    bank: null,
    avatarURL: null,
    isVerified: false,
    complexity: null,
    inGame: false,
    createdAt: null,
    updatedAt: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authOperations.signup.fulfilled, (state, action) => {
      try {
        state.user = action.payload.user;
        state.token = action.payload.tokens.accessToken;
        state.isLoggedIn = true;
      } catch (error) {
        console.log(error);
      }
    });
  },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
);
