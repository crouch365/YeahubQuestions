export interface IQuestion {
  id: number;
  title: string;
  description: string;
  code?: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionsApiResponse {
  data: IQuestion[];
  total: number;
  status: string;
}

export interface IFilters {
  page: number;
  limit: number;
  specializationId?: number[];
}

export type ParamsType = Partial<IFilters>;
