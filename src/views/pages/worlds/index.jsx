import { RegisterContent } from "styles/pages/register.styles";
import useControllers from "controllers";
import useComponents from "views/components";
import { useEffect, useState } from "react";
import useSelectors from "models/selectors";
import axios from "axios";
import HomeStyles from "styles/pages/home.styles";
import localStorage from "redux-persist/es/storage";
import cerrar from "assets/img/cerrarsesion.png"

const Worlds = () => {
  /** Controllers */
  const { useScreenHooks } = useControllers();
  const { useGame } = useScreenHooks();
  const { levels, handleToWorld } = useGame();
  const { ModalPerfil, ModalScores } = useComponents();

  const { useSelector, useAuthSelectors } = useSelectors();
  const { loginSelector } = useAuthSelectors();
  const loginT = useSelector(loginSelector);

  const [userT, setUserT] = useState(0);
  const [login, setLogin] = useState(0);
  const [score, setScore] = useState(false);
  const [pausa, setPausa] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    localStorage.setItem("score", 0);
    axios
      .get("/admin/get-worlds")
      .then((res) => {
        setUserT(res.data.data.level);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLogin(loginT.user);
  }, [loginT]);

  //sonidos
  useEffect(() => {
    let audio = new Audio("https://juegoseml.co/images-recover/sonidos/sonido-menu.mp3");
    audio.loop = true;
    setSound(audio);
    audio.play();

    return () => audio.pause();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const muteSound = () => {
    if (!pausa === true) {
      setPausa(true);
      sound.pause();
    } else {
      setPausa(false);
      sound.play();
    }
  };

  const closeSession = () => {
    window.localStorage.clear();
    window.location.href = '/'
  }

  console.log(userT);

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
        <RegisterContent>
          <div className="relative">
            <img
              src="https://juegoseml.co/images-recover/world-box.webp"
              alt=""
              className="mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[450px]"
            />
            <a
              href="/niveles1"
              className="absolute top-[16%] left-[8.6%] w-[33.6%]"
            >
              <img
                src="https://juegoseml.co/images-recover/key.png"
                alt=""
                style={{
                  visibility: userT >= "1" ? "hidden" : "visible",
                }}
              />
            </a>
            {userT >= "2" ? (
              <a
                className="absolute top-[16%] left-[57.3%] w-[33.6%]"
                href="/niveles2"
              >
                <img
                  src="https://juegoseml.co/images-recover/key.png"
                  alt=""
                  style={{
                    visibility: userT >= "2" ? "hidden" : "visible",
                  }}
                />
              </a>
            ) : (
              <div className="absolute top-[16%] left-[57.3%] w-[33.6%]">
                <img
                  src="https://juegoseml.co/images-recover/key.png"
                  alt=""
                  style={{
                    visibility: userT >= "2" ? "hidden" : "visible",
                  }}
                />
              </div>
            )}
            {userT >= "3" ? (
              <a
                className="absolute top-[62.2%] left-[8.6%] w-[33.6%]"
                href="/niveles3"
              >
                <img
                  src="https://juegoseml.co/images-recover/key.png"
                  alt=""
                  style={{
                    visibility: userT >= "3" ? "hidden" : "visible",
                  }}
                />
              </a>
            ) : (
              <div className="absolute top-[62.2%] left-[8.6%] w-[33.6%]">
                <img
                  src="https://juegoseml.co/images-recover/key.png"
                  alt=""
                  style={{
                    visibility: userT >= "3" ? "hidden" : "visible",
                  }}
                />
              </div>
            )}
            {userT == "4" ? (
              <a
                className="absolute top-[62.2%] left-[57.3%] w-[33.6%]"
                href="/niveles4"
              >
                <img
                  src="https://juegoseml.co/images-recover/key.png"
                  alt=""
                  style={{
                    visibility: userT == 4 ? "hidden" : "visible",
                  }}
                />
              </a>
            ) : (
              <div className="absolute top-[62.2%] left-[57.3%] w-[33.6%]">
                <img
                  src="https://juegoseml.co/images-recover/key.png"
                  alt=""
                  style={{
                    visibility: userT === "4" ? "hidden" : "visible",
                  }}
                />
              </div>
            )}
          </div>

          {/* Modal Perfil */}
          <div
            className="absolute w-[30%] top-[3%] left-0"
            onClick={() => setOpenModal(true)}
          >
            <img src="https://juegoseml.co/images-recover/photo.webp" alt="usuario" />
            <img
              src={login.image_url}
              alt=""
              className="absolute top-[5%] left-[3.1%] rounded-[100%] mobile:w-[38%] tablet:w-[26%] h-[87%]"
            />
          </div>
          

          {score && <ModalScores onClose={() => setScore(false)} />}

          {/* boton score */}
          <div
            className="max-w-[35%] absolute bottom-[4%] right-0"
            onClick={() => setScore(true)}
          >
            <img src="https://juegoseml.co/images-recover/boton-score.webp" alt="boton-score" />
          </div>
          {/* boton score */}

          {/* Boton sonido play */}
          <div className="max-w-[10%] absolute top-[3%] right-0">
            <img
              src={
                pausa
                  ? "https://juegoseml.co/images-recover/boton-sonido-pausa.webp"
                  : "https://juegoseml.co/images-recover/boton-sonido-play.webp"
              }
              alt="boton-sonido"
              onClick={muteSound}
            />
          </div>
          <div className="max-w-[35%] absolute bottom-[3%] left-[-1px]">
            <img
              src={cerrar}
              alt="boton-sonido1"
              onClick={closeSession}
            />
          </div>
          {/* Boton sonido play */}
        </RegisterContent>
      </div>
      {openModal && (
            <ModalPerfil
              name={login.name}
              email={login.email}
              phone={login.phone}
              chain={login.chain}
              pharmacy_name={login.pharmacy_name}
              onClose={() => {setOpenModal(false)}}
              image={login.image_url}
              className="flex items-center justify-center z-[1]"
            />
          )}
    </HomeStyles.Background>
  );
};

export default Worlds;
