import useApi from "api";
import { useEffect, useState } from "react";

const useScore = (level) => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useGameActions } = useActions();
    const { actGetScores } = useGameActions();
    /** States */
    const [scores, setScores] = useState([]);

    useEffect(() => {
        dispatch(actGetScores({
            level,
            onError: (error) =>  console.log(error),
            onSuccess: (data) => {
                let array = data.sort((a,b) => a.score - b.score)
                array = array.reverse()
                setScores(array)
            }
        }))
    }, [])

    return {
        scores
    };
}

export default useScore;