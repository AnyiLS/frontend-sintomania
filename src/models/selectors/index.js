import { useSelector } from "react-redux";
/** Selectors */
import useAuthSelectors from "./auth";
import useGameSelectors from "./game";

const useSelectors = () => {
    return {
        useSelector,
        useAuthSelectors,
        useGameSelectors,
    };
};

export default useSelectors;
