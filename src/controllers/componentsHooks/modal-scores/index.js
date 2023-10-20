import useApi from "api";
import { useState } from "react";
import { useCallback } from "react";

const useModalScores = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useModalScoresActions } = useActions();
    const { actGetGeneralScores } = useModalScoresActions();

    /** States */
    const [scores, setScores] = useState([]);

    const getGeneralScores = useCallback(() => {
        dispatch(actGetGeneralScores({
            onError: (error) => console.error("GET_GENERAL_SCORES" + error),
            onSuccess: (data) => {
                let array = [];
                Object.keys(data).map((key) => {
                    let scoreTotal = 0;
                    let item = {}
                    data[key].map((score) => {
                        scoreTotal = scoreTotal + parseInt(score.score);
                        console.log("total", scoreTotal)
                        item = {...score, scoreTotal}
                    });
                    array.push(item);
                })
                array = array.sort((a, b) => a.scoreTotal - b.scoreTotal);
                array = array.reverse();
                setScores(array)
            }
        }));
    }, []);

    return {
        scores,
        getGeneralScores,
    };
}

export default useModalScores;