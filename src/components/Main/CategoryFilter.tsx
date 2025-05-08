import React from "react";
import styles from "../../css/Category.module.css";
import { RESTAURANT_CATEGORY_FILTER } from "../Constants/category.ts";
import { TEXT } from "../Constants/messages.ts";
import { CategoryFilterProps } from "../../types/types";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps): JSX.Element {
  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className={styles.restaurantFilterContainer}>
      <select
        name="category"
        id="category-filter"
        className={styles.restaurantFilter}
        aria-label={TEXT.CATEGORY_FILTER_ARIA_LABEL}
        value={selectedCategory}
        onChange={handleChangeCategory}
      >
        {RESTAURANT_CATEGORY_FILTER.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
}

export default CategoryFilter;