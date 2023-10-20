import { RegisterContent } from "styles/pages/register.styles";
import HomeStyles from "styles/pages/home.styles";

const Instructions = () => {
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
      <div className="button" style={{ marginTop: 0 }}>
      <RegisterContent className="flex-col relative justify-center">
      <div className="relative">
        <img
          src="https://juegoseml.co/images-recover/instructions.webp"
          alt="instructions"
          className="mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[450px]"
        />
        <a
          className="cursor-pointer w-[51.6%] h-[8%] absolute bottom-0 left-[24.3%]"
          href="/worlds"
        ></a>
      </div>
    </RegisterContent>
      </div>
    </HomeStyles.Background>
    
  );
};

export default Instructions;
