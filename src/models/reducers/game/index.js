import useHelpers from "helpers";
import useTypes from "types";

const useGameReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Types */
    const { useGameTypes } = useTypes();
    const { GET_LEVELS, GET_LEVELS_BY_WORLD } = useGameTypes();

    /** Reducers */
    const levels = createReducer(
        {
            levels: {
                level_1: true,
                level_2: false,
                level_3: false,
                level_4: false,
            },
        },
        {
            [GET_LEVELS](state, action) {
                return {
                    ...state,
                    levels: action.payload,
                };
            },
        }
    );

    const levels_world = createReducer({ levels: {} }, {
        [GET_LEVELS_BY_WORLD](state, action) {
            return {
                ...state,
                levels: action.payload
            }
        }
    })

    return {
        levels,
        levels_world
    };
};

export default useGameReducers;
