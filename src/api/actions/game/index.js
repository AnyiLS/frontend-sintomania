import useApi from "api";
import axios from "axios";
import useTypes from "types";

const useGameActions = () => {
    /** Services */
    const { useServices } = useApi();
    const { useGameServices } = useServices();
    const { getLevelsOfUser, getLevelsByWorld } = useGameServices();

    /** Types */
    const { useGameTypes } = useTypes();
    const { GET_LEVELS, GET_LEVELS_BY_WORLD } = useGameTypes();

    const actGetLevelByUser =
        ({ onError }) =>
        async (dispatch) => {
            try {
                const res = await getLevelsOfUser();

                dispatch({
                    type: GET_LEVELS,
                    payload: res.data,
                });
            } catch (error) {
                onError && onError(error);
            }
        };

    const actSetScore = ({data, onError, onSuccess}) => async dispatch => {
        try {
            const res = await axios.post("/game/save-score", data);
            
            if (res) {
                onSuccess && onSuccess()
            } else {
                onError && onError();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetScores = ({level, onError, onSuccess}) => async dispatch => {
        try {
            const res = await axios.get(`/admin/get-scores/${level}`);
            
            if (res) {
                onSuccess && onSuccess(res.data.data)
            } else {
                onError && onError();
            }
        } catch (error) {
            onError && onError(error);
        }
    }

    const actSetImage = ({formData, onSuccess, onError}) => async dispatch =>  {
        try {
            const res = await axios.post("/game/change-image", formData);
            const { data } = res.data;

            dispatch({
                type: "LOGIN",
                payload: data
            })
        } catch (error) {
            onError && onError(error)
        }
    } 

    const actGetLevelsByWorld = ({world, onError}) => async dispatch => {
        try {
            const res = await getLevelsByWorld(world);
            const { data } = res.data;

            dispatch({
                type: GET_LEVELS_BY_WORLD,
                payload: data
            });

            const redux = JSON.parse(localStorage.getItem('persist:root'));
            redux.levels_world = JSON.stringify({levels: data});
            localStorage.setItem("persist:root", JSON.stringify(redux));
        } catch (error) {
            onError && onError(error);
        }
    }

    return {
        actGetLevelByUser,
        actSetScore,
        actGetScores,
        actSetImage,
        actGetLevelsByWorld
    };
};

export default useGameActions;
