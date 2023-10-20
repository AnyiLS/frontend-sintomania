import { RegisterContent } from "styles/pages/register.styles";
import Volver from "assets/img/ingreso1.png";
import Volver1 from "assets/img/registra.png";
import Volver2 from "assets/img/boton-politicas.png";

/** Local Modules */
import { useNavigate } from "react-router-dom";
import HomeStyles from "styles/pages/home.styles";

const Menu = () => {
  const router = useNavigate();

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
      <div className="button">
        <div className="button-container  relative w-full flex justify-center">
          <img
            src={Volver}
            alt="volver"
            className="w-[80%] "
            onClick={() => router("/login")}
          />
        </div>
        <div className="button-container  mt-[5%] relative w-full flex justify-center">
          <img
            src={Volver1}
            alt="volver1"
            className="w-[80%]"
            onClick={() => router("/register")}
          />
        </div>

        <div className="button-container  mt-[5%] relative w-full flex justify-center">
          <img
            src={Volver2}
            alt="Volver2"
            className="w-[80%]"
            onClick={() => router("/politicas")}
          />
        </div>
      </div>
    </HomeStyles.Background>
  );
};

export default Menu;
