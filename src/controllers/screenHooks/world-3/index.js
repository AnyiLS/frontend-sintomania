import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useApi from 'api';
import useModels from 'models';
import { useCookies } from 'react-cookie';

const useWorld3 = () => {
    const { id } = useParams();

    /** Actions */
    const { useActions } = useApi();
    const { dispatch, useGameActions } = useActions();
    const { actSetScore } = useGameActions();

    /** Variables */
    const router = useNavigate();
    let timeLeft = 130;

    /** State */
    const [intervalId, setIntervalId] = useState(null);
    const [isPause, setIsPause] = useState(false);
    const [audio, setAudio] = useState(
        new Audio(
            'https://juegoseml.co/images-recover/sonidos/tiempo-reloj.wav'
        )
    );
    const [isScore, setIsScore] = useState(false);

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    const handleStartCronometer = () => {
        let cronometer = document.getElementById('cronometer');
        let cronometerInterval = setInterval(() => {
            if (cronometer) {
                if (timeLeft - 1 === 0) {
                    audio.pause();
                    router(`/error/4/${id}`);
                } else {
                    if (timeLeft - 1 === 10) {
                        audio.play();
                        timeLeft--;
                        document.getElementById('cronometer').innerText =
                            timeLeft;
                    } else {
                        timeLeft--;
                        document.getElementById('cronometer').innerText =
                            timeLeft;
                    }
                }
            }
        }, 1000);

        setIntervalId(cronometerInterval);
    };

    const handlePauseCronometer = () => {
        setIsPause(true);
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const handleResumeCronometer = () => {
        console.log(isPause);
        setIsPause(false);
        let cronometer = document.getElementById('cronometer');
        let cronometerInterval = setInterval(() => {
            if (cronometer) {
                if (timeLeft - 1 === 0) {
                    audio.pause();
                    router(`/error/4/${id}`);
                } else {
                    if (timeLeft - 1 === 10) {
                        audio.play();
                        timeLeft--;
                        document.getElementById('cronometer').innerText =
                            timeLeft;
                    } else {
                        timeLeft--;
                        document.getElementById('cronometer').innerText =
                            timeLeft;
                    }
                }
            }
        }, 1000);
        setIntervalId(cronometerInterval);
    };

    const setLocalStorageLevels = (level2, level3) => {
        localStorage.setItem('levels4', JSON.stringify({ level2, level3 }));
    };

    const updateGif = () => {
        let gif = JSON.parse(localStorage.getItem('gif_level_4'));
        gif.gif = (gif.gif % 4) + 1;
        localStorage.setItem('gif_level_4', JSON.stringify(gif));
    };

    const handleSuccess = (id) => {
        switch (id) {
            case '1':
                setLocalStorageLevels(false, true);
                break;

            case '2':
            case '3':
                setLocalStorageLevels(false, false);
                break;
        }

        updateGif();
        window.location.href = `/lograste/4/${id}`;
    };

    const handleScore = (score, id) => {
        let last_score = JSON.parse(localStorage.getItem('last_score'));
        last_score = last_score ? parseInt(last_score) + score : score;
        localStorage.setItem('last_score', last_score);

        dispatch(
            actSetScore({
                data: { score, level: 4, world_level: id },
                onError: (error) => console.error(error),
                onSuccess: () => handleSuccess(id),
            })
        );
    };

    const [coockies] = useCookies(['score']);
    const [isManage, setIsManage] = React.useState(false);

    React.useEffect(() => {
        handleStartCronometer();
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

        if (id === '1') {
            localStorage.setItem('last_score', 0);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    React.useEffect(() => {
        if (!isManage && coockies.score > 1500) {
            setIsPause(true);
            setIsManage(true);
            console.log(intervalId);
            clearInterval(intervalId);
            handleScore(coockies.score, id);
        }
    }, [coockies.score]);

    return {
        timeLeft,
        handlePauseCronometer,
        handleResumeCronometer,
        isPause,
    };
};

export default useWorld3;
