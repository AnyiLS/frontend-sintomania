/** Local Modules */
import useControllers from "controllers";
/** Styles */
import HomeStyles from "styles/pages/home.styles";

const Home = () => {
  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { handleGoToRegister } = useHome();

  return (
    <HomeStyles.Background>
      <div className="stars"></div>
      <div className="world">
        <img fetchpriority="high" src="https://juegoseml.co/images-recover/world-earth.webp" alt="world" />
      </div>
      <div className="kite">
        <img fetchpriority="high" src="https://juegoseml.co/images-recover/kite.webp" alt="kite" />
      </div>
      <div className="satelite">
        <img fetchpriority="high" src="https://juegoseml.co/images-recover/satelite.webp" alt="Satelite" />
      </div>
      <div className="planet">
        <img fetchpriority="high" src="https://juegoseml.co/images-recover/planet.webp" alt="Planet" />
      </div>
      <div className="bacterium">
        <img fetchpriority="high" src="https://juegoseml.co/images-recover/bacteria-home.png" alt="Bacterium" />
      </div>
      <div className="button">
        <div className="flex justify-center">
          <img fetchpriority="high" src="https://juegoseml.co/images-recover/flower.webp" alt="Flower" className="flower" />
        </div>
        <img fetchpriority="high" src="https://juegoseml.co/images-recover/welcome.webp" alt="Welcome" className="welcome" />
        <img fetchpriority="high" src="https://juegoseml.co/images-recover/button.webp" alt="button" onClick={handleGoToRegister}/>
      </div>
    </HomeStyles.Background>
  );
};

export default Home;
