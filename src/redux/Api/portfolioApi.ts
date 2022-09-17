import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardItem } from '../../@types/cardTypes';

export const htmlSiteApi = createApi({
  reducerPath: 'htmlSiteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6324755e5c1b435727a8ec79.mockapi.io/' }),
  endpoints: (builder) => ({
    getHtmlSites: builder.query<CardItem[], string>({
      query: (language) => `htmlSites${language}`,
    })
  })
})

export const appsApi = createApi({
  reducerPath: 'appsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6324755e5c1b435727a8ec79.mockapi.io/' }),
  endpoints: (builder) => ({
    getApps: builder.query<CardItem[], string>({
      query: (language) => `apps${language}`,
    })
  })
})

export const { useGetHtmlSitesQuery } = htmlSiteApi;
export const { useGetAppsQuery } = appsApi;