import { useAppSelector } from "@/app/appStore";
import { setCurrentPage } from "@/features/pagination/model/paginationSlice";
import { useDispatch } from "react-redux";

export const usePagination = () => {
  const dispatch = useDispatch();
  const currentPage = useAppSelector((state) => state.pagination.currentPage);

  const changePage = (page: number) => {
    if (page > 0) {
      dispatch(setCurrentPage(page));
    }
  };

  return { currentPage, changePage };
};
