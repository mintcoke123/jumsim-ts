import React from "react";

export interface Restaurant {
  id: number;
  category: string;
  alt: string;
  categoryIcon: any;
  name: string;
  description: string;
}

export interface AddRestaurantModalProps {
  setIsAddModalOpen: (isOpen: boolean) => void;
  addRestaurantData: (restaurant: Restaurant) => void;
}

export interface RestaurantDetailModalProps {
  setIsDetailModalOpen: (isOpen: boolean) => void;
  selectedRestaurant?: Restaurant;
}

export interface ModalProps {
  handleCloseModal: () => void;
  children: React.ReactNode;
  modalTitle: string;
}

export interface ModalButtonProps {
  handleButtonOnClick?: () => void;
  buttonType: "button" | "submit";
  buttonText: string;
}

export interface HeaderProps {
  setIsAddModalOpen: (open: boolean) => void;
}

export interface RestaurantComponentProps {
  id: number;
  category: string;
  categoryIcon: string; 
  name: string;
  description: string;
  selectClickedRestaurant: (id: number) => void;
  setIsDetailModalOpen: (open: boolean) => void;
}

export interface RestaurantListProps {
  filteredRestaurants: Restaurant[];
  selectClickedRestaurant: (id: number) => void;
  setIsDetailModalOpen: (open: boolean) => void;
}

export interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export interface AsideContainerProps {
  isDetailModalOpen: boolean;
  setIsDetailModalOpen: (open: boolean) => void;
  selectedRestaurant?: Restaurant;
  isAddModalOpen: boolean;
  setIsAddModalOpen: (open: boolean) => void;
  addRestaurantData: (restaurant: Restaurant) => void;
}

export interface HeaderContainerProps {
  setIsAddModalOpen: (open: boolean) => void;
}

export interface MainContainerProps {
  setIsDetailModalOpen: (open: boolean) => void;
  selectClickedRestaurant: (id: number) => void;
  restaurantsData: Restaurant[];
}
