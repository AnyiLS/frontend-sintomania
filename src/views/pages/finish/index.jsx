import useControllers from "controllers";
import useModels from "models";
import { useNavigate } from "react-router-dom";
import { FinishContainer } from "styles/pages/finish.styles";
import React from "react";

const Finish = () => {
    /** Variables */
    const routes = useNavigate();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useFinish } = useScreenHooks();
    const { handleLogout } = useFinish();

    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    return (
        <FinishContainer>
            <div className="back-to-game" onClick={() => routes('/worlds')}></div>
            <div className="close-session" onClick={handleLogout}></div>
        </FinishContainer>
    );
}

export default Finish;