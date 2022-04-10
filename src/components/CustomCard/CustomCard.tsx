import React, { useState } from "react";
import { formatDate } from "../../helpers/helpers";
import { CustomModal } from "../CustomModal/CustomModal";
import styles from "./CustomCard.module.scss";

interface CardProps {
  id: string | number;
  header: string;
  imageSrc: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

export const CustomCard: React.FC<CardProps> = ({
  id,
  header,
  imageSrc,
  title,
  author,
  date,
  content,
}) => {
  const [openModal, setOpenModal] = useState<number | string>(0);

  return (
    <>
      <div className={`p-card--highlighted ${styles.card}`}>
        <div>
          <header>
            <h5 className={`col-1 p-heading--5 ${styles["card-header"]}`}>
              {header}
            </h5>
          </header>
          <div className={styles["card-body"]}>
            <img src={imageSrc} alt="blog card" />
            <h4
              className="col-1"
              onClick={() => {
                setOpenModal(id);
              }}
            >
              <p>{title}</p>
            </h4>
            <p className="col-1 p-heading--6">
              <span>by </span>
              <span>{author}</span>
              <span> on {formatDate(date)}</span>
            </p>
          </div>
          <p className="col-1">Article</p>
        </div>
      </div>
      <CustomModal
        openModal={openModal === id}
        closeModal={() => setOpenModal(0)}
        title={header}
        content={content}
      />
    </>
  );
};
