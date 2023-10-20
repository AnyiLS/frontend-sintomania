import useActions from "./actions";
import useServices from "./services";

const useApi = () => {
    return {
        useActions,
        useServices
    };
}

export default useApi;