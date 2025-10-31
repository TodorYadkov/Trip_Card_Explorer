import styles from "./AppLayout.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setData } from "../../../store";
import { useFetcher } from "../../../hooks";

import { Shared } from "../../../components";

/**
 * AppLayout Component
 * Component responsible for rendering the application layout.
 * @returns {JSX.Element} Rendered Layout component.
 */
const AppLayout = () => {
    const dispatch = useDispatch();
    const { isLoading, modalProps } = useSelector(({ globalState }) => globalState);

    const { fetchData } = useFetcher();

    useEffect(() => {
        const loadData = async () => {
            const { data } = await fetchData();
            if (data && data.length) {
                dispatch(setData(data));
            }
        };
        loadData();
    }, [fetchData, dispatch]);

    return (
        <div className={`col ${styles.app_layout_container}`}>

            <main className={`col ${styles.app_layout_main}`}>

            </main>


            {isLoading && <div className={styles.app_layout_loader}><Shared.Loader /></div>}
        </div>
    );
};

export default AppLayout;