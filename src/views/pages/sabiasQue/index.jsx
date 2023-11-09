import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledContainersabiasQue } from "./sabiasQue.styles";
import useModels from "models";
import React from "react";

const SabiasQue = () => {
    const {state} = useLocation();
    const {level} = state;

    const [background, setBackground] = useState("");
    const [fondo, setFondo] = useState("");

    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    useEffect(() => {
        
        localStorage.removeItem("score");
        console.log(level)
        
        if(level === 1) {
            let haveGif = JSON.parse(localStorage.getItem("gif_level_1"));
            setFondo('https://juegoseml.co/images-recover/fondo-sabias3.png')
            if(haveGif) {
                switch (haveGif.gif) {
                    case 1:
                        setBackground("https://juegoseml.co/images-recover/sabiasque-nivel01.png");
                        break;
    
                    case 2:
                        setBackground("https://juegoseml.co/images-recover/sabiasque2.png");
                        break;
    
                    case 3:
                        setBackground("https://juegoseml.co/images-recover/fondo-sabiasque3.png");
                        break;
    
                    case 4:
                        setBackground("https://juegoseml.co/images-recover/sabiasimage-4.png");
                        break;
    
                    default:
                        break;
                }
            }
        } else if (level === 2) {
            let haveGif = JSON.parse(localStorage.getItem("gif_level_2"));
            setFondo("https://juegoseml.co/images-recover/sabias-grey-fondo.png");
            if(haveGif) {
                switch (haveGif.gif) {
                    case 1:
                        setBackground("https://juegoseml.co/images-recover/text-grey-1.webp");
                        break;
    
                    case 2:
                        setBackground("https://juegoseml.co/images-recover/text-grey-2.webp");
                        break;
    
                    case 3:
                        setBackground("https://juegoseml.co/images-recover/text-grey-3.webp");
                        break;
    
                    case 4:
                        setBackground("https://juegoseml.co/images-recover/text-grey-4.webp");
                        break;
    
                    default:
                        break;
                }
            }
        } else if (level === 4) {
            let haveGif = JSON.parse(localStorage.getItem("gif_level_3"));
            setFondo("https://juegoseml.co/images-recover/fondo-purple-sabias.png");
            if(haveGif) {
                switch (haveGif.gif) {
                    case 1:
                        setBackground("https://juegoseml.co/images-recover/purple-text-1.png");
                        break;
    
                    case 2:
                        setBackground("https://juegoseml.co/images-recover/purple-text-2.png");
                        break;
    
                    case 3:
                        setBackground("https://juegoseml.co/images-recover/purple-text-3.png");
                        break;
    
                    case 4:
                        setBackground("https://juegoseml.co/images-recover/purple-text-4.png");
                        break;
    
                    default:
                        break;
                }
            }
        } else if (level === 3) {
            let haveGif = JSON.parse(localStorage.getItem("gif_level_4"));
            setFondo("https://juegoseml.co/images-recover/green-sabias.png");
            if(haveGif) {
                switch (haveGif.gif) {
                    case 1:
                        setBackground("https://juegoseml.co/images-recover/green-text-1.png");
                        break;
    
                    case 2:
                        setBackground("https://juegoseml.co/images-recover/green-text-2.png");
                        break;
    
                    case 3:
                        setBackground("https://juegoseml.co/images-recover/green-text-3.png");
                        break;
    
                    case 4:
                        setBackground("https://juegoseml.co/images-recover/green-text-4.png");
                        break;
    
                    default:
                        break;
                }
            }
        }

        
    }, [])

    useEffect(() => {
    }, [])


    const router = useNavigate();
    const images = [
        "/img/sabiasque2.png",
        "/img/fondo-sabiasque3.png",
        "/img/sabiasimage-4.png",
    ];

    const imagesBackground = [
        'url("/img/sabiasque-fondo2.png")',
        'url("/img/fondo-sabias3.png")',
        'url("/img/sabiasque-4.png")',
    ];

    // useEffect(() => {
    //     let index = 0;
    //     let i = setInterval(() => {
    //         document.getElementById("cambio").src = images[index];
    //         document.getElementById("cambio-fondo").style.backgroundImage =
    //             imagesBackground[index];
    //         index++;

    //         if (index === images.length) {
    //             document.getElementById("activity").style.display = "block"
    //             clearInterval(i);
    //         }
    //     }, 10000);
    // }, []);

    return (
        <StyledContainersabiasQue id="cambio-fondo" fondo={fondo}>
            <div className="relative flex justify-center">
                <img
                    src={background}
                    className="w-[90%] max-w-[600px] mt-[8%]"
                    id="cambio"
                />

                <div
                    id="activity"
                    className="w-[13%] h-[20%] absolute top-[11%] right-[3%]"
                    onClick={() => router("/alerta", {
                        state
                    })}
                >
                </div>
            </div>
        </StyledContainersabiasQue>
    );
};

export default SabiasQue;
