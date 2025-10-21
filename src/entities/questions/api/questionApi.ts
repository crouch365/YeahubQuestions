import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.yeatwork.ru/";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getQuestions: build.query({
      query: () => "questions/public-questions",
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
