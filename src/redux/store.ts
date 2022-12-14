import { configureStore } from '@reduxjs/toolkit';
import { persisteUserReducer } from './user/userSlice';
import { levelApi } from './level/levelApi';
import { statisticsApi } from './statistics/statisticsApi';
import betsSlice from './bets/betsSlice';
import { storeApi } from './store/storeApi';
import { persisteOptionsReducer } from './options/optionsSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    user: persisteUserReducer,
    bets: betsSlice.reducer,
    [levelApi.reducerPath]: levelApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    [storeApi.reducerPath]: storeApi.reducer,
    options: persisteOptionsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(levelApi.middleware)
      .concat(statisticsApi.middleware)
      .concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
