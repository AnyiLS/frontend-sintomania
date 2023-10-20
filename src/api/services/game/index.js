import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useGameServices = () => {
    const getLevelsOfUser = async () => {
        const res = await trackPromise(axios.get("/game/get-user-levels"));
        return res.data
    }

    return {
        getLevelsOfUser
    };
}

export default useGameServices;