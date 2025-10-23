import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ParamsType, QuestionsApiResponse } from "../model/questionsType";

const BASE_URL = "https://api.yeatwork.ru/";

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { page = 1, limit = 10 } = params || {};
        return {
          url: "questions/public-questions",
          params: {
            page,
            limit,
          },
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApi;
