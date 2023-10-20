import { useNavigate } from "react-router-dom";

const useHome = () => {
  /** Variables */
  const router = useNavigate();

  /** Handlers */
  /**
   * This function redirect to the register page.
   * @returns {void}
   */
  const handleGoToRegister = () => router("/menu");

  return {
    handleGoToRegister,
  };
};

export default useHome;
