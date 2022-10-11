import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { IOptions } from 'types/IOptions';

const optionsPersistConfig = {
  key: 'options',
  storage,
  whitelist: ['soundOff'],
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState: { soundOff: false } as IOptions,

  reducers: {
    switchSound(state, action: PayloadAction<boolean>) {
      state.soundOff = action.payload;
    },
  },
});

export const { switchSound } = optionsSlice.actions;
export const persisteOptionsReducer = persistReducer(
  optionsPersistConfig,
  optionsSlice.reducer,
);
