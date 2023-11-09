import React from "react";
/** Local Modules */
import useApi from 'api';
import useModels from "models";

const useLevels4 = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useGameActions } = useActions();
    const { actGetLevelsByWorld } = useGameActions();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useGameSelectors } = useSelectors();
    const { levelsWorldSelector } = useGameSelectors();
    const levels = useSelector(levelsWorldSelector);

    React.useEffect(() => {
        dispatch(actGetLevelsByWorld({
            world: 4,
            onError: (error) => console.error(error)
        }));
    }, []);

    return {
        levels
    };
}

export default useLevels4;