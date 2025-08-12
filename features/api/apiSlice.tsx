import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue } from '@reduxjs/toolkit/query/react';

const NEWS_API_BASE_URL = 'https://newsapi.org/v2/';
const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

const newsApiBaseQuery = fetchBaseQuery({ baseUrl: NEWS_API_BASE_URL });
const errorGeneratorBaseQuery = fetchBaseQuery({ baseUrl: '/' });

const mockSocialBaseQuery: BaseQueryFn<string, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta> = async (
    args,
    api,
    extraOptions
  ) => {
    try {
      const url = `/${args}`;
      const response = await fetch(url);
      const data = await response.json();
      return { data };
    } catch (rawError: any) {
      const generatedErrorResponse = await errorGeneratorBaseQuery(
        { url: 'mock-error-social', method: 'GET' },
        api,
        extraOptions
      );
      const baseError = generatedErrorResponse.error as FetchBaseQueryError;
      const customError: FetchBaseQueryError = {
        status: baseError.status || 'CUSTOM_ERROR',
        data: rawError instanceof Error ? rawError.message : 'An unknown social mock fetch error occurred',
        originalStatus: baseError.originalStatus,
        statusText: baseError.statusText,
        headers: baseError.headers,
      };
      return { error: customError };
    }
  };


const customBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta> = async (
  args,
  api,
  extraOptions
) => {
  if (typeof args === 'string' && args.includes('mock_data/social_posts.json')) {
    return mockSocialBaseQuery(args, api, extraOptions);
  }
  return newsApiBaseQuery(args, api, extraOptions);
};


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (params: { category?: string; searchTerm?: string } = {}) => {
        const { category, searchTerm } = params;
        const queryCategory = category || 'general';
        const searchQuery = searchTerm ? `&q=${encodeURIComponent(searchTerm)}` : '';
        return `top-headlines?category=${queryCategory}${searchQuery}&apiKey=${NEWS_API_KEY}`;
      },
    }),
    getSocialPosts: builder.query({
        query: (params: { searchTerm?: string } = {}) => {
            const { searchTerm } = params;
            return 'mock_data/social_posts.json';
        },
    }),
  }),
});

export const { useGetNewsQuery, useGetSocialPostsQuery } = apiSlice;
