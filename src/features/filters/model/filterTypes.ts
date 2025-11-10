export const INITIAL_STATE_FOR_FILTER_QUESTIONS = {
  page: 1,
  limit: 10,
  keywords: "",
  specializationId: 11,
  rateIds: [] as number[],
  skillsIds: [] as number[],
  complexityIds: [] as number[],
} as const;
