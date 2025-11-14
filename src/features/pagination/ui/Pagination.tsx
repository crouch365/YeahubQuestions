// пойми как это работает?

import { useAppDispatch, useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { filterAction } from "@/features/filters";
import { filtersSelectors } from "@/features/filters/model/filterSelector";

interface PaginationProp {
  total: number;
  limit: number;
}

const Pagination = ({ total, limit }: PaginationProp) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(filtersSelectors.selectFilterPage);
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(filterAction.setPage(page));
    }
  };

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

  return (
    <div className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.pagination__button}
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {pages.map((page, index) =>
        typeof page === "string" ? (
          <span key={index} className={styles.pagination__ellipsis}>
            {page}
          </span>
        ) : (
          <button
            key={index}
            className={`${styles.pagination__button} ${
              page === currentPage ? styles.active : ""
            }`}
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        )
      )}
      <button
        className={styles.pagination__button}
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
