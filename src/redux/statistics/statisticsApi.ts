import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'api';

import { IStatisticsRes } from 'types/IStatistics';
import { RootState } from 'redux/store';

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}api/v1/statistics`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: builder => ({
    getStatistics: builder.query<IStatisticsRes, void>({
      query: () => ({ url: '/' }),
    }),
  }),
});

export const { useGetStatisticsQuery } = statisticsApi;
