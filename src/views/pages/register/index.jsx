import { RegisterContent } from "styles/pages/register.styles";
import Volver from "assets/img/volver.png";

/** Assets */
import RegisterTitle from "assets/img/register-title.png";
/** Local Modules */
import useViews from "views";
import { useState } from "react";
import useControllers from "controllers";
import { useNavigate } from "react-router-dom";
import HomeStyles from "styles/pages/home.styles";

const Register = () => {
  const router = useNavigate();

  /** Components */
  const { useComponents } = useViews();
  const { Input, ModalTerms } = useComponents();

  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useRegister } = useScreenHooks();
  const { control, handleSentRegister, setValue, errors, clearErrors } =
    useRegister();

  /** States */
  const [checked, setChecked] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

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
      <div className="button mt-0">
        <RegisterContent>
          <div className="register-content">
            <div className="register-path">
              <img src={RegisterTitle} alt="register" />
              <div className="input-container mb-[5px]">
                <Input
                  control={control}
                  name="name"
                  placeholder="nombre"
                  required
                  rules={{
                    required: {
                      value: true,
                      message: "El campo es requerido.",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message:
                        "El nombre no puede contener numeros o caracteres especiales.",
                    },
                  }}
                />
              </div>
              
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
              <div className="input-container mb-[5px]">
                <Input
                  control={control}
                  name="pharmacy_name"
                  placeholder="NOMBRE DE FARMACIA"
                  required
                  rules={{
                    required: {
                      value: true,
                      message: "El campo es requerido.",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message:
                        "El nombre de la compania no puede contener numeros o caracteres especiales.",
                    },
                  }}
                />
              </div>
              <div className="input-container mb-[5px]">
                <Input
                  control={control}
                  name="chain"
                  placeholder="CADENA"
                  required
                  rules={{
                    required: {
                      value: true,
                      message: "El campo es requerido.",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message:
                        "El nombre de la cadena no puede contener numeros o caracteres especiales.",
                    },
                  }}
                />
              </div>
              <div className="input-container mb-[5px]">
                <Input
                  control={control}
                  name="invitation"
                  placeholder="¿Quién te invitó?"
                  required
                  rules={{
                    required: {
                      value: true,
                      message: "El campo es requerido.",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message:
                        "El nombre de la cadena no puede contener numeros o caracteres especiales.",
                    },
                  }}
                />
              </div>
              <div className="input-container mb-[20px]">
                <div className="checkbox-content">
                  <div
                    className="checkbox"
                    onClick={() => {
                      clearErrors();
                      setChecked(!checked);
                      setValue("privacy", !checked ? true : false);
                    }}
                  >
                    {checked && "X"}
                  </div>
                  <label onClick={() => setOpenTerms(true)}>
                    Autorizo a Laboratorios Bussie S.A. y Labinco S.A.S. para
                    tratar mis datos personales de acuerdo a su política de
                    manejo de datos personales.
                  </label>
                </div>
                {errors["privacy"] && (
                  <small className="text-[10px] text-red-500">
                    {errors["privacy"]?.message}
                  </small>
                )}
              </div>
              <div className="button-container">
                <button id="button-form" onClick={handleSentRegister}>
                  Continuar
                </button>
              </div>
            </div>
          </div>
          <div className="button-container  mt-[8%] relative w-full flex justify-center">
            <img
              src={Volver}
              alt="volver"
              className="w-[40%]"
              onClick={() => router("/menu")}
            />
          </div>
        </RegisterContent>
      </div>
        <ModalTerms open={openTerms} acceptTerms={() => { setChecked(true); setOpenTerms(false); setValue("privacy", !checked ? true : false); }} onClose={() => {setOpenTerms(false)}}/>
    </HomeStyles.Background>
  );
};

export default Register;
