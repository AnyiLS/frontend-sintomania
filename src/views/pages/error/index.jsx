import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StyledContainerError } from './error.styles';
import React, { useEffect, useState } from 'react';
import HomeStyles from 'styles/pages/home.styles';
import useModels from 'models';

const Error = () => {
    const router = useNavigate();
    const { level, id } = useParams();

    const [background, setBackground] = useState(
        'https://juegoseml.co/images-recover/background-blue.webp'
    );
    const [text, setText] = useState(
        'https://juegoseml.co/images-recover/error-1.webp'
    );
    const [sound, setSound] = useState(null);
    const [grap, setGrap] = React.useState(
        'https://juegoseml.co/images-recover/grap-blue.webp'
    );

    //sonidos
    useEffect(() => {
        let audio = new Audio(
            'https://juegoseml.co/images-recover/sonidos/candy-crush.mp3.wav'
        );
        setSound(audio);

        let isPauseAudio = localStorage.getItem('isPauseAudio');
        if (isPauseAudio === 'false') {
            audio.play();
        }

        return () => audio.pause();
    }, []);

    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    useEffect(() => {
        if (level === '3') {
            setBackground(
                'https://juegoseml.co/images-recover/background-green.png'
            );
            setText('https://juegoseml.co/images-recover/for-less-green.webp');
            setGrap('https://juegoseml.co/images-recover/grap-green.png');
        } else if (level === '4') {
            setBackground(
                'https://juegoseml.co/images-recover/background-purple.png'
            );
            setText('https://juegoseml.co/images-recover/for-less-purple.png');
            setGrap('https://juegoseml.co/images-recover/grap-purple.png');
        } else if (level === '2') {
            setBackground(
                'https://juegoseml.co/images-recover/background-grey.webp'
            );
            setText('https://juegoseml.co/images-recover/for-less-grey.png');
            setGrap('https://juegoseml.co/images-recover/grap-grey.webp');
        }
    }, [level]);

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
                <StyledContainerError>
                    <div className="relative flex justify-center">
                        <img
                            src={text}
                            className="w-[90%] max-w-[450px]"
                            id="cambio"
                        />

                        {/* click */}
                        <div
                            className="w-[16%] h-[15%] absolute top-[85%] left-[35%]"
                            onClick={() => router('/worlds')}
                        ></div>
                        <a
                            className="w-[15%] h-[15%] absolute top-[85%] left-[54%]"
                            href={
                                level === '3'
                                    ? `/world-4/${id}`
                                    : level === '4'
                                    ? `/world-3/${id}`
                                    : `/world-${level}/${id}`
                            }
                        ></a>
                    </div>
                </StyledContainerError>
            </div>
        </HomeStyles.Background2>
    );
};

export default Error;
