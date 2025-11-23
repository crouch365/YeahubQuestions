import { useAppDispatch } from "@/app/appStore";
import { filterAction } from "@/features/filters-questions";

interface PaginationPagesProps {
  currentPage: number;
  total: number;
  limit: number;
}

export const usePaginationPages = ({
  currentPage,
  total,
  limit,
}: PaginationPagesProps) => {
  const totalPages = Math.ceil(total / limit);

  const dispatch = useAppDispatch();

  //не уверен что это так можно оставить, но все работает
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(filterAction.setPage(page));
    }
  };

  if (totalPages <= 1) {
    return {
      pages: [1],
      changePage,
      currentPage,
    };
  }

  const pages: (number | string)[] = [];
  const maxVisiblePages = 5;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);
  }

  return { pages, changePage, currentPage, totalPages };
};
