  import { useLocation, useNavigate, useParams } from 'react-router-dom';
  import { StyledContainerLograste } from './lograste.styles';
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import HomeStyles from 'styles/pages/home.styles';

  const Lograste = () => {
      const { id, level } = useParams();
      const router = useNavigate();

      const [text, setText] = useState('');
      const [background, setBackground] = useState(
          'https://juegoseml.co/images-recover/background-blue.webp'
      );

      const [userT, setUserT] = useState({});
      const [sound, setSound] = useState(null);
      const [grap, setGrap] = React.useState(
          'https://juegoseml.co/images-recover/grap-blue.webp'
      );

      //sonidos
      useEffect(() => {
          let audio = new Audio(
              'https://juegoseml.co/images-recover/sonidos/sonido-menu.mp3'
          );
          audio.loop = true;
          setSound(audio);
          audio.play();

          const date = new Date();
          date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

          document.cookie =
              'score' +
              '=' +
              0 +
              ';' +
              'expires=' +
              date.toUTCString() +
              ';path=/';

          return () => audio.pause();
      }, []);

      useEffect(() => {
          axios
              .get('/admin/get-worlds')
              .then((res) => {
                  setUserT(res.data.data);
              })
              .catch((err) => console.log(err));
      }, []);

      useEffect(() => {
          if (level === '3') {
              setBackground(
                  'https://juegoseml.co/images-recover/background-green.png'
              );
              setGrap('https://juegoseml.co/images-recover/grap-green.png');
              switch (id) {
                  case '1':
                      setText(
                          'https://juegoseml.co/images-recover/lograste-green.png'
                      );
                      break;
                  case '2':
                      setText(
                          'https://juegoseml.co/images-recover/green-text-2.png'
                      );
                      break;
                  case '3':
                      setText(
                          'https://juegoseml.co/images-recover/green-text-3.png'
                      );
                      break;
                  case '4':
                      setText(
                          'https://juegoseml.co/images-recover/green-text-4.png'
                      );
                      break;
              }
          } else if (level === '4') {
              setBackground(
                  'https://juegoseml.co/images-recover/background-purple.png'
              );
              setGrap('https://juegoseml.co/images-recover/grap-purple.png');
              switch (id) {
                  case '1':
                      setText(
                          'https://juegoseml.co/images-recover/purple-lograte-text.png'
                      );
                      break;
                  case '2':
                      setText(
                          'https://juegoseml.co/images-recover/purple-text-2.png'
                      );
                      break;
                  case '3':
                      setText(
                          'https://juegoseml.co/images-recover/purple-text-3.png'
                      );
                      break;
                  case '4':
                      setText(
                          'https://juegoseml.co/images-recover/purple-text-4.png'
                      );
                      break;
              }
          } else if (level === '2') {
              setBackground(
                  'https://juegoseml.co/images-recover/background-grey.webp'
              );
              setGrap('https://juegoseml.co/images-recover/grap-grey.webp');
              switch (id) {
                  case '1':
                      setText(
                          'https://juegoseml.co/images-recover/text-grey-lograste.webp'
                      );
                      break;
                  case '2':
                      setText(
                          'https://juegoseml.co/images-recover/text-grey-2.webp'
                      );
                      break;
                  case '3':
                      setText(
                          'https://juegoseml.co/images-recover/text-grey-3.webp'
                      );
                      break;
                  case '4':
                      setText(
                          'https://juegoseml.co/images-recover/text-grey-4.webp'
                      );
                      break;
              }
          } else {
              setBackground(
                  'https://juegoseml.co/images-recover/background-blue.webp'
              );
              switch (id) {
                  case '1':
                      setText(
                          'https://juegoseml.co/images-recover/logrste-nivel1.webp'
                      );
                      break;
                  case '2':
                      setText(
                          'https://juegoseml.co/images-recover/logrste-nivel1-2.webp'
                      );
                      break;
                  case '3':
                      setText(
                          'https://juegoseml.co/images-recover/logrste-nivel1-3.webp'
                      );
                      break;
                  case '4':
                      setText(
                          'https://juegoseml.co/images-recover/logrste-nivel1-4.webp'
                      );
                      break;
              }
          }

          console.log(id);
      }, []);

      return (
          <HomeStyles.Background2
              style={{ background: `url(${background}) center center / cover` }}
          >
              <img
                  src={grap}
                  alt="Blue"
                  className="absolute z-[1] top-0"
              />
              <img
                  src={grap}
                  alt="Blue"
                  className="absolute z-[1] bottom-0"
              />
              <div className="stars"></div>
              <div className="world">
                  <img
                      src="https://juegoseml.co/images-recover/world-earth.webp"
                      alt="world"
                  />
              </div>
              <div className="kite">
                  <img
                      src="https://juegoseml.co/images-recover/kite.webp"
                      alt="kite"
                  />
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
              <div
                  className="button"
                  style={{ marginTop: 0 }}
              >
                  <StyledContainerLograste>
                      <div className="relative flex justify-center top-[-2%]">
                          <img
                              src={text}
                              className="w-[90%] max-w-[450px] "
                              id="cambio"
                          />
                          <div
                              className="w-[13%] h-[15%]  absolute top-[85%] left-[29%]"
                              onClick={() => router('/worlds')}
                          ></div>
                          <a
                              className="w-[13%] h-[15%]  absolute top-[85%] left-[44%]"
                              href={
                                  level === '3'
                                      ? `/world-4/${id}`
                                      : level === '4'
                                      ? `/world-3/${id}`
                                      : `/world-${level}/${id}`
                              }
                          ></a>
                          <div
                              className="w-[13%] h-[15%] absolute top-[85%] left-[59%]"
                              onClick={() => {
                                  if (id === '3') {
                                      router(`/alerta/${level}/${id}`);
                                  } else {
                                      router(`/niveles${level}`);
                                  }
                              }}
                          ></div>
                      </div>
                  </StyledContainerLograste>
              </div>
          </HomeStyles.Background2>
      );
  };

  export default Lograste;
