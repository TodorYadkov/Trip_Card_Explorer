import styles from "./DetailsTrip.module.scss";
import defaultImage from "../../../assets/images/no-image.jpg";

import { Shared } from "../../../components";

/**
 * DetailsTrip
 * Renders detailed information about a specific trip.
 *
 * @param {string} tripName - The name of the trip.
 * @param {string} image - The image URL of the trip.
 * @param {string} long_description - The extended description of the trip.
 * @param {number} rating - The rating value of the trip.
 * @returns {JSX.Element} The rendered DetailsTrip component.
 */
const DetailsTrip = ({ tripName, image, long_description, rating }) => {

    // Handles image loading errors by replacing the broken image source with a default fallback image.
    const handleImageError = (e) => {
        e.currentTarget.src = defaultImage;
        e.currentTarget.srcset = "";
    };

    return (
        <article className={`col ${styles.details_card}`}>
            <header className={`col ${styles.details_card_header}`}>
                <h3 className={styles.details_card_header_name}>{tripName}</h3>
                <Shared.Rating value={rating} />
            </header>
            <div className={`row ${styles.details_card_image_wrapper}`}>
                <img
                    className={styles.details_card_image}
                    src={image}
                    alt={tripName}
                    loading="lazy"
                    decoding="async"
                    onError={handleImageError}
                />
            </div>
            <div className={`col ${styles.details_card_body}`}>
                <p className={styles.details_card_description}>{long_description}</p>
            </div>
        </article>
    );
};

export default DetailsTrip;