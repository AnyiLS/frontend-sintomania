import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
/** Local Modules */
import useApi from "api";
import useModels from "models";

const useGame = () => {
    /** Variables */
    const router = useNavigate();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useGameActions } = useActions();
    const { actGetLevelByUser } = useGameActions();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useGameSelectors } = useSelectors();
    const { levelsSelector } = useGameSelectors();
    const levels = useSelector(levelsSelector);

    const handleToWorld = (canGo, world) => {
        if(canGo) {
            router(`/world-${world}`)
        }
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         dispatch(
    //             actGetLevelByUser({
    //                 onError: (data) => console.log(data),
    //             })
    //         );
    //     }, 5000);

    //     dispatch(
    //         actGetLevelByUser({
    //             onError: (data) => console.log(data),
    //         })
    //     );

    //     return () => clearInterval(interval);
    //     // eslint-disable-next-line
    // }, []);

    return {
        levels,
        handleToWorld
    };
};

export default useGame;
