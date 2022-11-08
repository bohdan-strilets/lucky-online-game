import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from 'api';

import { IGetAllItemsRes, IGetOneItemRes } from 'types/IStore';
import { RootState } from 'redux/store';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}api/v1/store`,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: builder => ({
    getAllItems: builder.query<IGetAllItemsRes, void>({
      query: () => ({ url: '/' }),
    }),

    getOneItem: builder.query<IGetOneItemRes, string>({
      query: itemId => ({ url: `/${itemId}` }),
    }),
  }),
});

export const { useGetAllItemsQuery, useGetOneItemQuery } = storeApi;
