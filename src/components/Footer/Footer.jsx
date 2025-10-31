import styles from "./Footer.module.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { Buttons } from "../../components";
import { setModal } from "../../store";

/**
 * Footer Component
 * Renders the application footer.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
    const [throwError, setThrowError] = useState(false);

    const dispatch = useDispatch();

    if (throwError) {
        // This error will be caught by Error Boundary Component
        throw new Error("Error Boundary Triggered!");
    }

    const handleErrorBoundary = () => {
        setThrowError(true);
    };

    const handleErrorMessage = () => {
        // Triggers an error message displayed via the AppLayout modal
        dispatch(setModal({
            isOpenModal: true,
            title: "Error message",
            content: "Error Message Triggered!",
            backdrop: false,
            btnText: "Close",
        }));
    };

    return (
        <footer className={`col ${styles.footer}`}>
            <div className={`row container_max_width ${styles.footer_wrapper}`}>
                <ul className={`row ${styles.footer_info}`} role="list">
                    <li>
                        <a
                            className={"icon icon-linkedin"}
                            href="https://www.linkedin.com/in/todor-yadkov-080150247"
                            target="_blank"
                            rel="noreferrer nofollow"
                            title="LinkedIn: Todor Yadkov"
                        ></a>
                    </li>
                    <li>
                        <a
                            className={"icon icon-github"}
                            href="https://github.com/TodorYadkov"
                            target="_blank"
                            rel="noreferrer nofollow"
                            title="GitHub: Todor Yadkov"
                        ></a>
                    </li>
                    <li>
                        <a
                            className={"icon icon-email"}
                            href="mailto:todor.yadkov@gmail.com"
                            title="Email: todor.yadkov@gmail.com"
                        ></a>
                    </li>
                </ul>

                <div className={`row ${styles.footer_actions}`}>
                    <Buttons.Button
                        text={"Test Error Message"}
                        onClick={handleErrorMessage}
                    />
                    <Buttons.Button
                        text={"Test Error Boundary"}
                        onClick={handleErrorBoundary}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;