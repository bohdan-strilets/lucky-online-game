import { configureStore } from '@reduxjs/toolkit';
import { persisteUserReducer } from './user/userSlice';
import { levelApi } from './level/levelApi';
import { statisticsApi } from './statistics/statisticsApi';
import betsSlice from './bets/betsSlice';

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
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(levelApi.middleware)
      .concat(statisticsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
