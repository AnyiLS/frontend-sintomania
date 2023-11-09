import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StyledContainerNiveles4 } from './niveles4.styles';
import HomeStyles from 'styles/pages/home.styles';
/** Local Modules */
import useControllers from 'controllers';
import React from 'react';
import useModels from 'models';

const Niveles4 = () => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        let levels = localStorage.getItem('levels4');
        if (!levels) {
            localStorage.setItem(
                'levels4',
                JSON.stringify({ level2: true, level3: true })
            );
        }
        localStorage.setItem('score', 0);

        let gif = localStorage.getItem('gif_level_4');
        if (!gif) {
            localStorage.setItem('gif_level_4', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_2', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_3', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_1', JSON.stringify({ gif: 1 }));
        }
    }, []);

    //sonidos
    useEffect(() => {
        let audio = new Audio(
            'https://juegoseml.co/images-recover/sonidos/sonido-menu.mp3'
        );
        audio.loop = true;
        setSound(audio);

        let isPauseAudio = localStorage.getItem('isPauseAudio');
        if (isPauseAudio === 'false') {
            audio.play();
        }

        return () => audio.pause();
    }, []);

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useLevels4 } = useScreenHooks();
    const { levels } = useLevels4();

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
                <StyledContainerNiveles4>
                    <div className="relative mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px] w-full">
                        <img
                            src="https://juegoseml.co/images-recover/MENU-MORADO-N4.png"
                            alt=""
                            className="mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px]"
                        />

                        {/* nivel 1 gif */}
                        <a
                            href="/world-3/1"
                            className="absolute w-[38.3%] top-[25.1%] left-[2.4%]"
                        >
                            <img
                                src="https://juegoseml.co/images-recover/monster-purple.gif"
                                alt=""
                            />
                        </a>

                        {/* nivel 2 gif */}
                        <a
                            href="/world-3/2"
                            className="absolute w-[38.3%] top-[25.1%] left-[58%]"
                        >
                            <img
                                src="https://juegoseml.co/images-recover/purple-2.gif"
                                alt=""
                            />
                            {levels.level < 2 && (
                                <img
                                    src="https://juegoseml.co/images-recover/candado.webp"
                                    alt=""
                                    className="absolute w-[60%] top-[-12%] left-[20%]"
                                />
                            )}
                        </a>

                        {/* nivel 3 gif */}
                        <a
                            href="/world-3/3"
                            className="absolute w-[38.3%] top-[70.1%] left-[32.1%]"
                        >
                            <img
                                src="https://juegoseml.co/images-recover/purple-3.gif"
                                alt=""
                            />
                            {levels.level < 3 && (
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
                            src="https://juegoseml.co/images-recover/casa-morado.png"
                            alt=""
                            className="absolute w-[13%] left-0 top-[6%]"
                        />
                    </a>
                </StyledContainerNiveles4>
            </div>
        </HomeStyles.Background>
    );
};

export default Niveles4;
