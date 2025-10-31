import styles from "./CardTrip.module.scss";
import defaultImage from "../../../assets/images/no-image.jpg";

import { useDispatch } from "react-redux";

import { Buttons, Shared, Trip } from "../../../components";
import { setModal } from "../../../store";

/**
 * TripCard Component
 * Displays a trip card.
 *
 * @param {string} tripName - Trip name.
 * @param {string} image - Image URL for the trip.
 * @param {string} description - Short description of the trip.
 * @param {number} long_description - Long description of the trip.
 * @param {number} rating - Trip rating.
 */
const CardTrip = ({ tripName, image, description, long_description, rating, }) => {
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(setModal({
            isOpenModal: true,
            title: "Details",
            btnText: "Close",
            backdrop: true,
            content: <Trip.DetailsTrip
                tripName={tripName}
                image={image}
                long_description={long_description}
                rating={rating}
            />,
        }));
    };

    // Handles image loading errors by replacing the broken image source with a default fallback image.
    const handleImageError = (e) => {
        e.currentTarget.src = defaultImage;
        e.currentTarget.srcset = "";
    };

    return (
        <article className={`col ${styles.trip_card}`}>
            <div className={`row ${styles.trip_card_image_wrapper}`}>
                <img
                    className={styles.trip_card_image}
                    src={image}
                    alt={tripName}
                    loading="lazy"
                    decoding="async"
                    srcSet={`${image}?w=400, ${image}?w=800`}
                    onError={handleImageError}
                />
            </div>
            <div className={`col ${styles.trip_card_body}`}>
                <h3 className={styles.trip_card_name}>{tripName}</h3>
                <p className={styles.trip_card_description}>{description}</p>
                <Shared.Rating value={rating} />
                <Buttons.Button
                    text={"More Info"}
                    onClick={handleOpenModal}
                />
            </div>
        </article>
    );
};

export default CardTrip;