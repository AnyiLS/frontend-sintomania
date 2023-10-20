import { map } from "lodash";
import { BrowserRouter, Routes } from "react-router-dom";
/** Local Modules */
import usePublicRoutes from "./public";

const useRouter = () => {
  /** Variables */
  const publicRoutes = usePublicRoutes();
  const resultRoutes = [...publicRoutes];

  return (
    <BrowserRouter>
      <Routes>{map(resultRoutes)}</Routes>
    </BrowserRouter>
  );
};

export default useRouter;
