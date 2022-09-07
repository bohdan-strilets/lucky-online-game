import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'api';

import {
  ILevelRes,
  IChangeLevelRes,
  IChangeExperienceRes,
  IChangeRankRes,
} from 'types/ILevel';
import { RootState } from 'redux/store';

export const levelApi = createApi({
  reducerPath: 'levelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/v1/level`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['level'],

  endpoints: builder => ({
    getLevelInfo: builder.query<ILevelRes, void>({
      query: () => ({ url: '/' }),
      providesTags: ['level'],
    }),

    changeLevel: builder.mutation<IChangeLevelRes, void>({
      query: () => ({
        url: '/change-level',
        method: 'PATCH',
      }),
      invalidatesTags: ['level'],
    }),

    changeExperience: builder.mutation<
      IChangeExperienceRes,
      { experience: number }
    >({
      query: experience => ({
        url: '/change-experience',
        method: 'PATCH',
        body: experience,
      }),
      invalidatesTags: ['level'],
    }),

    changeRank: builder.mutation<IChangeRankRes, { rank: string }>({
      query: rank => ({
        url: '/change-rank',
        method: 'PATCH',
        body: rank,
      }),
      invalidatesTags: ['level'],
    }),
  }),
});

export const {
  useGetLevelInfoQuery,
  useChangeLevelMutation,
  useChangeExperienceMutation,
  useChangeRankMutation,
} = levelApi;
