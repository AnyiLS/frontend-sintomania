import { useDispatch } from "react-redux";
/** Actions */
import useAuthActions from "./auth";
import useGameActions from "./game";
import useModalScoresActions from "./modal-scores";

const useActions = () => {
    /** Variables */
    const dispatch = useDispatch();

    return {
        dispatch,
        useAuthActions,
        useGameActions,
        useModalScoresActions
    };
};

export default useActions;
