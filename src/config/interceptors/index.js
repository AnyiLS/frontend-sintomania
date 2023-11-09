import { useEffect } from "react";
import axios from "axios";

const useInterceptors = () => {
    const login = JSON.parse(localStorage.getItem('persist:root'))
    const token = login ? JSON.parse(login.login).token : ""

    /**
     * This function retrieves the error response sent by the request before it reaches the controller.
     * @param {any} error
     */
    const handleResponseError = (error) => error;

    /**
     * This function retrieves the response and returns it to the controller.
     * @param {any} response
     * @returns {any}
     */
    const handleResponseSuccess = (response) => response;

    /** Effects */
    useEffect(() => {
        // axios.defaults.baseURL = "http://localhost:8000/api";
        axios.defaults.baseURL = "https://apisintomania.juegoseml.co/api";
        axios.defaults.headers = {
            "Authorization": token ? `Bearer ${token}` : undefined,
        }
        // axios.interceptors.response.use(
        //     handleResponseSuccess,
        //     handleResponseError
        // );
        // eslint-disable-next-line
    }, []);
};

export default useInterceptors;
