import { useState } from "react";
import HeaderContainer from "../containers/HeaderContainer";
import MainContainer from "../containers/MainContainer";
import AsideContainer from "../containers/AsideContainer";
import { RESTAURANTS_DATA } from "../components/Constants/restaurantData.ts";
import React from "react";
import {Restaurant} from "../types/types.ts"

function RestaurantListPage(): JSX.Element {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | undefined>();
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>(RESTAURANTS_DATA);

  function selectClickedRestaurant(id: number) {
    const clickedRestaurant = restaurantsData.find(
      (restaurant) => restaurant.id === id
    );
    setSelectedRestaurant(clickedRestaurant);
  }

  function addRestaurantData(newRestaurant: Restaurant) {
    setRestaurantsData([...restaurantsData, newRestaurant]);
  }

  return (
    <>
      <HeaderContainer setIsAddModalOpen={setIsAddModalOpen} />
      <MainContainer
        setIsDetailModalOpen={setIsDetailModalOpen}
        selectClickedRestaurant={selectClickedRestaurant}
        restaurantsData={restaurantsData}
      />
      <AsideContainer
        isDetailModalOpen={isDetailModalOpen}
        setIsDetailModalOpen={setIsDetailModalOpen}
        selectedRestaurant={selectedRestaurant}
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        addRestaurantData={addRestaurantData}
      />
    </>
  );
}

export default RestaurantListPage;
