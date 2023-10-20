import { useNavigate } from "react-router-dom";

const useInstructions = () => {
    /** Variables */
    const router = useNavigate();

    /**
     * This function is used go to worlds page.
     * @returns {void}
     */
    const handleGoToWorld = () => router("/worlds");

    return {
        handleGoToWorld
    }
}

export default useInstructions;