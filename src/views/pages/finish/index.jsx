import useControllers from "controllers";
import { useNavigate } from "react-router-dom";
import { FinishContainer } from "styles/pages/finish.styles";

const Finish = () => {
    /** Variables */
    const routes = useNavigate();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useFinish } = useScreenHooks();
    const { handleLogout } = useFinish();
    return (
        <FinishContainer>
            <div className="back-to-game" onClick={() => routes('/worlds')}></div>
            <div className="close-session" onClick={handleLogout}></div>
        </FinishContainer>
    );
}

export default Finish;