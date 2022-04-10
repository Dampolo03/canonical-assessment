import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className="row">
        <h1>Canonical Assessment</h1>
        <h3 className="p-heading--4">Blog Posts</h3>
      </div>
    </section>
  );
};
