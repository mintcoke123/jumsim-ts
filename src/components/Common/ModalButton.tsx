import React from "react";
import styles from "../../css/Modal.module.css";
import { ModalButtonProps } from "../../types/types";

function ModalButton({
  handleButtonOnClick,
  buttonType,
  buttonText,
}: ModalButtonProps): JSX.Element {
  return (
    <div className={styles.buttonContainer}>
      <button
        type={buttonType}
        onClick={handleButtonOnClick}
        className={`${styles.button} ${styles.buttonPrimary} text-caption`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ModalButton;
