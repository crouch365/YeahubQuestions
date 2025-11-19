export interface ISkills {
  id: number;
  title: string;
  description: string;
  imageSrc?: string | null;
  createdAt: string;
}

export interface SkillsApiResponse {
  data: ISkills[];
  total: number;
  page: number;
  limit: number;
}

export interface SkillsParamsType {
  page?: number;
  limit?: number;
  specializations?: number;
}
