import useAuthServices from "./auth";
import useGameServices from "./game";
import useModalScoresServices from "./modal-scores";

const useServices = () => {
    return {
        useAuthServices,
        useGameServices,
        useModalScoresServices
    }
}

export default useServices;