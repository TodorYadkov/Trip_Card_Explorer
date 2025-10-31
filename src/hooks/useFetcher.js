import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setModal, startLoading, stopLoading } from "../store";

/**
 * Simulates an HTTP request with a delay and manages loading and error states.
 * @returns {{ fetchData: Function }}
 */
export const useFetcher = () => {
    const dispatch = useDispatch();

    const fetchData = useCallback(async ({ delay = 500 } = {}) => {
        // Start global loading indicator
        dispatch(startLoading());

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, delay));

            // Import mock data
            const { trips } = await import("../../data.json");

            return { data: trips, error: null };
        } catch (err) {
            console.error("Fetch error:", err);

            // Dispatch global error message
            dispatch(setModal({
                isOpenModal: true,
                title: "Error message",
                content: err.message || "Something went wrong",
                backdrop: false,
                btnText: "Close",
            }));

            return { data: [], error: err.message };
        } finally {
            // Stop global loader
            dispatch(stopLoading());
        }
    }, [dispatch]);

    return {
        fetchData
    };
};
