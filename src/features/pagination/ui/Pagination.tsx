import { usePagination } from "@/shared/hooks/usePagination";
import styles from "./styles.module.css";

interface PaginationProp {
  total: number;
  limit: number;
}

const Pagination = ({ total, limit }: PaginationProp) => {
  const { currentPage, changePage } = usePagination();
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

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
