import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useModalScoresServices = () => {
    const getGeneralScores = () => {
        const request = axios.get('/scores/get-general-scores');
        return trackPromise(request);
    }

    return {
        getGeneralScores,
    };
}

export default useModalScoresServices;