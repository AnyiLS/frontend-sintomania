import useHelpers from "helpers";
import useTypes from "types";

const useAuthReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Types */
    const { useAuthTypes } = useTypes();
    const { LOGIN } = useAuthTypes();

    /** Reducers */
    const login = createReducer({}, {
        [LOGIN](state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    });

    return {
        login
    }
}

export default useAuthReducers;