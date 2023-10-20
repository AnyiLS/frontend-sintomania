import { useLocation, useNavigate, useParams } from "react-router-dom";
import { StyledContainerAlerta } from "./alerta.styles";
import React, { useEffect, useState } from "react";
import HomeStyles from "styles/pages/home.styles";

const Lograste = () => {
  const router = useNavigate();
  const { level, id } = useParams();

  const [background, setBackground] = useState("https://juegoseml.co/images-recover/background-blue.webp");
  const [next, setNext] = useState("https://juegoseml.co/images-recover/jugando-seguir1.webp");
  const [grap, setGrap] = React.useState('https://juegoseml.co/images-recover/grap-blue.webp');

  const [sound, setSound] = useState(null);

  //sonidos
  useEffect(() => {
    let audio = new Audio("https://juegoseml.co/images-recover/sonidos/sonido-menu.mp3");
    audio.loop = true;
    setSound(audio);
    audio.play();

    return () => audio.pause();
  }, []);

  useEffect(() => {
    if (level === "2") {
      setBackground("https://juegoseml.co/images-recover/background-grey.webp");
      setNext("https://juegoseml.co/images-recover/grey-text-alert.webp");
      setGrap('https://juegoseml.co/images-recover/grap-grey.webp')
    } else if (level === "4") {
      setBackground("https://juegoseml.co/images-recover/background-purple.png");
      setNext("https://juegoseml.co/images-recover/purple-next.png");
      setGrap('https://juegoseml.co/images-recover/grap-purple.png')
    } else if (level === "3") {
      setBackground("https://juegoseml.co/images-recover/background-green.png");
      setNext("https://juegoseml.co/images-recover/green-siguiente.png");
      setGrap('https://juegoseml.co/images-recover/grap-green.png')
    } else {
    }
  }, [level]);

  return (
    <HomeStyles.Background2 style={{ background: `url(${background}) center center / cover` }}>
        <img src={grap} alt="Blue" className="absolute z-[1] top-0"/>
        <img src={grap} alt="Blue" className="absolute z-[1] bottom-0"/>
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
        <StyledContainerAlerta>
          <div className="relative flex justify-center">
            <img src={next} className="w-[90%] max-w-[450px]" id="cambio" />
            <div
              className="w-[15%] h-[19%] absolute top-[82%] left-[41%]"
              onClick={() => router(`/score/${level}/${id}`)}
            ></div>
          </div>
        </StyledContainerAlerta>
      </div>
    </HomeStyles.Background2>
  );
};

export default Lograste;
