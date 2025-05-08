import React from "react";
import Header from "../components/header/header";
import { HeaderContainerProps } from "../types/types";


function HeaderContainer({
  setIsAddModalOpen,
}: HeaderContainerProps): JSX.Element {
  return <Header setIsAddModalOpen={setIsAddModalOpen} />;
}

export default HeaderContainer;