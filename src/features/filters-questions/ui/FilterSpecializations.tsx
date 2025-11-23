import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useGetSpecializationQuery } from "@/entities/specialization/api/specializationApi";
import FilterButtons from "@/shared/filterButtons/FilterButtonts";
import { filtersSelectors } from "../model/filterSelector";
import { filterAction } from "../model/filterSlice";

const FilterSpecializations = () => {
  const dispatch = useAppDispatch();

  const { data: specializations } = useGetSpecializationQuery({});
  const selectedSpecialization = useAppSelector(
    filtersSelectors.selectFilterSpecialization
  );

  const handleToggleSpec = (id: number) => {
    dispatch(filterAction.setSpecialization(id));
  };
  return (
    <FilterButtons
      title={"Категории вопросов"}
      type={"radio"}
      selected={
        selectedSpecialization !== undefined ? [selectedSpecialization] : []
      }
      entities={specializations?.data}
      onChange={handleToggleSpec}
    />
  );
};

export default FilterSpecializations;
