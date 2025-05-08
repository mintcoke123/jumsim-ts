import { useState } from "react";
import RestaurantList from "../components/Main/RestaurantList/RestaurantList";
import CategoryFilter from "../components/Main/CategoryFilter";
import React from "react";
import { MainContainerProps } from "../types/types.ts";


function MainContainer({
  setIsDetailModalOpen,
  selectClickedRestaurant,
  restaurantsData,
}: MainContainerProps): JSX.Element {

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredRestaurants =
    selectedCategory === "" || selectedCategory === "전체"
      ? restaurantsData
      : restaurantsData.filter(
          (restaurant) => restaurant.category === selectedCategory
        );

  return (
    <main>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RestaurantList
        setIsDetailModalOpen={setIsDetailModalOpen}
        filteredRestaurants={filteredRestaurants}
        selectClickedRestaurant={selectClickedRestaurant}
      />
    </main>
  );
}

export default MainContainer;