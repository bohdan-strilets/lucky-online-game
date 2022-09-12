import { RootState } from 'redux/store';

export const getUser = (state: RootState) => state.user.user;

export const getBank = (state: RootState) => state.user.user.bank;

export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const getIsRefreshing = (state: RootState) => state.user.isRefreshing;

export const getToken = (state: RootState) => state.user.token;
