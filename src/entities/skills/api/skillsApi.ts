import type { SkillsParamsType, SkillsApiResponse } from "../model/skillsType";
import { baseApi } from "@/shared/api/baseApi";

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<SkillsApiResponse, SkillsParamsType>({
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
  }),
});

export const { useGetSkillsQuery } = skillsApi;
