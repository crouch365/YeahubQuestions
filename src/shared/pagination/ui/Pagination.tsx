import styles from "./styles.module.css";
import { usePaginationPages } from "@/shared/hooks/usePaginationPages";

interface PaginationProp {
  total: number;
  limit: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({
  total,
  limit,
  currentPage,
  onChangePage,
}: PaginationProp) => {
  const { pages, totalPages } = usePaginationPages({
    total,
    limit,
    currentPage,
  });

  const handleChange = (page: number) => {
    if (page >= 1 && page <= totalPages) onChangePage(page);
  };

  return (
    <div className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.pagination__button}
        onClick={() => handleChange(currentPage - 1)}
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
            key={`page-${page}`}
            className={`${styles.pagination__button} ${
              page === currentPage ? styles.active : ""
            }`}
            onClick={() => handleChange(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles.pagination__button}
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
