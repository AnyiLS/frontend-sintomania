import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useGameServices = () => {
    const getLevelsOfUser = async () => {
        const res = await trackPromise(axios.get("/game/get-user-levels"));
        return res.data
    }

    const getLevelsByWorld = (world) => {
        const request = async () => {
            return axios.get(`/game/get-levels-by-world/${world}`);
        }

        return trackPromise(request());
    }

    return {
        getLevelsOfUser,
        getLevelsByWorld
    };
}

export default useGameServices;