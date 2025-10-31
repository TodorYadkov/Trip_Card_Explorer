import styles from "./Header.module.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { Buttons, Inputs } from "../../components";
import { searchData } from "../../store";

/**
 * Header Component
 * Renders the application header with a search input and sort button.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
    const [isSearched, setIsSearched] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        const value = event.target.value.trim();
        dispatch(searchData(value));
        setIsSearched(value);
    };

    return (
        <header className={`col ${styles.header}`}>
            <div className={`row container_max_width ${styles.header_wrapper}`}>
                <p className={styles.header_text}>Trip Card Explorer</p>
                <div className={`row ${styles.header_actions}`}>
                    <Inputs.Input
                        placeholder={"Search location"}
                        name={"search"}
                        title={"Find your location"}
                        onChange={handleSearch}
                        isFilled={isSearched}
                    />
                    <Buttons.ButtonSort />
                </div>
            </div>
        </header>
    );
};

export default Header;