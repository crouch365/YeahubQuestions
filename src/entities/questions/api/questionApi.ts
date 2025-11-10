import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IQuestion,
  ParamsType,
  QuestionsApiResponse,
} from "../model/questionsType";

export const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_URL;

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        return {
          url: "questions/public-questions",
          params: {
            ...params,
          },
        };
      },
    }),
    getQuestionById: build.query<IQuestion, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;
