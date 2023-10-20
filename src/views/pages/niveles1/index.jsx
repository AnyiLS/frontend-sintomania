import { useNavigate } from "react-router-dom";
import { StyledContainerNiveles1 } from "./niveles1.styles";
import { useEffect, useState } from "react";
import HomeStyles from "styles/pages/home.styles";

const Niveles1 = () => {
  const [levels, setLevels] = useState({
    level2: true,
    level3: true,
    level4: true,
  });
  const [sound, setSound] = useState(null);

  useEffect(() => {
    let levels = localStorage.getItem("levels1");
    if (!levels) {
      localStorage.setItem(
        "levels1",
        JSON.stringify({ level2: true, level3: true })
      );
    } else {
      setLevels(JSON.parse(levels));
    }
    localStorage.setItem("score", 0);

    let gif = localStorage.getItem("gif_level_1");
    if (!gif) {
      localStorage.setItem(
        "gif_level_1",
        JSON.stringify({ gif: 1 })
      );

      localStorage.setItem(
        "gif_level_2",
        JSON.stringify({ gif: 1 })
      );

      localStorage.setItem(
        "gif_level_3",
        JSON.stringify({ gif: 1 })
      );

      localStorage.setItem(
        "gif_level_4",
        JSON.stringify({ gif: 1 })
      );
    }
  }, []);

  //sonidos
  useEffect(() => {
    let audio = new Audio("https://juegoseml.co/images-recover/sonidos/sonido-menu.mp3");
    audio.loop = true;
    setSound(audio);
    audio.play();

    return () => audio.pause();
  }, []);

  return (
    <HomeStyles.Background2 style={{ background: `url(https://juegoseml.co/images-recover/background-blue.webp) center center / cover` }}>
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
      <div className="button" style={{marginTop: 0}}>
        <StyledContainerNiveles1>
          <div className="relative mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px] w-full">
            <img
              src="https://juegoseml.co/images-recover/cuadros-niveles-1.webp"
              alt=""
              className="mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px]"
            />

            {/* nivel 1 gif */}
            <a
              href="/world-1/1"
              className="absolute w-[33.3%] top-[22.1%] left-[9.2%]"
            >
              <img src="https://juegoseml.co/images-recover/monster-4.webp" alt="" />
            </a>

            {/* nivel 2 gif */}
            <a
              href="/world-1/2"
              className="absolute w-[33.3%] top-[22.1%] left-[57.4%]"
            >
              <img src="https://juegoseml.co/images-recover/monster-2.webp" alt="" />
              {levels.level2 && (
                <img
                  src="https://juegoseml.co/images-recover/candado.webp"
                  alt=""
                  className="absolute w-[60%] top-[-12%] left-[20%]"
                />
              )}
            </a>

            {/* nivel 3 gif */}
            <a
              href="/world-1/3"
              className="absolute w-[33.3%] top-[67.1%] left-[34.6%]"
            >
              <img src="https://juegoseml.co/images-recover/monster-3.webp" alt="" />
              {levels.level3 && (
                <img
                  src="https://juegoseml.co/images-recover/candado.webp"
                  alt=""
                  className="absolute w-[60%] top-[-12%] left-[20%]"
                />
              )}
            </a>
          </div>

          {/* boton casa */}
          <a href="/worlds">
            <img
              src="https://juegoseml.co/images-recover/casa-niveles-1.webp"
              alt=""
              className="absolute w-[13%] left-0 top-[3%]"
            />
          </a>
        </StyledContainerNiveles1>
      </div>
    </HomeStyles.Background2>
  );
};

export default Niveles1;
