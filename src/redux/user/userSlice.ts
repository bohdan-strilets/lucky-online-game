import { createSlice } from '@reduxjs/toolkit';

import operations from './userOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { IAuthState } from 'types/IUserState';

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
    level: null,
    statistics: null,
    products: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(operations.signup.fulfilled, (state, action) => {
        try {
          state.user = action.payload.user;
          state.token = action.payload.tokens.accessToken;
          state.isLoggedIn = true;
        } catch (error) {}
      })

      .addCase(operations.signin.fulfilled, (state, action) => {
        try {
          state.user = action.payload.user;
          state.token = action.payload.tokens.accessToken;
          state.isLoggedIn = true;
        } catch (error) {}
      })

      .addCase(operations.signout.fulfilled, state => {
        try {
          state.user = initialState.user;
          state.token = initialState.token;
          state.isLoggedIn = false;
        } catch (error) {}
      })

      .addCase(operations.getCurrentUser.pending, state => {
        try {
          state.isRefreshing = true;
        } catch (error) {}
      })

      .addCase(operations.getCurrentUser.rejected, state => {
        try {
          state.isRefreshing = true;
        } catch (error) {}
      })

      .addCase(operations.getCurrentUser.fulfilled, (state, action) => {
        try {
          state.user = action.payload.user;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        } catch (error) {}
      })

      .addCase(operations.changeAvatar.fulfilled, (state, action) => {
        try {
          state.user.avatarURL = action.payload.avatarURL;
        } catch (error) {}
      })

      .addCase(operations.changeAccount.fulfilled, (state, action) => {
        try {
          state.user.name = action.payload.user.name;
          state.user.nickname = action.payload.user.nickname;
          state.user.dateBirth = action.payload.user.dateBirth;
          state.user.gender = action.payload.user.gender;
        } catch (error) {}
      })

      .addCase(operations.deleteAccount.fulfilled, state => {
        try {
          state.user = initialState.user;
          state.token = initialState.token;
          state.isLoggedIn = false;
        } catch (error) {}
      })

      .addCase(operations.changeEmail.fulfilled, (state, action) => {
        try {
          state.user.email = action.payload.email;
        } catch (error) {}
      })

      .addCase(operations.changePassword.fulfilled, () => {})

      .addCase(operations.changeComplexity.fulfilled, (state, action) => {
        state.user.complexity = action.payload.complexity;
        state.user.bank = action.payload.bank;
      })

      .addCase(operations.createSession.fulfilled, (state, action) => {
        try {
          state.user.inGame = true;
          state.user.complexity = action.payload.user.complexity;
          state.user.bank = action.payload.user.bank;
        } catch (error) {}
      })

      .addCase(operations.changeBank.fulfilled, (state, action) => {
        state.user.bank = action.payload.bank;
      })

      .addCase(operations.deleteSession.fulfilled, state => {
        try {
          state.user.inGame = false;
          state.user.complexity = null;
        } catch (error) {}
      })

      .addCase(operations.sendPasswordResetEmail.fulfilled, () => {})

      .addCase(operations.resetPassword.fulfilled, () => {})

      .addCase(operations.buyItem.fulfilled, (state, action) => {
        state.user.products = action.payload.products;
        state.user.bank = action.payload.bank;
      })

      .addCase(operations.sellItem.fulfilled, (state, action) => {
        state.user.products = action.payload.products;
        state.user.bank = action.payload.bank;
      });
  },
});

export const persisteUserReducer = persistReducer(userPersistConfig, userSlice.reducer);
