import type {
  SkillsApiResponse,
  SkillsParamsType,
} from "@/entities/skills/model/skillsType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_URL;

export const specializationApi = createApi({
  reducerPath: "specializationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getSpecialization: build.query<SkillsApiResponse, SkillsParamsType>({
      query: (params) => {
        return {
          url: "specializations",
          params: {
            page: params.page ?? 1,
            limit: params.limit ?? 15,
            ...params,
          },
        };
      },
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;
