import useControllers from "controllers";
import { ScoresModalStyles } from "./ModalScores.styles";
import { useEffect } from "react";
import ScoreItem from "../scoreItem/ScoreItem";

const ModalScores = ({onClose}) => {
    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useModalScores } = useComponentsHooks();
    const { scores, getGeneralScores } = useModalScores();

    /** Effects */
    useEffect(() => {
        getGeneralScores();
    }, []);

    return (
        <ScoresModalStyles.Modal>
            <div className="relative flex flex-col justify-center items-center mt-[10%] pl-[1%] pr-[4%]">
                <div className="relative">
                    <div className="button-close" onClick={onClose}></div>
                    <img
                        src="https://juegoseml.co/images-recover/score-menu-principal.webp"
                        className="w-full max-w-[500px]"
                        id="cambio"
                        style={{marginLeft: "2.4%"}}
                    />
                    <div className="score-list">
                        {scores.map((item, index) => (
                            <ScoreItem
                                name={item.user.name}
                                score={item.scoreTotal}
                                isFirst={index === 0}
                                image={item.user.image_url}
                                level={1}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ScoresModalStyles.Modal>
    );
};

export default ModalScores;
