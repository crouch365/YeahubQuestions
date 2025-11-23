import { usePaginationPages } from "@/shared/hooks/usePaginationPages";
import styles from "./styles.module.css";

interface PaginationProp {
  total: number;
  limit: number;
  currentPages: number;
}

const Pagination = ({ total, limit, currentPages }: PaginationProp) => {
  const { pages, changePage, currentPage, totalPages } = usePaginationPages({
    total,
    limit,
    currentPage: currentPages,
  });

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
          <span
            key={`ellipsis-${index}`}
            className={styles.pagination__ellipsis}
          >
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
