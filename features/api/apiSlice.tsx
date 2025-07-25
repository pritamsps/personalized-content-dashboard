import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const NEWS_API_BASE_URL="https://newsapi.org/v2/";
const NEWS_API_KEY=process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const apiSlice= createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl :NEWS_API_BASE_URL}),
    endpoints:(builder)=>({
        getNews: builder.query({
            query:(category: string)=>{
                const queryCategory=category||'general';
                return `top-headlines?category=${queryCategory}&apiKey=${NEWS_API_KEY}`;
            };
        });
    }),
});

export const {useGetNewsQuery}=apiSlice;