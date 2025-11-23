import type {
  SkillsApiResponse,
  SkillsParamsType,
} from "@/entities/skills/model/skillsType";
import { baseApi } from "@/shared/api/baseApi";

export const specializationApi = baseApi.injectEndpoints({
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
