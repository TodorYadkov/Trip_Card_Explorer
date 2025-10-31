import styles from "./Loader.module.scss";

// Based on https://css-loaders.com/nature/, with minor adjustments.

/**
 * Loader Component
 * A simple reusable loading indicator used to show that content is being fetched.
 * @returns {JSX.Element} A styled loader element.
 */
const Loader = () => {
  return (
    <div className={styles.loader} />
  );
};

export default Loader;
