import useHome from "./home";
import useRegister from "./register";
import useInstructions from "./instructions";
import useGame from "./game";
import useWorld1 from "./world-1";
import useWorld2 from "./world-2";
import useWorld3 from "./world-3";
import useWorld4 from "./world-4";
import useLogin from "./login"
import useScore from "./score";
import useFinish from "./finish";

const useScreenHooks = () => {
    return {
        useHome,
        useRegister,
        useInstructions,
        useGame,
        useWorld1,
        useWorld2,
        useWorld3,
        useWorld4,
        useLogin,
        useScore,
        useFinish
    };
}

export default useScreenHooks;