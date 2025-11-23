import { useAppDispatch } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useEffect, useState } from "react";
import { filterAction } from "../model/filterSlice";

const SearchKeywords = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const inputValue = useDebounce(search, 1000);

  useEffect(() => {
    dispatch(filterAction.setKeywords(inputValue));
  }, [inputValue, dispatch]);
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Введите запрос . . . "
    />
  );
};

export default SearchKeywords;
