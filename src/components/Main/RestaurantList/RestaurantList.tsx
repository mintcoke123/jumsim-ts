
import React from "react";
import styles from "../../../css/Restaurant.module.css";
import RestaurantComponent from "./RestaurantComponent";
import { RestaurantListProps } from "../../../types/types.ts";

function RestaurantList({
  filteredRestaurants,
  selectClickedRestaurant,
  setIsDetailModalOpen,
}: RestaurantListProps): JSX.Element {
  return (
    <ul className={styles.restaurantList}>
      {filteredRestaurants?.map(
        ({ id, category, categoryIcon, name, description }) => (
          <RestaurantComponent
            key={id}
            id={id}
            category={category}
            categoryIcon={categoryIcon}
            name={name}
            description={description}
            setIsDetailModalOpen={setIsDetailModalOpen}
            selectClickedRestaurant={selectClickedRestaurant}
          />
        )
      )}
    </ul>
  );
}

export default RestaurantList;
