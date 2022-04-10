import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <section className={`p-strip ${styles.loader}`}>
      <span
        className="u-align--center p-text--default"
        role="alert"
        aria-live="polite"
      >
        <i className="p-icon--spinner u-animation--spin" />
        <span>Loading...</span>
      </span>
    </section>
  );
};
