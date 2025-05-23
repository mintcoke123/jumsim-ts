import styles from "../../css/Header.module.css";
import { TEXT } from "../Constants/messages.ts";
import { BUTTON_ICONS } from "../Constants/icons.ts";
import React from "react";
import { HeaderProps } from "../../types/types";

function Header({ setIsAddModalOpen }: HeaderProps): JSX.Element {
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnbTitle} text-title`}>{TEXT.HEADER_TITLE}</h1>
      <button
        type="button"
        className={styles.gnbButton}
        aria-label={TEXT.ADD_BUTTON_ARIA_LABEL}
        onClick={handleOpenAddModal}
      >
        <img src={BUTTON_ICONS.ADD} alt={TEXT.ADD_BUTTON_ARIA_LABEL} />
      </button>
    </header>
  );
}

export default Header;