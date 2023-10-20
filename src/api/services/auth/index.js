import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useAuthServices = () => {
    const loginService = async (data) => {
        const res = await trackPromise(axios.post("/auth/register", data));
        return res.data.data;
    };

    const loginpageService = async (data) => {
        const res = await trackPromise(axios.post("/auth/login", data));
        return res.data.data;
    };


    return {
        loginService,
        loginpageService
    };
};

export default useAuthServices;
