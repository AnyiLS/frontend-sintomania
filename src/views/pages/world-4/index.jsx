/** Local Modules */
import useControllers from "controllers";
/** Styles */
import { World1Container } from "styles/pages/world-4.styles";
import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSelectors from "models/selectors";
import useModels from "models";
import React from "react";

const World4 = () => {
    /** Variables */
    const { id } = useParams();


    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useWorld4 } = useScreenHooks();
    const { timeLeft, handlePauseCronometer, handleResumeCronometer, isPause } =
        useWorld4();

    const returnParameter = () => {
        if (window.innerWidth > 819) {
            return { width: 650, height: 650 };
        } else if (window.innerWidth > 767) {
            return { width: 550, height: 550 };
        } else if (window.innerWidth > 400) {
            return { width: 410, height: 410 };
        } else if (window.innerWidth > 360) {
            return { width: 360, height: 360 };
        } else {
            return { width: 360, height: 360 };
        }
    };

    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    const [background, setBackground] = useState(
        "url('https://juegoseml.co/images-recover/green-monster.gif')"
    );
    const [modal, setModal] = useState(true);


    useEffect(() => {
        localStorage.setItem("score", 0);

        document.body.style.overflow = "hidden";

        switch (id) {
            case "1":
                setBackground("url('https://juegoseml.co/images-recover/green-monster.gif')");
                break;

            case "2":
                setBackground("url('https://juegoseml.co/images-recover/monster-green2.gif')");
                break;

            default:
                setBackground("url('https://juegoseml.co/images-recover/monster-green3.gif')");
                break;
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 5000)
    }, [])

    //sonidos
    useEffect(() => {
        let audio = new Audio(
            id === "1" ?
                'https://juegoseml.co/images-recover/sonidos/playa-M3.wav' :
                id === "2" ?
                'https://juegoseml.co/images-recover/sonidos/playa-M3.wav' :
                'https://juegoseml.co/images-recover/sonidos/playa-M3.wav'
        );
        audio.loop = true;
        audio.volume = 0.2;
        audio.play();

        return () => audio.pause();
    }, []);

    return (
        <Fragment>
            {
                modal && (
                    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[1000] bg-[rgba(0,0,0,.5)]">
                        <img src="https://juegoseml.co/images-recover/boton-alerta-mundo4.png" alt="" className="w-[80%] max-w-[450px]"/>
                    </div>
                )
            }
            <World1Container>
            <audio
                className="opacity-0"
                id="clear"
                src="https://juegoseml.co/images-recover/sonidos/clear.mp3"
            ></audio>
            <div
                className="monster-container"
                style={{ backgroundImage: background }}
            >
                <div className="w-[30%] relative ml-[2%]">
                    <img
                        src={login.user.image_url}
                        alt=""
                        className="absolute rounded-[100%] top-[4%] w-[34%] h-[15%] left-[3%] z-[1]"
                    />
                    <div className="score relative" id="score"></div>
                    <div className="buttons-container">
                        <a href="/worlds">
                            <img src="https://juegoseml.co/images-recover/boton-home.webp" alt="Home" />
                        </a>
                        <img
                            src="https://juegoseml.co/images-recover/recargar-8.webp"
                            alt="Recharge"
                            onClick={() => window.location.reload()}
                        />
                        <div className="cronometer" id="cronometer"></div>
                    </div>
                </div>
                <div className="w-[20%] flex items-center justify-center flex-col py-[2%] relative">
                    {isPause ? (
                        <img
                            src="https://juegoseml.co/images-recover/play-green.webp"
                            className="w-[65%]"
                            alt="pause"
                            onClick={handleResumeCronometer}
                        />
                    ) : (
                        <img
                            src="https://juegoseml.co/images-recover/pause-green.webp"
                            className="w-[65%]"
                            alt="pause"
                            onClick={handlePauseCronometer}
                        />
                    )}

                    <div className="w-full mr-[7%] flex flex-col justify-center items-center">
                        <div className="sun-counter" id="sun-counter"></div>
                        <div className="cat-counter" id="cat-counter"></div>
                        <div
                            className="bacterium-counter"
                            id="bacterium-counter"
                        ></div>
                        <div className="apple-counter" id="apple-counter"></div>
                    </div>
                </div>
            </div>
            <div className="content-game">
                {isPause && (
                    <div className="fixed w-full h-[65%] z-[10000]"></div>
                )}

                <div
                    id="desler"
                    className="fixed w-full h-[65%] z-[10000] flex justify-center items-center "
                >
                    <svg
                        id="Capa_2"
                        data-name="Capa 2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1119.83 151.48"
                        className="w-[70%] px-[3%] py-[3%] rounded-[10px]"
                    >
                        <defs>
                            <style>
                                {
                                    "\n      .cls-1 {\n        fill: #fff;\n      }\n    "
                                }
                            </style>
                        </defs>
                        <g id="Capa_58" data-name="Capa 58">
                            <path
                                className="chart-e"
                                d="m566.54,14.79c-.52,8.75-1.02,17.03-1.53,25.52-.87-.2-1.48-.3-2.07-.48-8.91-2.64-17.97-4.57-27.24-5.2-10.33-.7-20.45.46-30.03,4.64-13.99,6.12-22.13,16.85-24.69,31.85-1.31,7.66-1.14,15.29.72,22.83,3.47,14.04,12.25,23.38,25.69,28.44,6.57,2.48,13.43,3.62,20.41,3.78,11.38.27,22.66-.76,33.8-3.21.45-.1.92-.14,1.7-.25.38,7.84.76,15.54,1.14,23.31-2.93,1.43-5.99,1.96-9.02,2.56-8.88,1.77-17.87,2.44-26.92,2.64-13.58.29-26.97-.96-40-4.99-10.75-3.33-20.54-8.41-28.82-16.13-10.39-9.67-16.46-21.66-18.7-35.59-1.93-12.02-1.15-23.9,2.77-35.48,5.28-15.61,15.54-27.15,29.55-35.5,10.28-6.13,21.46-9.84,33.21-11.86,16.47-2.83,32.94-2.55,49.35.45,3.51.64,6.95,1.72,10.68,2.66Z"
                            />
                            <path
                                className="chart-s"
                                d="m1038.34,27.71h-50.53c.13-9.24.26-18.24.39-27.16,1.85-.6,128.5-.76,131.63-.21v27.43h-43.24v121.2c-1.9.6-34.12.79-37.94.29-.09-.47-.25-.99-.29-1.51-.05-.72-.02-1.44-.02-2.16,0-38.05,0-76.1,0-114.16v-3.72Z"
                            />
                            <path
                                className="chart-e"
                                d="m93.71,11.77v24.36c-.92.05-1.83.14-2.75.14-17.11,0-34.22,0-51.34,0-1.02,0-2.04,0-3.41,0-.01,11.02-.01,21.77,0,32.83,1.14.06,2.13.17,3.13.17,15.91.01,31.83,0,47.74,0h2.74c.58,2.02.69,21.28.16,24.13h-53.61c-.3,3.31-.12,6.4-.15,9.47-.03,3.04,0,6.08,0,9.11v37.06c-2.05.54-33.82.59-36.2.09V11.77h93.71Z"
                            />
                            <path
                                className="chart-c"
                                d="m858.68,48.1h30.48c.6,4.31,1.19,8.59,1.85,13.35.87-.74,1.37-1.08,1.75-1.52,6.37-7.29,14.53-11.44,23.91-13.13,8.85-1.6,17.7-1.33,26.23,1.88,11.58,4.35,18.28,12.97,21.23,24.75,1.05,4.2,1.53,8.48,1.52,12.82,0,19.74,0,39.49,0,59.23v2.08c-2.04.57-32.8.62-35.36.05v-2.72c0-17.74.04-35.49-.04-53.23-.02-3.09-.27-6.25-.95-9.26-2.2-9.74-9.78-13.27-18.31-12.19-9.76,1.23-15.89,8.38-15.96,18.43-.1,14.95-.03,29.89-.03,44.84,0,3.92,0,7.83,0,11.75v2.29c-1.99.62-32.73.7-35.28.11-.44-33.06.66-66.19-1.06-99.52Z"
                            />
                            <path
                                className="chart-r"
                                d="m848.58,149.33h-33.17c-.77-3.26-1.52-6.49-2.34-9.97-.7.4-1.22.58-1.6.92-7.32,6.71-16.15,9.75-25.84,10.81-7.64.84-15.15.39-22.51-1.94-4.46-1.41-8.55-3.54-12.2-6.49-14.27-11.53-13.21-31.1-2.56-42.07,4.83-4.98,10.7-8.3,17.09-10.78,8.1-3.14,16.54-4.89,25.15-5.72,5.56-.54,11.16-.69,16.74-1.01.55-.03,1.1-.09,1.74-.14.62-1.42.41-2.84.09-4.21-.94-4.07-3.64-6.64-7.34-8.28-3.79-1.68-7.83-2.26-11.91-2.36-11.01-.27-21.61,1.74-31.81,5.9-.59.24-1.18.48-1.78.71-.07.03-.16-.02-.61-.08-2.15-6.03-4.36-12.23-6.64-18.64.95-.45,1.7-.86,2.49-1.17,8.07-3.17,16.47-5.06,25.04-6.24,8.42-1.16,16.88-1.44,25.36-.98,7.62.41,15.07,1.71,22.16,4.69,12.62,5.32,19.93,14.82,22.03,28.28.54,3.46.79,6.99.82,10.49.11,13.75-.04,27.49.16,41.24.07,4.93.86,9.85,1.31,14.78.06.69.09,1.39.15,2.24Zm-73.91-30.09c-.06,4.93,1.62,8.93,6.24,11.23,3.57,1.78,7.39,2.61,11.36,2.36,14.33-.92,24.84-13.82,22.97-28.1-.36-2.74-1.25-3.58-4.06-3.6-2.95-.02-5.91.07-8.86.11-6.21.08-12.21,1.38-17.98,3.59-6.64,2.55-9.7,7.3-9.68,14.42Z"
                            />
                            <path
                                className="chart-c"
                                d="m287.63,125.54c-.17,6.63-.33,12.98-.5,19.62-3.31.84-6.53,1.75-9.78,2.45-9.8,2.11-19.73,2.96-29.74,3.14-10.69.19-21.22-.75-31.45-4.04-6.6-2.12-12.72-5.17-18.1-9.6-9.15-7.53-14.15-17.35-15.71-28.97-1.3-9.69-.26-19.14,3.49-28.2,5.45-13.13,14.88-22.46,27.97-27.8,15.86-6.48,32.24-7.2,48.58-2.16,17.49,5.4,27.29,17.84,30.49,35.65,1.24,6.9,1.21,13.83.07,20.75-.11.69-.31,1.38-.53,2.35h-74.58c-.2,2.11.35,3.77.97,5.39,1.46,3.79,4.09,6.63,7.47,8.8,4.74,3.05,10.03,4.51,15.54,5.23,7.4.98,14.84.7,22.26.2,5.65-.38,11.29-1.01,16.93-1.62,2.12-.23,4.2-.74,6.63-1.18Zm-70.01-37.82c1.26,1.7,2.82,1.66,4.43,1.68,6.31.06,12.61.2,18.92.28,4.79.06,9.58.11,14.37.09,4.08-.02,5.6-1.46,5.97-5.48.07-.79.1-1.6,0-2.39-.99-8.8-5.58-14.99-13.75-18.34-8.1-3.32-18.53-.37-23.52,6.41-2.17,2.95-6.16,13.65-6.46,17.37-.01.16.03.32.04.38Z"
                            />
                            <path
                                className="chart-e"
                                d="m727.21,145.04c-4.13,1.06-8.03,2.17-11.99,3.05-9.63,2.15-19.41,3.17-29.26,3.22-11.17.05-22.18-1.21-32.64-5.51-16.11-6.63-26.18-18.27-28.88-35.66-2.4-15.46.72-29.74,10.39-42.28,5.65-7.32,12.93-12.61,21.54-15.89,14.41-5.5,29.2-6.22,44.01-2.07,17.06,4.79,27.16,16.4,30.99,33.53,1.73,7.71,1.84,15.53.59,23.35-.12.77-.35,1.52-.57,2.47h-72.88c.26,1.5.38,2.75.71,3.93,1.32,4.7,4.3,8.14,8.4,10.66,4.5,2.78,9.49,4.15,14.68,4.84,7.5,1,14.99.52,22.48-.3,6.84-.75,13.61-1.88,20.29-3.52.45-.11.93-.12,1.7-.21.14,6.73.28,13.34.43,20.41Zm-48.45-54.81v.03c3.84,0,7.67,0,11.51,0,2.08,0,4.16.08,6.23-.02,2.37-.11,3.51-1.37,3.01-3.58-1.07-4.67-2.18-9.35-4.54-13.58-2.38-4.28-5.96-7.12-10.82-7.95-2.49-.43-5.09-.55-7.62-.43-7.87.36-13.16,4.53-15.44,12.08-.99,3.28-1.78,6.63-2.6,9.96-.57,2.34.17,3.31,2.53,3.49.56.04,1.12,0,1.68,0,5.36,0,10.71,0,16.07,0Z"
                            />
                            <path
                                className="chart-s"
                                d="m294.86,49.69c1.24-.06,1.94-.12,2.63-.12,12.63,0,25.26.03,37.89-.04,1.71,0,2.76.49,3.69,1.96,6.11,9.65,12.3,19.25,18.47,28.86.38.59.79,1.16,1.43,2.09.59-.86,1.06-1.44,1.4-2.08,5.17-9.84,11.13-19.21,16.98-28.65.93-1.51,1.88-2.21,3.78-2.19,11.99.1,23.98.05,35.97.05h2c.16.24.22.3.24.38.02.07,0,.16-.02.22-.06.15-.12.3-.21.43-.13.2-.29.38-.44.57-12.38,15.27-24.77,30.53-37.15,45.8-.1.12-.16.27-.23.41-.03.07-.05.15-.16.53,12.93,16.97,25.98,34.1,39.26,51.53-1.1.05-1.78.11-2.46.11-12.87,0-25.74-.03-38.61.04-1.72,0-2.74-.54-3.65-1.99-6.36-10.15-13.38-19.89-19.03-30.48-.21-.4-.56-.73-1.07-1.37-.57.92-1.03,1.62-1.46,2.33-5.91,9.96-11.83,19.91-17.72,29.89-.62,1.04-1.28,1.62-2.62,1.62-12.79-.05-25.58-.03-38.37-.04-.29,0-.59-.07-1.34-.17,13.31-16.92,26.41-33.59,39.62-50.39-12.9-16.38-25.69-32.62-38.82-49.29Z"
                            />
                            <path
                                className="chart-e"
                                d="m618.44,148.5h-33.34c-.55-1.77-.73-140.41-.21-143.51,1.8-.56,31.08-.63,33.54-.04v143.55Z"
                            />
                            <path
                                className="chart-c"
                                d="m143.68,148.07c-2.47.57-36.36.53-38.45-.03-.57-33,.73-66.07-.99-99.11,1.61-.54,29.03-.74,32.93-.21.54,5.61,1.08,11.29,1.62,16.93,1.55.11,1.7-.95,2.09-1.64,2.92-5.22,7-9.29,12.12-12.34,6.96-4.13,14.52-5.67,22.54-5.19,1.49.09,2.99.22,4.56.33v28.12c-2.23-.15-4.28-.31-6.34-.44-5.48-.33-10.87.17-16.02,2.17-6.1,2.37-10.68,6.35-12.88,12.69-.98,2.82-1.19,5.77-1.19,8.74.01,15.67,0,31.33,0,47,0,.95,0,1.91,0,2.97Z"
                            />
                            <path
                                className="chart-r"
                                d="m981.36,111.41v-16.04c5.16-.39,10.24-.13,15.31-.18,5.12-.05,10.24-.01,15.35-.01h15.4v16.23h-46.07Z"
                            />
                            <path
                                className="chart-e"
                                d="m969.55,58.43c-.03-8.24,6.08-14.57,14.28-14.5,9.81.09,14.52,7.66,14.47,14.34-.06,8.23-6.13,14.46-14.32,14.49-8.22.04-14.41-6.11-14.44-14.34Zm14.43,12.24c6.96-.02,12.3-5.39,12.28-12.34-.02-6.94-5.4-12.32-12.32-12.34-6.9-.02-12.36,5.36-12.44,12.26-.08,6.97,5.42,12.44,12.48,12.42Z"
                            />
                            <path
                                className="chart-s"
                                d="m983.98,70.67c-7.06.02-12.56-5.45-12.48-12.42.08-6.9,5.54-12.27,12.44-12.26,6.92.02,12.3,5.4,12.32,12.34.02,6.95-5.32,12.31-12.28,12.34Zm-3.01-10.53q3.09-.62,4.35,1.78c.4.78.78,1.57,1.19,2.34.9,1.7.94,1.71,3.41,1.2-.92-1.94-1.83-3.84-2.72-5.7.79-.59,1.42-.96,1.92-1.46,2.3-2.27,1.51-6.43-1.42-7.6-1.52-.61-7.13-.56-8.95.1v14.81h2.22v-5.47Z"
                            />
                            <path d="m980.97,60.13v5.47h-2.22v-14.81c1.81-.66,7.42-.72,8.95-.1,2.93,1.17,3.72,5.34,1.42,7.6-.5.5-1.13.86-1.92,1.46.89,1.87,1.8,3.77,2.72,5.7-2.46.51-2.5.5-3.41-1.2-.41-.77-.79-1.57-1.19-2.34q-1.25-2.4-4.35-1.78Zm.12-2.84c1.67,0,3.09.07,4.51-.02,1.51-.1,2.28-.93,2.29-2.23.01-1.29-.77-2.23-2.21-2.35-1.48-.12-2.97-.03-4.6-.03v4.62Z" />
                            <path
                                className="chart-r"
                                d="m981.09,57.29v-4.62c1.62,0,3.12-.09,4.6.03,1.44.12,2.22,1.06,2.21,2.35-.01,1.3-.78,2.13-2.29,2.23-1.42.09-2.85.02-4.51.02Z"
                            />
                        </g>
                    </svg>
                </div>

                {/* <img
                    id="desler"
                    src="/img/Desler.png"
                    className="absolute z-[10000] w-[30%] hidden"
                    style={{ transform: "translate(37vw, 30vh)" }}
                /> */}

                <img src="https://juegoseml.co/images-recover/grama-top-green.png" alt="" />
                <div id="cover"></div>
                <div
                    id="gameBoard"
                    style={{
                        tableLayout: "fixed",
                        width: returnParameter().width,
                        height: returnParameter().height,
                    }}
                ></div>
                <canvas
                    id="canvas"
                    width={returnParameter().width}
                    height={returnParameter().height}
                >
                    <p>Canvas not supported on your browser.</p>
                </canvas>

                <img
                    src="https://juegoseml.co/images-recover/grama-top-green.png"
                    alt=""
                    className="grama-bottom"
                />
            </div>
        </World1Container>
        </Fragment>
    );
};

export default World4;
