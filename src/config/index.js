import useInterceptors from "./interceptors";
import useStoreConfig from "./store";

const useConfig = () => {
    return {
        useInterceptors,
        useStoreConfig
    };
}

export default useConfig;