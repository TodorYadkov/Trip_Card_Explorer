import styles from "./AppLayout.module.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setData } from "../../../store";
import { useFetcher } from "../../../hooks";

import { Footer, Header, Modal, Shared } from "../../../components";
import { Dashboard, } from "../../../pages";

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
            <Header />

            <main className={`col ${styles.app_layout_main}`}>
                <Dashboard />
            </main>

            <Footer />

            {isLoading && <div className={styles.app_layout_loader}><Shared.Loader /></div>}

            {modalProps.isOpenModal && (
                <Modal
                    title={modalProps.title}
                    content={modalProps.content}
                    btnText={modalProps.btnText}
                    backdrop={modalProps.backdrop}
                    modalHandler={modalProps.modalHandler}
                />
            )}
        </div>
    );
};

export default AppLayout;