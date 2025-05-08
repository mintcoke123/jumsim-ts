import { useState } from "react";
import styles from "../../css/Modal.module.css";
import { TEXT } from "../Constants/messages.ts";
import { ADD_RESTAURANT_CATEGORY_FILTER } from "../Constants/category.ts";
import { CATEGORY_ICONS } from "../Constants/icons.ts";
import Modal from "../Common/Modal";
import ModalButton from "../Common/ModalButton";
import { Restaurant, AddRestaurantModalProps } from "../../types/types.ts"
import React from "react";

function AddRestaurantModal({
  setIsAddModalOpen,
  addRestaurantData,
}: AddRestaurantModalProps): JSX.Element {
  const [category, setCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleCloseModal(): void {
    setIsAddModalOpen(false);
  }

  const handleSubmitRestaurantData = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const newRestaurant: Restaurant = {
      id: Date.now(),
      category,
      name,
      description,
      alt: category,
      categoryIcon: CATEGORY_ICONS[category],
    };

    addRestaurantData(newRestaurant);
    setIsAddModalOpen(false);
  };

  return (
    <Modal
      handleCloseModal={handleCloseModal}
      modalTitle={TEXT.MODAL_ADD_TITLE}
    >
      <form onSubmit={handleSubmitRestaurantData}>
        {/* 카테고리 */}
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="category" className="text-caption">
            {TEXT.MODAL_CATEGORY_TEXT}
          </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">{TEXT.MODAL_CATEGORY_PLACEHOLDER}</option>
            {ADD_RESTAURANT_CATEGORY_FILTER.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* 이름 */}
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="name" className="text-caption">
            {TEXT.NAME_LABEL}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* 설명 */}
        <div className={styles.formItem}>
          <label htmlFor="description" className="text-caption">
            {TEXT.DESCRIPTION_LABEL}
          </label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span className={`${styles.helpText} text-caption`}>
            {TEXT.MODAL_DESCRIPTION_FOOTER}
          </span>
        </div>

        {/* 추가 버튼 */}
        <ModalButton
          buttonType="submit"
          buttonText={TEXT.MODAL_ADD_BUTTON_TEXT}
        />
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
