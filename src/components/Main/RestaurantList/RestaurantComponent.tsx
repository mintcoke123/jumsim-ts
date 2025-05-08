import React from "react";
import styles from "../../../css/Restaurant.module.css";
import { RestaurantComponentProps } from "../../../types/types.ts";

function RestaurantComponent({
  id,
  category,
  categoryIcon,
  name,
  description,
  selectClickedRestaurant,
  setIsDetailModalOpen,
}: RestaurantComponentProps): JSX.Element {
  function handleShowClickedRestaurant() {
    selectClickedRestaurant(id);
    setIsDetailModalOpen(true);
  }

  return (
    <li className={styles.restaurant} onClick={handleShowClickedRestaurant}>
      <div className={styles.restaurantCategory}>
        <img
          src={categoryIcon}
          alt={category}
          className={styles.categoryIcon}
        />
      </div>
      <div className={styles.restaurantInfo}>
        <h3 className={`${styles.restaurantName} textSubtitle`}>{name}</h3>
        <p className={`${styles.restaurantDescription} textBody`}>
          {description}
        </p>
      </div>
    </li>
  );
}

export default RestaurantComponent;
