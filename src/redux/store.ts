import { configureStore } from '@reduxjs/toolkit';
import { persisteUserReducer } from './user/userSlice';
import { levelApi } from './level/levelApi';
// import { betsApi } from './bets/betsApi';
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
    [levelApi.reducerPath]: levelApi.reducer,
    // [betsApi.reducerPath]: betsApi.reducer,
    bets: betsSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(levelApi.middleware),
  // .concat(betsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
