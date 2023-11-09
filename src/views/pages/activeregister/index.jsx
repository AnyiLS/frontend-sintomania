import useControllers from "controllers";
import { useNavigate } from "react-router-dom";
import { StyledContainerActiveRegister } from "./error.styles";
import HomeStyles from "styles/pages/home.styles";
import useModels from "models";
import React from "react";

const ActiveRegister = () => {
  const router = useNavigate();

  const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

  return (
    <HomeStyles.Background>
      <div className="stars"></div>
      <div className="world">
        <img
          src="https://juegoseml.co/images-recover/world-earth.webp"
          alt="world"
        />
      </div>
      <div className="kite">
        <img src="https://juegoseml.co/images-recover/kite.webp" alt="kite" />
      </div>
      <div className="satelite">
        <img
          src="https://juegoseml.co/images-recover/satelite.webp"
          alt="Satelite"
        />
      </div>
      <div className="planet">
        <img
          src="https://juegoseml.co/images-recover/planet.webp"
          alt="Planet"
        />
      </div>
      <div className="bacterium">
        <img
          src="https://juegoseml.co/images-recover/bacteria-home.png"
          alt="Bacterium"
        />
      </div>
      <div className="relative flex justify-center">
        <img
          src="https://juegoseml.co/images-recover/activeruser-1.png"
          className="w-[90%] max-w-[450px]"
          id="cambio"
        />

        {/* click */}
        <div
          className="w-[100%] h-[420%] absolute top-[-162%] left-[0%]"
          onClick={() => router("/")}
        ></div>
      </div>
    </HomeStyles.Background>
  );
};

export default ActiveRegister;
