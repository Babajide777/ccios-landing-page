import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://geocode.search.hereapi.com/v1/geocode";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["map"],
  endpoints: builder => ({})
});
