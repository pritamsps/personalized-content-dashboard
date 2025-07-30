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
        } catch (error: any) {
          const errorResponse = await errorGeneratorBaseQuery(
            { url: 'mock-error-social', method: 'GET' }, 
            api,
            extraOptions
          );
          const customError: FetchBaseQueryError = {
            ...errorResponse.error as FetchBaseQueryError,
            status: 'FETCH_ERROR_SOCIAL',
            data: error instanceof Error ? error.message : 'An unknown social mock fetch error occurred',
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
          query: (category: string) => {
            const queryCategory = category || 'general';
            return `top-headlines?category=${queryCategory}&apiKey=${NEWS_API_KEY}`;
          },
        }),
      
        getSocialPosts: builder.query({
            query: () => 'mock_data/social_posts.json',
        }),
      }),
    });

    export const { useGetNewsQuery, useGetSocialPostsQuery } = apiSlice;