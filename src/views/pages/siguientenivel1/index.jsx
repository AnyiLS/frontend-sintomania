import { useNavigate, useParams } from 'react-router-dom';
import { StyledContainersiguientenivel1 } from './siguientenivel1.styles';
import React, { useEffect, useState } from 'react';
import HomeStyles from 'styles/pages/home.styles';
import useModels from 'models';

const Siguientenivel1 = () => {
    const router = useNavigate();
    const { level } = useParams();

    const [background, setBackground] = useState(
        'https://juegoseml.co/images-recover/background-blue.webp'
    );
    const [text, setText] = useState(
        'https://juegoseml.co/images-recover/siguiente-1.png'
    );
    const [grap, setGrap] = React.useState(
        'https://juegoseml.co/images-recover/grap-blue.webp'
    );

    //sonidos
    useEffect(() => {
        let audio = new Audio(
            'https://juegoseml.co/images-recover/sonidos/sonido-menu.mp3'
        );
        audio.loop = true;
        
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
        switch (level) {
            case '2':
                setBackground(
                    'https://juegoseml.co/images-recover/background-grey.webp'
                );
                setText(
                    'https://juegoseml.co/images-recover/text-next-grey.png'
                );
                setGrap('https://juegoseml.co/images-recover/grap-grey.webp');
                break;
            case '3':
                setBackground(
                    'https://juegoseml.co/images-recover/background-green.png'
                );
                setText('https://juegoseml.co/images-recover/activa-green.png');
                setGrap('https://juegoseml.co/images-recover/grap-green.png');
                break;

            default:
                break;
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
            <img className='absolute top-[61%] left-[43%] w-[17%]' src="/house-start.png" alt="boton" onClick={() => router('/worlds')} />
                <StyledContainersiguientenivel1
                    onClick={() => router('/worlds')}
                >
                    <div className="relative flex justify-center">
                        <img
                            src={text}
                            className="w-[90%] max-w-[500px]"
                            id="cambio"
                            alt="Blue"
                        />
                    </div>
                </StyledContainersiguientenivel1>
            </div>
        </HomeStyles.Background2>
    );
};

export default Siguientenivel1;
