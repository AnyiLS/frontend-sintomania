import { keyframes } from "styled-components";

export const zoomIn = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
`;

export const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(359deg);
    }
`;

export const translateToRight = keyframes`
    0% {
        -webkit-transform: translate(-100vw, 100%);
        -moz-transform: translate(-100vw, 100%);
        transform: translate(-100vw, 100%);
    }

    50% {
        -webkit-transform: translate(100vw, calc(100% * -6));
        -moz-transform: translate(100vw, calc(100% * -6));
        transform: translate(100vw, calc(100% * -6));
    }

    100% {
        -webkit-transform: translate(-100vw, 100%);
        -moz-transform: translate(-100vw, 100%);
        transform: translate(-100vw, 100%);
    }
`;

export const upToDown = keyframes`
    0% {
        -webkit-transform: translateY(-10px);
        -moz-transform: translateY(-10px);
        transform: translateY(-10px);
    }

    50% {
        -webkit-transform: translateY(10px);
        -moz-transform: translateY(10px);
        transform: translateY(10px);
    }

    100% {
        -webkit-transform: translateY(-10px);
        -moz-transform: translateY(-10px);
        transform: translateY(-10px);
    }
`;

export const leftToRight = keyframes`
    0% {
        -webkit-transform: translateX(-20px);
        -moz-transform: translateX(-20px);
        transform: translateX(-20px);
    }

    50% {
        -webkit-transform: translateX(20px);
        -moz-transform: translateX(20px);
        transform: translateX(20px);
    }

    100% {
        -webkit-transform: translateX(-20px);
        -moz-transform: translateX(-20px);
        transform: translateX(-20px);
    }
`;