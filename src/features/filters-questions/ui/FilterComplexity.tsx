import { useAppDispatch, useAppSelector } from "@/app/appStore";
import FilterButtons from "@/shared/filterButtons/FilterButtonts";
import { filtersSelectors } from "../model/filterSelector";
import { filterAction } from "../model/filterSlice";

const DIFFICULTY = [
  { id: 1, title: "1 - 3" },
  { id: 2, title: "4 - 6" },
  { id: 3, title: "7 - 8" },
  { id: 4, title: "9 - 10" },
];

const FilterComplexity = () => {
  const dispatch = useAppDispatch();
  const selectedComplexity = useAppSelector(
    filtersSelectors.selectFilterComplexity
  );

  const handleAddComplexity = (id: number) => {
    dispatch(filterAction.setComplexity(id));
  };
  return (
    <FilterButtons
      type={"checkbox"}
      entities={DIFFICULTY}
      selected={selectedComplexity}
      title={"Сложность"}
      onChange={handleAddComplexity}
    />
  );
};

export default FilterComplexity;
