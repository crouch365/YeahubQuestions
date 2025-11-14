import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_URL;

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getSkills: build.query({
      query: (params) => {
        return {
          url: "skills",
          params: {
            page: params.page ?? 1,
            limit: params.limit ?? 20,
            ...params,
          },
        };
      },
    }),
    // getSkillById: build.query({
    //   query: (id) => `skills/${id}`,
    // }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
