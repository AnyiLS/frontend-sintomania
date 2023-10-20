import useScreenHooks from "./screenHooks";
import useComponentsHooks from "./componentsHooks";

const useControllers = () => {
    return {
        useScreenHooks,
        useComponentsHooks
    };
}

export default useControllers;