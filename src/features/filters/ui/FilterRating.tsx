import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { filtersSelectors } from "../model/filterSelector";
import { filterAction } from "../model/filterSlice";
import FilterButtons from "@/shared/filterButtons/FilterButtonts";

const RATING = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
  { id: 4, title: "4" },
  { id: 5, title: "5" },
];

const FilterRating = () => {
  const dispatch = useAppDispatch();
  const selectedRate = useAppSelector(filtersSelectors.selectFilterRate);

  const handleAddRate = (id: number) => {
    dispatch(filterAction.setRating(id));
  };
  return (
    <FilterButtons
      type={"checkbox"}
      entities={RATING}
      selected={selectedRate}
      title={"Рейтинг"}
      onChange={handleAddRate}
    />
  );
};

export default FilterRating;
