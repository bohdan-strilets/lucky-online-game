import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'api';

import {
  IGetAllBetsRes,
  IGetOneBetRes,
  ICreateBetRes,
  IChangeBetRes,
} from 'types/IBetsApi';
import { RootState } from 'redux/store';

export const betsApi = createApi({
  reducerPath: 'betsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/v1/bets`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['bets'],

  endpoints: builder => ({
    getAllBets: builder.query<IGetAllBetsRes, void>({
      query: () => ({ url: '/' }),
      providesTags: ['bets'],
    }),

    getOneBets: builder.query<IGetOneBetRes, string>({
      query: betsId => ({ url: `/${betsId}` }),
      providesTags: ['bets'],
    }),

    createBet: builder.mutation<ICreateBetRes, any>({
      query: bet => ({
        url: '/',
        method: 'POST',
        body: bet,
      }),
      invalidatesTags: ['bets'],
    }),

    changeBet: builder.mutation<IChangeBetRes, any>({
      query: bet => ({
        url: `/${bet.betId}`,
        method: 'PUT',
        body: bet,
      }),
    }),
  }),
});

export const {
  useGetAllBetsQuery,
  useGetOneBetsQuery,
  useCreateBetMutation,
  useChangeBetMutation,
} = betsApi;
