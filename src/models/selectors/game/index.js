import useHelpers from 'helpers';

const useGameSelectors = () => {
    /** Helpers */
    const { useCreateSelector } = useHelpers();
    const { createSelector } = useCreateSelector();

    /** Selectors */
    const levelsSelector = createSelector(
        (state) => state.levels,
        (levels) => levels.levels
    );

    const levelsWorldSelector = createSelector(
        (state) => state.levels_world,
        (levels_world) => levels_world.levels
    );

    return {
        levelsSelector,
        levelsWorldSelector
    };
};

export default useGameSelectors;
