import RestaurantDetailModal from "../components/Asides/RestaurantDetailModal";
import AddRestaurantModal from "../components/Asides/AddRestaurantModal";
import React from "react";
import { AsideContainerProps } from "../types/types";

function AsideContainer({
  isDetailModalOpen,
  setIsDetailModalOpen,
  selectedRestaurant,
  isAddModalOpen,
  setIsAddModalOpen,
  addRestaurantData,
}: AsideContainerProps): JSX.Element {
  return (
    <aside>
      {isDetailModalOpen && (
        <RestaurantDetailModal
          setIsDetailModalOpen={setIsDetailModalOpen}
          selectedRestaurant={selectedRestaurant}
        />
      )}
      {isAddModalOpen && (
        <AddRestaurantModal
          setIsAddModalOpen={setIsAddModalOpen}
          addRestaurantData={addRestaurantData}
        />
      )}
    </aside>
  );
}

export default AsideContainer;