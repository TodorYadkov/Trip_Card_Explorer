import styles from "./Rating.module.scss";

/**
 * Rating component
 * Displays a row of 1-5 stars based on the `value` prop, highlighting the number of stars corresponding to the rating.
 * @param {number} value - The rating value (default 0).
 * @returns {JSX.Element} The rendered Rating component.
 */
const Rating = ({ value = 0 }) => {
    const defaultStars = [1, 2, 3, 4, 5];

    return (
        <div className={styles.rating}>
            {defaultStars.map((star) => (
                <svg
                    key={star}
                    viewBox="0 0 24 24"
                    fill={star <= value ? "#ffd738" : "none"}
                    stroke="#ffd738"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                </svg>
            ))}
        </div>
    );
};

export default Rating;