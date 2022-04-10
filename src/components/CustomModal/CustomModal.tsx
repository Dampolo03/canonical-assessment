import styles from "./CustomModal.module.scss";

interface CustomModalProps {
  openModal: boolean;
  closeModal: () => void;
  title: string;
  content: string;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  openModal,
  closeModal,
  title,
  content,
}) => {
  return (
    <div className={styles["custom-modal"]}>
      {openModal && (
        <div className="p-modal" onClick={closeModal}>
          <section
            className="p-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="custom-modal"
            aria-describedby="custom-modal"
            onClick={(e: any) => e.stopPropagation()}
          >
            <header className="p-modal__header">
              <h2 className="p-modal__title" id="eThvjcNw35Dgmha2TOcA-">
                {title}
              </h2>
              <button
                className="p-modal__close"
                aria-label="Close active modal"
                onClick={closeModal}
              >
                Close
              </button>
            </header>
            <div>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
