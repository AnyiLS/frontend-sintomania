import useControllers from "controllers";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useViews from "views";
import { StyledContainerScore } from "./score.styles";
import { useEffect, useState } from "react";
import useModels from "models";
import React from "react";

const Score = () => {
    const router = useNavigate();
    const { level, id } = useParams();

    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useScore } = useScreenHooks();
    const { scores } = useScore(level);
    let score = JSON.parse(localStorage.getItem("last_score"))

    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    /** Views */
    const { useComponents } = useViews();
    const { ScoreItem } = useComponents();

    /** States */
    const [background, setBackground] = useState("https://juegoseml.co/images-recover/score.webp");
    const [complete, setComplete] = useState("https://juegoseml.co/images-recover/score-nivel1.webp");
    const [ranking, setRanking] = useState("https://juegoseml.co/images-recover/rankin-1.webp");
    const [sound, setSound] = useState(null);


    //sonidos
    useEffect(() => {
        let audio = new Audio('https://juegoseml.co/images-recover/sonidos/sonido-menu.mp3');
        audio.loop = true;
        setSound(audio);
        
        let isPauseAudio = localStorage.getItem('isPauseAudio');
        if (isPauseAudio === 'false') {
            audio.play();
        }

        return () => audio.pause();
    }, []);

    useEffect(() => {
        switch (level) {
            case "1":
                setBackground("https://juegoseml.co/images-recover/score.webp");
                setComplete('https://juegoseml.co/images-recover/score-nivel1.webp');
                setRanking('https://juegoseml.co/images-recover/rankin-1.webp');
                break;
            case "2":
                setBackground("https://juegoseml.co/images-recover/score_fondo_2.webp");
                setComplete('https://juegoseml.co/images-recover/complete-grey.webp');
                setRanking('https://juegoseml.co/images-recover/ranking-grey.webp');
                break;
            case "4":
                setBackground("https://juegoseml.co/images-recover/score-fondo-purple.png");
                setComplete('https://juegoseml.co/images-recover/complete-purple.png');
                setRanking("https://juegoseml.co/images-recover/ranking-purple.png");
                break;
            case "3":
                setBackground("https://juegoseml.co/images-recover/background-green-score.png");
                setComplete("https://juegoseml.co/images-recover/complete-green.png");
                setRanking("https://juegoseml.co/images-recover/green-ranking.png");
                break;
                
        }
    }, [level]);

    return (
        <StyledContainerScore background={background}>
            <div className="relative flex flex-col justify-center items-center">
                <div className="relative flex flex-col justify-center items-center mt-[8%]">
                    <img
                        src={complete}
                        className="w-[90%] max-w-[500px]  left-[5%]"
                        id="cambio"
                    />

                    {/* estrellas */}
                    {score > 1000 && (
                        <img
                            className="absolute w-[13%] left-[27%] top-[28%]"
                            src="https://juegoseml.co/images-recover/strelaa1.png"
                            alt="estrella"
                        />
                    )}
                    {score > 1500 && (
                        <img
                            className="absolute w-[17%] left-[42%] top-[28%]"
                            src="https://juegoseml.co/images-recover/strelaa1.png"
                            alt="estrella1"
                        />
                    )}

                    {score > 2000 && (
                        <img
                            className="absolute w-[13%] left-[60.9%] top-[28%]"
                            src="https://juegoseml.co/images-recover/strelaa1.png"
                            alt="estrella2"
                        />
                    )}

                    <h3>{score}</h3>
                </div>

                <div className="relative flex flex-col justify-center items-center mt-[10%] pl-[1%] pr-[4%]">
                    <img
                        src={ranking}
                        className="w-full max-w-[500px]"
                        id="cambio"
                    />
                    <div className="score-list">
                        {scores.map((item, index) => (
                            <ScoreItem
                                name={item.user.name}
                                score={item.score}
                                isFirst={index === 0}
                                image={item.user.image_url}
                                level={parseInt(level)}
                                key={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Onclick */}
                <div
                    className="w-[42%] h-[7%]  absolute top-[87%] right-[30%]"
                    onClick={() => {
                        if(level === "4" && id === "3") {
                            router("/finish")
                        } else {
                            router(`/siguientenivel1/${level}`)
                        }
                    }}
                ></div>
                <div
                    className="w-[11%] h-[7%]  absolute top-[87%] right-[16%]"
                    onClick={() => router("/worlds")}
                ></div>
                <a
                    className="w-[11%] h-[7%] absolute top-[87%] right-[4%]"
                    href={`/world-${level}`}
                ></a>
            </div>
        </StyledContainerScore>
    );
};

export default Score;
