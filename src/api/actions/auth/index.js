/** Local Modules */
import useApi from 'api';
import useTypes from 'types';

const useAuthActions = () => {
    /** Services */
    const { useServices } = useApi();
    const { useAuthServices } = useServices();
    const { loginService, loginpageService } = useAuthServices();

    /** Types */
    const { useAuthTypes } = useTypes();
    const { LOGIN } = useAuthTypes();

    /** Actions */
    /**
     * This action receives the request so that
     * the service can be executed and send the login API request.
     * @param {any} request
     * @returns {AnyAction}
     */
    const actRegister = (request) => async () => {
        /** Request */
        const { data, onSuccess, onError } = request;

        try {
            await loginService(data);
            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    };

    const actLogin = (request) => async (dispatch) => {
        /** Request */
        const { data, onSuccess, onError } = request;

        try {
            const res = await loginpageService(data);

            dispatch({
                type: LOGIN,
                payload: res,
            });

            const redux = JSON.parse(localStorage.getItem('persist:root'));
            redux.login = JSON.stringify(res);
            localStorage.setItem('persist:root', JSON.stringify(redux));

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    };

    const actLogout = (request) => async (dispatch) => {
        const { onSuccess, onError } = request;

        try {
            dispatch({
                type: LOGIN,
                payload: {
                    token: '',
                    user: {},
                },
            });

            const redux = JSON.parse(localStorage.getItem('persist:root'));
            redux.login = JSON.stringify({token: '', user: {}});
            localStorage.setItem('persist:root', JSON.stringify(redux));

            onSuccess && onSuccess();
        } catch (error) {
            onError && onError(error);
        }
    };

    return {
        actRegister,
        actLogin,
        actLogout,
    };
};

export default useAuthActions;
