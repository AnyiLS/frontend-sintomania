/** Assets */
import RegisterTitle from "assets/img/ingresos.png";
import Volver from "assets/img/volver.png";
/** Local Modules */
import useViews from "views";
import { useState } from "react";
import useControllers from "controllers";
import { LoginContent } from "styles/pages/login.styles";
import { useNavigate } from "react-router-dom";
import HomeStyles from "styles/pages/home.styles";

const Login = () => {
  const router = useNavigate();

  /** Components */
  const { useComponents } = useViews();
  const { Input } = useComponents();

  /** Controllers */
  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useLogin } = useScreenHooks();
  const { control, handleSentRegister, setValue, errors, clearErrors } =
    useLogin();

  return (
    <HomeStyles.Background>
      <div className="stars"></div>
      <div className="world">
        <img src="https://juegoseml.co/images-recover/world-earth.webp" alt="world" />
      </div>
      <div className="kite">
        <img src="https://juegoseml.co/images-recover/kite.webp" alt="kite" />
      </div>
      <div className="satelite">
        <img src="https://juegoseml.co/images-recover/satelite.webp" alt="Satelite" />
      </div>
      <div className="planet">
        <img src="https://juegoseml.co/images-recover/planet.webp" alt="Planet" />
      </div>
      <div className="bacterium">
        <img src="https://juegoseml.co/images-recover/bacteria-home.png" alt="Bacterium" />
      </div>
      <div className="button mt-[0]">
        <LoginContent>
          <div className="register-content">
            <div className="register-path">
              <img src={RegisterTitle} alt="register" />

              <div className="input-container mb-[5px]">
                <Input
                  control={control}
                  name="email"
                  placeholder="E-MAIL"
                  required
                  rules={{
                    required: {
                      value: true,
                      message: "El campo es requerido.",
                    },
                    pattern: {
                      // eslint-disable-next-line
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Ingresa un correo electronico valido.",
                    },
                  }}
                />
              </div>

              <div className="button-container mt-[15%]">
                <button id="button-form" onClick={handleSentRegister}>
                  Ingresar
                </button>
              </div>
            </div>
          </div>
          <div className="button-container mt-[15%] relative w-full flex justify-center">
            <img
              src={Volver}
              alt="volver"
              className="w-[40%]"
              onClick={() => router("/menu")}
            />
          </div>
        </LoginContent>
      </div>
    </HomeStyles.Background>
  );
};

export default Login;
