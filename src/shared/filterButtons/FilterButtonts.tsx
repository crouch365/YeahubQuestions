import { useState } from "react";
import styles from "./styles.module.css";

interface Entity {
  id: number;
  title?: string;
}

interface FilterButtonsProps<T extends Entity> {
  entities?: T[];
  selected?: number[];
  onChange: (id: number) => void;
  type: string;
  title: string;
  maxVisible?: number;
}

const FilterButtons = ({
  entities = [],
  type,
  selected = [],
  title,
  onChange,
  maxVisible = 5,
}: FilterButtonsProps<Entity>) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const VisibleEntities = showAll ? entities : entities.slice(0, maxVisible);

  const ViewAll = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <div className={styles.itemList}>
      <h3>{title}</h3>
      <div className={styles.itemBlock}>
        {VisibleEntities.map((item) => (
          <div key={item.id} className={styles.item}>
            <input
              type={type}
              id={`${item.title}-${item.id}`}
              checked={selected.includes(item.id)}
              onChange={() => onChange(item.id)}
              className={styles.input}
            />
            <label
              className={styles.label}
              htmlFor={`${item.title}-${item.id}`}
            >
              {item.title}
            </label>
          </div>
        ))}
      </div>

      {entities.length > maxVisible && (
        <button type="button" onClick={ViewAll}>
          {showAll ? "Скрыть" : "Показать все"}
        </button>
      )}
    </div>
  );
};

export default FilterButtons;
