import { combineReducers } from "@reduxjs/toolkit";
/** Reducers */
import useAuthReducers from "./auth";
import useGameReducers from "./game";

const useReducers = () => {

    return combineReducers({
        ...useAuthReducers(),
        ...useGameReducers(),
    });
};

export default useReducers;
