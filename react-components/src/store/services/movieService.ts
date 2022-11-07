import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (build) => ({
    fetchMovies: build.query({
      query: () => ({
        url: '/movies',
      }),
    }),
  }),
});
