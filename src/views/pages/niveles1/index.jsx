import { useNavigate } from 'react-router-dom';
import {
    RedirectionIconLevel1,
    RedirectionIconLevel2,
    RedirectionIconLevel3,
    StyledContainerNiveles1,
} from './niveles1.styles';
import { useEffect, useState } from 'react';
import HomeStyles from 'styles/pages/home.styles';
/** Local Modules */
import useControllers from 'controllers';
import useModels from 'models';
import React from "react";

const Niveles1 = () => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        let levels = localStorage.getItem('levels1');
        if (!levels) {
            localStorage.setItem(
                'levels1',
                JSON.stringify({ level2: true, level3: true })
            );
        }
        localStorage.setItem('score', 0);

        let gif = localStorage.getItem('gif_level_1');
        if (!gif) {
            localStorage.setItem('gif_level_1', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_2', JSON.stringify({ gif: 1 }));

            localStorage.setItem('gif_level_3', JSON.stringify({ gif: 1 }));

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
    const { useLevels1 } = useScreenHooks();
    const { levels } = useLevels1();

    console.log(levels);

    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    return (
        <HomeStyles.Background2
            style={{
                background: `url(https://juegoseml.co/images-recover/background-blue.webp) center center / cover`,
            }}
        >
            <div className="stars"></div>
            <div className="world">
                <img
                    fetchpriority="low"
                    src="https://juegoseml.co/images-recover/world-earth.webp"
                    alt="world"
                    width={414}
                    height={414}
                />
            </div>
            <div className="kite">
                <img
                    fetchpriority="low"
                    src="https://juegoseml.co/images-recover/kite.webp"
                    alt="kite"
                    width={165}
                    height={156}
                />
            </div>
            <div className="satelite">
                <img
                    fetchpriority="low"
                    src="https://juegoseml.co/images-recover/satelite.webp"
                    alt="Satelite"
                    width={124}
                    height={75}
                />
            </div>
            <div className="planet">
                <img
                    fetchpriority="low"
                    src="https://juegoseml.co/images-recover/planet.webp"
                    alt="Planet"
                    width={207}
                    height={141}
                />
            </div>
            <div className="bacterium">
                <img
                    fetchpriority="low"
                    src="https://juegoseml.co/images-recover/bacteria-home.png"
                    alt="Bacterium"
                    width={124}
                    height={124}
                />
            </div>
            <div
                className="button"
                style={{ marginTop: 0 }}
            >
                <StyledContainerNiveles1>
                    <div className="relative mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px] w-full">
                        <img
                            fetchpriority="high"
                            src="https://juegoseml.co/images-recover/cuadros-niveles-1.webp"
                            alt=""
                            className="mobile:max-w-[320px] mini-tablet:max-w-[380px] tablet:max-w-[500px]"
                            width={372}
                            height={352}
                        />

                        {/* nivel 1 gif */}
                        <RedirectionIconLevel1 href="/world-1/1">
                            <img
                                fetchpriority="high"
                                src="https://juegoseml.co/images-recover/monster-4.webp"
                                alt=""
                                width={124}
                                height={79}
                            />
                        </RedirectionIconLevel1>

                        {/* nivel 2 gif */}
                        <RedirectionIconLevel2
                            href="/world-1/2"
                            className=""
                        >
                            <img
                                fetchpriority="high"
                                src="https://juegoseml.co/images-recover/monster-2.webp"
                                alt=""
                                width={124}
                                height={79}
                            />
                            {levels.level < 2 && (
                                <img
                                    fetchpriority="high"
                                    src="https://juegoseml.co/images-recover/candado.webp"
                                    alt=""
                                    className="absolute w-[60%] top-[-12%] left-[20%]"
                                    width={74}
                                    height={88}
                                />
                            )}
                        </RedirectionIconLevel2>

                        {/* nivel 3 gif */}
                        <RedirectionIconLevel3
                            href="/world-1/3"
                            className=""
                        >
                            <img
                                fetchpriority="high"
                                src="https://juegoseml.co/images-recover/monster-3.webp"
                                alt=""
                                width={124}
                                height={79}
                            />
                            {levels.level < 3 && (
                                <img
                                    fetchpriority="high"
                                    src="https://juegoseml.co/images-recover/candado.webp"
                                    alt=""
                                    className="absolute w-[60%] top-[-12%] left-[20%]"
                                    width={74}
                                    height={88}
                                />
                            )}
                        </RedirectionIconLevel3>
                    </div>

                    {/* boton casa */}
                    <a href="/worlds">
                        <img
                            fetchpriority="high"
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
