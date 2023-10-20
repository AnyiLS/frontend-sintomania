/** Local Modules */
import useControllers from "controllers";
import useViews from "views";
/** Styles */
import { World1Container } from "styles/pages/world-1.styles";
import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSelectors from "models/selectors";

const World1 = () => {
    /** Variables */
    const router = useNavigate();
    const {id} = useParams();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useWorld1 } = useScreenHooks();
    const {
        timeLeft,
        handlePauseCronometer,
        handleResumeCronometer,
        isPause,
    } = useWorld1();

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

    const [background, setBackground] = useState('https://juegoseml.co/images-recover/video-gif.mp4');
    const [modal, setModal] = useState(true);

    useEffect(() => {
        localStorage.setItem("score", 0);
        document.body.style.overflow = "hidden";
        let haveGif = JSON.parse(localStorage.getItem("gif_level_1"));
        let sabias = JSON.parse(localStorage.getItem("gif_sabias"));
        if(!sabias) {
            window.localStorage.setItem(
                "gif_sabias",
                JSON.stringify({ gif: 1 })
            );
        }

        console.log("id", id)


        switch (id) {
            case "1":
                setBackground('https://juegoseml.co/images-recover/video-gif.mp4');
                break;

            case "2":
                setBackground('https://juegoseml.co/images-recover/monster-2.mp4');
                break;

            case "3":
                setBackground('https://juegoseml.co/images-recover/monster-3.mp4');
                break;

            case "4":
                setBackground('https://juegoseml.co/images-recover/monster-4.mp4');
                break;

            default:
                break;
        }

        if (haveGif) {
            
        } else {
            window.localStorage.setItem(
                "gif_level_1",
                JSON.stringify({ gif: 1 })
            );

            setBackground("url('/img/monster-1.gif')");
        }

        
    }, []);
    
    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 4500)
    }, [])

    //sonidos
    useEffect(() => {
        let audio = new Audio(
            id === "1" ?
                'https://juegoseml.co/images-recover/sonidos/lluviaM1.wav' :
                id === "2" ?
                'https://juegoseml.co/images-recover/sonidos/tormentaMN1.wav' :
                'https://juegoseml.co/images-recover/sonidos/tormentaMN1.wav'
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
                        <img src="https://juegoseml.co/images-recover/boton-alerta-mundo1.png" alt="" className="w-[80%] max-w-[450px]"/>
                    </div>
                )
            }
            <World1Container>
            <audio
                className="opacity-0"
                id="clear"
                src="https://juegoseml.co/images-recover/sonidos/arastrar.wav"
            ></audio>
            <audio src="https://juegoseml.co/images-recover/sonidos/arastrar.wav" id='cronoaudio'></audio>
            <div className="monster-container" >
                <video src={background} autoPlay muted loop className="w-full object-cover"></video>
                <div
                    className="w-[30%]  ml-[2%] absolute top-0 left-0"
                    
                >
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
                <div className="w-[20%] flex items-center justify-center flex-col py-[2%] absolute top-0 right-0">
                    {isPause ? (
                        <img
                            src="https://juegoseml.co/images-recover/play.webp"
                            className="w-[65%]"
                            alt="pause"
                            onClick={handleResumeCronometer}
                        />
                    ) : (
                        <img
                            src="https://juegoseml.co/images-recover/boton-pausa.webp"
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
                        viewBox="0 0 1053 300"
                        className="w-[70%] px-[3%] pt-[3%] rounded-[10px]"
                    >
                        <defs>
                            <style>
                                {
                                    "\n      .cls-1 {\n        fill: #fff;\n      }\n    "
                                }
                            </style>
                        </defs>
                        <g id="SATELITE">
                            <path
                                className="chart-d"
                                d="m.12.63C3.05.42,5.6.07,8.15.06c28.63-.01,57.26-.2,85.89.13,21.27.25,41.22,5.67,59.37,17.11,17.08,10.77,29.56,25.44,37.71,43.88,5.76,13.01,9.87,26.49,11.72,40.6,2.58,19.72.68,39.06-5.4,57.98-4.55,14.19-10.89,27.46-20.24,39.18-14.29,17.9-32.87,28.81-55.14,33.68-7.76,1.7-15.63,2.39-23.54,2.83-20.77,1.15-41.56,1.02-62.36.91-10.47-.06-20.95-.12-31.42-.16-3.72-.01-4.75-.94-4.75-4.63,0-12.47.02-24.94.03-37.41.02-20.54.03-41.09.04-61.63C.09,89.6.1,46.67.12,3.75c0-.94,0-1.88,0-3.12Zm41.43,41.66c.08,1.42.15,2.44.2,3.47.18,3.91.49,7.81.5,11.72.04,18.86.05,37.72-.04,56.57-.09,20.93-.3,41.87-.46,62.8-.03,4.15-.1,8.31-.06,12.46.03,2.94,1.13,4.02,4.02,4.27.64.05,1.28.06,1.92.06,12.71-.03,25.42-.03,38.13-.12,7.59-.05,15.19-.16,22.69-1.55,12.11-2.25,22.8-7.38,31.43-16.25,13.94-14.33,20.72-31.82,21.85-51.57.69-12.16-1.13-24.08-4.79-35.67-7.12-22.55-22.04-37.11-44.91-43.46-10.89-3.02-22.03-3.78-33.25-3.62-10.15.14-20.29.59-30.44.88-2.14.06-4.29,0-6.8,0Z"
                            />
                            <path
                                className="chart-e"
                                d="m793.06,166.93c-8.48,0-16.95.01-25.43,0-15.75-.03-31.5-.08-47.25-.12-4.48,0-8.95-.02-13.43.02-.87,0-1.76.14-2.6.37-2.84.79-3.93,2.49-3.43,5.37.18,1.02.42,2.05.83,2.99,6.87,16.06,18.68,25.77,36.23,27.99,9.67,1.23,19.29,1.04,28.8-1.43,7.38-1.91,14.06-5.22,20.04-9.94.44-.35.86-.71,1.3-1.06,2.92-2.26,4.77-2.15,7.31.51,6.02,6.3,12.01,12.62,18.02,18.94.11.12.22.23.33.35,2.79,3.06,2.73,4.72-.37,7.43-7.05,6.17-15.05,10.79-23.7,14.31-10.36,4.23-21.13,6.77-32.27,7.76-13.34,1.2-26.56.59-39.43-3.25-27.25-8.13-45.37-25.8-53.66-53.02-5.47-17.94-6.69-36.31-2.45-54.7,5.34-23.15,17.93-41.27,38.68-53.29,9.67-5.61,20.26-8.57,31.33-9.89,8.2-.98,16.41-1.02,24.65-.48,29.96,1.97,55.67,21.33,65.16,49.19,2.49,7.33,3.6,14.89,4.02,22.57.39,7.1.68,14.21,1.01,21.31.05,1.04.09,2.08.05,3.11-.14,3.1-1.64,4.77-4.74,4.92-3.35.16-6.71.05-10.07.05-6.32,0-12.63,0-18.95,0,0-.01,0-.03,0-.04Zm-91.11-34.08c4.31.54,85.16.32,86.91-.25-1.02-3.75-1.57-7.66-3.46-11.14-5.21-9.56-13.03-15.8-23.68-18.35-7.55-1.81-15.2-1.83-22.87-1.01-16.18,1.72-28.09,9.7-35.61,24.19-1.07,2.06-1.47,4.16-1.29,6.57Z"
                            />
                            <path
                                className="chart-s"
                                d="m329.79,166.54c-7.36,0-14.71,0-22.07,0-10.79,0-21.59-.01-32.38.02-1.43,0-2.88.12-4.29.37-2.94.54-4.13,2.25-3.48,5.16.41,1.86,1,3.71,1.74,5.46,5.7,13.42,15.81,21.63,29.95,24.79,10.07,2.26,20.23,2.87,30.45.84,9.11-1.81,17.29-5.61,24.54-11.39,1.24-.99,2.52-1.65,4.13-1.6,1.45.04,2.56.67,3.57,1.69,5.63,5.67,11.3,11.31,16.95,16.97.85.85,1.73,1.67,2.52,2.56,2.05,2.31,1.98,4.06-.27,6.22-.75.72-1.57,1.36-2.39,1.99-12.42,9.6-26.43,15.79-41.72,19.09-17.66,3.81-35.26,3.59-52.61-1.78-17.91-5.54-32.63-15.61-43.2-31.31-6.76-10.05-10.63-21.23-12.69-33.09-1.37-7.89-2.15-15.84-1.87-23.85.71-20.47,6.66-39.14,19.72-55.17,10.47-12.86,24.22-20.63,40.14-24.7,11.86-3.04,23.94-4.16,36.14-3.35,34.29,2.28,60.26,25.46,67.92,56.52,1.96,7.94,3.03,16,3.31,24.17.14,3.99.09,7.99.11,11.98,0,.56-.04,1.12-.1,1.67-.42,3.98-1.95,5.79-5.89,6.4-2.52.39-5.1.48-7.65.49-15.83.04-31.66.02-47.49.02-1.04,0-2.07,0-3.11,0,0-.06,0-.11,0-.17Zm-61.36-34.18c.96,1.32,2.35,1.19,3.71,1.19,26.05-.02,52.09-.03,78.14-.04.56,0,1.12,0,1.68-.04,3.52-.27,4.71-2.34,2.99-5.37-1.81-3.19-3.7-6.34-5.65-9.46-6.79-10.88-16.83-16.19-29.45-17.03-6.58-.44-13.07.32-19.55,1.36-8.36,1.35-15.42,5.15-21.18,11.26-2.67,2.83-4.96,6.04-7.35,9.13-1.99,2.58-3.31,5.45-3.35,8.99Z"
                            />
                            <path
                                className="chart-l"
                                d="m529.89,113.31c-.79-.59-1.56-1.16-2.31-1.73-7.47-5.7-15.65-9.9-24.91-11.81-10.34-2.14-20.51-1.24-30.55,1.76-1.53.46-3.07.94-4.5,1.63-7.34,3.51-9.06,10.98-7.74,16.67.95,4.1,3.61,6.98,7.56,8.36,4.59,1.6,9.25,3.07,13.95,4.3,8.82,2.31,17.87,3.49,26.88,4.83,7.12,1.06,14.21,2.25,21.02,4.7,17.15,6.16,26.74,18.43,29.31,36.35,1.04,7.27,1.05,14.5-.65,21.67-2.26,9.54-7.21,17.51-14.33,24.19-9.75,9.15-21.35,14.54-34.5,16.51-12.14,1.82-24.38,2.05-36.6.92-16.15-1.49-30.81-6.87-43.48-17.2-3.22-2.63-6.44-5.26-9.64-7.91-2.52-2.08-3.11-4.95-1.56-7.89.82-1.55,1.8-3.02,2.77-4.49,3.51-5.34,7.04-10.67,10.59-15.99.44-.66.95-1.3,1.52-1.84,1.34-1.27,2.74-1.5,4.39-.61.97.52,1.88,1.22,2.71,1.95,11.56,10.2,25.16,15.91,40.28,18.2,4.1.62,8.25,1.1,12.39,1.26,10.5.42,18.97-3.66,25.27-12.1,1.59-2.14,2.67-4.55,3.02-7.22.68-5.17-1.35-9.2-5.37-12.33-3.3-2.56-7.13-3.93-11.17-4.7-4.71-.89-9.46-1.54-14.17-2.45-9.57-1.84-19.14-3.68-28.66-5.74-6.1-1.31-12.05-3.19-17.61-6.12-13.88-7.32-21.28-18.87-22.43-34.47-.47-6.43-.05-12.78,1.71-19,3.27-11.6,10.45-20.15,20.78-26.15,9.3-5.4,19.33-8.84,29.94-10.41,14.96-2.21,29.84-1.44,44.49,2.32,10.58,2.72,20.05,7.84,28.88,14.2.39.28.76.59,1.11.91,2.32,2.17,2.51,4.15.67,6.79-.14.2-.28.39-.43.57-5.94,7.12-11.88,14.24-17.82,21.36-.2.23-.46.41-.79.71Z"
                            />
                            <path
                                className="chart-e"
                                d="m899.5,87.41c2.59-1.94,5.31-3.71,7.47-6.22,5.6-6.5,12.39-11.27,20.64-13.83,6.91-2.14,14.01-2.5,21.13-1.78,4.2.42,8.36,1.32,12.52,2.05,3.82.67,7.37,2.11,10.77,3.91,3.88,2.06,7.74,4.18,11.57,6.33,2.95,1.66,3.61,3.68,2.33,6.85-.36.89-.85,1.72-1.29,2.57-3.87,7.62-7.74,15.24-11.63,22.85-.51.99-1.01,2.01-1.67,2.9-1.21,1.64-2.49,1.99-4.41,1.23-.96-.38-1.88-.89-2.73-1.47-7.06-4.81-14.88-7.44-23.4-7.56-19.91-.27-36.67,12.37-39.44,33.65-.66,5.05-.51,10.21-.52,15.33-.05,24.46-.02,48.92-.03,73.38,0,1.36.02,2.72-.11,4.07-.27,2.88-1.51,4.24-4.38,4.42-2.62.16-5.27-.05-7.9-.05-7.2,0-14.39.02-21.59.04-5.31.02-6.29-.94-6.28-6.27.03-19.66.08-39.33.12-58.99.04-19.98.09-39.97.1-59.95,0-11.27-.1-22.54-.12-33.81,0-1.35.15-2.71.39-4.04.35-1.98,1.69-3.04,3.64-3.26,1.03-.12,2.08-.12,3.11-.02,7.81.72,15.64,1,23.48.73.16,0,.32,0,.48,0,5.12.14,6.81,2.02,6.76,7.12-.03,3.17.24,6.34.38,9.51l.62.29Z"
                            />
                            <path
                                className="chart-r"
                                d="m627.16,118.38c0,34.29,0,68.58.01,102.87,0,3.27.12,6.55.24,9.82.13,3.62-1.06,5.04-4.71,5.05-8.96.04-17.91-.02-26.87-.04-1.36,0-2.72.06-4.07-.05-2.01-.17-3.02-1.13-3.34-3.12-.16-1.02-.21-2.07-.21-3.1-.01-36.85-.03-73.7,0-110.55.02-22.54.12-45.08.15-67.62.02-11.91-.03-23.82-.06-35.73,0-3.28-.08-6.55-.09-9.83,0-.88.03-1.76.16-2.63.3-2.04,1.21-2.94,3.25-3.22.71-.1,1.44-.08,2.15-.08,9.28-.03,18.55-.06,27.83-.08,4.62-.01,5.68.98,5.68,5.59,0,23.74-.05,47.48-.07,71.22-.01,13.83,0,27.66,0,41.48h-.05Z"
                            />
                            <path
                                className="chart-c"
                                d="m1018.57,77.85c-19.7-.05-34.74-15.01-34.58-34.65.19-21.64,17.06-34.76,34.95-34.54,19.61.25,34.36,15.08,34.32,34.91-.04,19.45-15.1,34.32-34.7,34.27Zm29.21-34.66c-.01-16.53-12.63-29.12-29.17-29.12-16.5,0-29.15,12.66-29.16,29.17-.01,16.52,12.61,29.33,29.09,29.24,18.59-.1,29.59-14.66,29.24-29.29Z"
                            />
                            <path
                                className="chart-rs"
                                d="m1034.03,61.36h-7.4c-1.75-3.44-3.78-6.73-5.14-10.29-1.34-3.5-3.43-4.86-7.03-4.2-.75.14-1.55.02-2.65.02v14.42h-6.13V24.06c.23-.13.36-.27.5-.27,5.67-.03,11.34-.06,17.01-.03,1.03,0,2.07.24,3.07.49,4.68,1.17,7.54,4.48,8.04,9.28.64,6.14-2.03,10.44-6.69,12.24-.36.14-.67.38-1.14.66,2.48,4.91,4.92,9.73,7.55,14.93Zm-22.02-20.73c3.97,0,7.64.23,11.27-.07,3.19-.26,4.75-2.29,4.75-5.25,0-2.88-1.64-5.05-4.74-5.3-3.69-.3-7.42-.07-11.27-.07v10.68Z"
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

                <img src="https://juegoseml.co/images-recover/grama-bottom.webp" alt="" />
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
                    src="https://juegoseml.co/images-recover/grama-bottom.webp"
                    alt=""
                    className="grama-bottom"
                />
            </div>
        </World1Container>
        </Fragment>
    );
};

export default World1;
