import { combineReducers } from "@reduxjs/toolkit";
/** Reducers */
import useAuthReducers from "./auth";
import useGameReducers from "./game";

const useReducers = () => {
    const { levels } = useGameReducers();

    return combineReducers({
        ...useAuthReducers(),
        levels,
    });
};

export default useReducers;
