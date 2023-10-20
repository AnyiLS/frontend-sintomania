import useHelpers from "helpers";

const useGameSelectors = () => {
     /** Helpers */
     const { useCreateSelector } = useHelpers();
     const { createSelector } = useCreateSelector();
 
     /** Selectors */
     const levelsSelector = createSelector(
         (state) => state.levels,
         (levels) => levels.levels
     );

    return {
        levelsSelector
    };
}

export default useGameSelectors;