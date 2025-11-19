import { useAppDispatch, useAppSelector } from "@/app/appStore";
import FilterButtons from "@/shared/filterButtons/FilterButtonts";
import { filtersSelectors } from "../model/filterSelector";
import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi";
import { filterAction } from "../model/filterSlice";

const FilterSkills = () => {
  const dispatch = useAppDispatch();
  const selectedSkills = useAppSelector(filtersSelectors.selectFilterSkills);
  const selectedSpecialization = useAppSelector(
    filtersSelectors.selectFilterSpecialization
  );

  const { data: skills } = useGetSkillsQuery({
    specializations: selectedSpecialization,
  });

  const handleToggleSkills = (id: number) => {
    dispatch(filterAction.setSkills(id));
  };

  return (
    <FilterButtons
      type={"checkbox"}
      entities={skills?.data}
      selected={selectedSkills}
      title={"Навыки"}
      onChange={handleToggleSkills}
    />
  );
};

export default FilterSkills;
