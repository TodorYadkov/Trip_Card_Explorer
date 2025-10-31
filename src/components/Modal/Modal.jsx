import styles from "./Modal.module.scss";

import { useDispatch } from "react-redux";

import { Buttons } from "../../components";
import { setModal } from "../../store";

/**
 * Modal
 * Displays a modal.
 * @param {React.ReactNode} children - Optional custom content for the modal.
 * @param {string} title - The modal title.
 * @param {string} content - The modal content text.
 * @param {string} [btnText="Close"] - The text for the modal button.
 * @param {boolean} [backdrop=true] - Enables closing the modal by clicking the backdrop.
 * @param {Function} [modalHandler] - Callback executed when the modal is closed.
 * @returns {JSX.Element} The rendered Modal component.
 */
const Modal = ({ children, title, content, btnText = "Close", backdrop = true, modalHandler = () => { } }) => {
    const dispatch = useDispatch();

    const handleBackdropClick = (event) => {
        // If "backdrop" is false stop execution
        if (!backdrop) return;
        // Close modal only when is clicked on backdrop
        if (event.target === event.currentTarget) {
            modalHandler();
            dispatch(setModal({ isOpenModal: false }));
        }
    };

    const handleCloseModal = () => {
        modalHandler();
        dispatch(setModal({ isOpenModal: false }));
    };

    return (
        <div className={`row ${styles.modal}`} onClick={handleBackdropClick}>
            <div className={`col ${styles.modal_wrapper}`}>
                <div className={`row ${styles.modal_header}`}>
                    <h4>{title}</h4>
                </div>
                <div className={styles.modal_content}>

                    {children || content}

                </div>
                <div className={`row ${styles.modal_footer}`}>
                    <Buttons.Button
                        text={btnText}
                        onClick={handleCloseModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default Modal;