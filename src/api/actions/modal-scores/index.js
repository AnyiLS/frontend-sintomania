import useServices from "api/services";

const useModalScoresActions = () => {
    /** Services */
    const { useModalScoresServices } = useServices();
    const { getGeneralScores } = useModalScoresServices();

    const actGetGeneralScores = (request) => {
        const {onError, onSuccess} = request;

        return async () => {
            try {
                const res = await getGeneralScores();
                const { data } = res.data;

                onSuccess && onSuccess(data);
            } catch (error) {
                onError && onError(error);
            }
        }
    }

    return {
        actGetGeneralScores
    };
}

export default useModalScoresActions