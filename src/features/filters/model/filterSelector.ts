import type { RootState } from "@/app/appStore";
import type { GetQuestionsParams } from "@/entities/questions/model/questionsType";
import { cleanParams } from "@/shared/filter/cleanParams";
import { createSelector } from "@reduxjs/toolkit";

const selectFilterState = (state: RootState) => state.filterForQuestions;

export const selectQuestionFilterParams = createSelector(
  selectFilterState,
  (filters): GetQuestionsParams => {
    const raw: GetQuestionsParams = {
      page: filters.page,
      limit: filters.limit,
      keywords: filters.keywords
        ? filters.keywords.trim().split(/\s+/).filter(Boolean)
        : [],
      specialization: filters.specializationId ?? undefined,
      rate: filters.rateIds,
      skills: filters.skillsIds,
      complexity: filters.complexityIds,
    };
    return cleanParams(raw);
  }
);

const selectFilterPage = (state: RootState) => state.filterForQuestions.page;

const selectFilterLimit = (state: RootState) => state.filterForQuestions.limit;

const selectFilterKeywords = (state: RootState) =>
  state.filterForQuestions.keywords;

const selectFilterSpecialization = (state: RootState) =>
  state.filterForQuestions.specializationId;

const selectFilterSkills = (state: RootState) =>
  state.filterForQuestions.skillsIds;

const selectSkillSpecializations = createSelector(
  [selectQuestionFilterParams],
  (filters) => (filters.specialization ? [filters.specialization] : [])
);

const selectFilterComplexity = (state: RootState) =>
  state.filterForQuestions.complexityIds;

const selectFilterRate = (state: RootState) => state.filterForQuestions.rateIds;

export const filtersSelectors = {
  selectQuestionFilterParams,
  selectFilterPage,
  selectFilterLimit,
  selectFilterKeywords,
  selectFilterSpecialization,
  selectSkillSpecializations,
  selectFilterRate,
  selectFilterSkills,
  selectFilterComplexity,
};
