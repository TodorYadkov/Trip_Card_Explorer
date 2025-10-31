import styles from "./ButtonSort.module.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { sortDataAscending, sortDataDescending, resetSortData } from "../../../store";

/**
 * ButtonSort Component
 * Toggles between ascending, descending, and default sort states for data.
 * @returns {JSX.Element} The rendered ButtonSort component.
 */
const SORT_ORDER = { NONE: "NONE", ASC: "ASC", DSC: "DSC" };

const ButtonSort = () => {
    const [sortState, setSortState] = useState(SORT_ORDER.NONE);

    const dispatch = useDispatch();

    const handleSortToggle = () => {
        if (sortState === SORT_ORDER.NONE) {
            // First click: ascending
            dispatch(sortDataAscending());
            setSortState(SORT_ORDER.ASC);
        } else if (sortState === SORT_ORDER.ASC) {
            // Second click: descending
            dispatch(sortDataDescending());
            setSortState(SORT_ORDER.DSC);
        } else {
            // Third click: reset to original
            dispatch(resetSortData());
            setSortState(SORT_ORDER.NONE);
        }
    };

    const getSortIconClass = () => {
        switch (sortState) {
            case SORT_ORDER.ASC:
                return "icon icon-sorting-ascending";
            case SORT_ORDER.DSC:
                return "icon icon-sorting-descending";
            default:
                return "icon icon-sorting";
        }
    };

    return (
        <div
            className={`${styles.button_sort} ${sortState !== SORT_ORDER.NONE ? styles.active : ""}`}
            onClick={handleSortToggle}
        >
            <i title="Sort by Rating" className={getSortIconClass()} />
        </div>
    );
};

export default ButtonSort;