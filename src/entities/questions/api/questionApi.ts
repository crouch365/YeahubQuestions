import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IQuestion,
  ParamsType,
  QuestionsApiResponse,
} from "../model/questionsType";
import { getQuestions } from "../model/questionsSlice";

const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_URL;

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
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(getQuestions(data.data));
        } catch (error) {
          console.error("Ошибка при загрузке вопросов:", error);
        }
      },
    }),
    getQuestionById: build.query<IQuestion, number>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;
