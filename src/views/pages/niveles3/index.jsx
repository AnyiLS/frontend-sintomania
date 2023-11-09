import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { StyledContainerNiveles3 } from './niveles3.styles';
import HomeStyles from 'styles/pages/home.styles';
/** Local Modules */
import useControllers from 'controllers';
import useModels from 'models';
import React from 'react';

const Niveles3 = () => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        let levels = localStorage.getItem('levels3');
        if (!levels) {
            localStorage.setItem(
                'levels3',
                JSON.stringify({ level2: true, level3: true })
            );
        }
        localStorage.setItem('score', 0);

        let gif = localStorage.getItem('gif_level_3');
        if (!gif) {
            localStorage.setItem('gif_level_3', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_2', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_1', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_4', JSON.stringify({ gif: 1 }));
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
    const { useLevels3 } = useScreenHooks();
    const { levels } = useLevels3();

    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    return (
        <HomeStyles.Background2
            style={{
                background: `url(https://juegoseml.co/images-recover/background-green.png) center center / cover`,
            }}
        >
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
                <StyledContainerNiveles3>
                    <div className="relative mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px] w-full">
                        <img
                            src="https://juegoseml.co/images-recover/MENU-GREEN-N2.png"
                            alt=""
                            className="mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px]"
                        />

                        {/* nivel 1 gif */}
                        <a
                            href="/world-4/1"
                            className="absolute w-[33%] top-[22.1%] left-[9.2%]"
                        >
                            <img
                                src="https://juegoseml.co/images-recover/green-monster.gif"
                                alt=""
                            />
                        </a>

                        {/* nivel 2 gif */}
                        <a
                            href="/world-4/2"
                            className="absolute w-[33%] top-[22.1%] left-[57.7%]"
                        >
                            <img
                                src="https://juegoseml.co/images-recover/monster-green2.gif"
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
                            href="/world-4/3"
                            className="absolute w-[33%] top-[70.1%] left-[34.9%]"
                        >
                            <img
                                src="https://juegoseml.co/images-recover/monster-green3.gif"
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
                            src="https://juegoseml.co/images-recover/casa-green.webp"
                            alt=""
                            className="absolute w-[13%] left-0 top-[6%]"
                        />
                    </a>
                </StyledContainerNiveles3>
            </div>
        </HomeStyles.Background2>
    );
};

export default Niveles3;
