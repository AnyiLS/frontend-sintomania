import useApi from "api";
import { useNavigate } from "react-router-dom";

const useFinish = () => {
    /** Variables */
    const router = useNavigate();

    /** Actions */
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { actLogout } = useAuthActions();

    /** Handlers */
    const handleLogout = () => {
        dispatch(
            actLogout({
                onError: (error) => console.log(error),
                onSuccess: () => router("/"),
            })
        );
    };

    return {
        handleLogout,
    };
};

export default useFinish;
