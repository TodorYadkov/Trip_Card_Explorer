import styles from "./Dashboard.module.scss";

import { useSelector } from "react-redux";

import { Trip } from "../../components";

/**
 * Dashboard
 * Displays a list of trips when are available, using Redux for state management.
 * @returns {JSX.Element} The rendered Dashboard component.
 */
const Dashboard = () => {
    const { data } = useSelector(({ dataState }) => dataState);
    const { isLoading } = useSelector(({ globalState }) => globalState);

    return (
        <section className={`row container_max_width ${styles.dashboard_container}`}>

            {(!isLoading && data.length === 0) && (
                <p className={styles.dashboard_content_empty}>
                    No trips available at the moment.
                </p>
            )}

            {(!isLoading && data.length > 0) && data.map(
                ({ id, image, description, long_description, rating, name: tripName }) => (
                    <Trip.CardTrip
                        key={id}
                        tripName={tripName}
                        image={image}
                        description={description}
                        long_description={long_description}
                        rating={rating}
                    />
                )
            )}
        </section>
    );
};

export default Dashboard;