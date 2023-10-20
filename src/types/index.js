import useAuthTypes from "./auth";
import useGameTypes from "./game";

const useTypes = () => {
    return {
        useAuthTypes,
        useGameTypes
    };
}

export default useTypes;