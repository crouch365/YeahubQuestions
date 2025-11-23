import type {
  IQuestion,
  ParamsType,
  QuestionsApiResponse,
} from "../model/questionsType";
import { baseApi } from "@/shared/api/baseApi";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        return {
          url: "questions/public-questions",
          params: {
            skillFilterMode: "ANY",
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
