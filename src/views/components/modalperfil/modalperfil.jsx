import axios from "axios";
import { useDispatch } from "react-redux";
import useGameActions from "api/actions/game";

const ModalPerfil = ({
    name,
    email,
    phone,
    pharmacy_name,
    chain,
    onClose,
    image,
}) => {
    const { actSetImage } = useGameActions();
    let dispatch = useDispatch();

    const handleChange = (e) => {
        let file = e.target.files[0];

        let formData = new FormData();
        formData.append("file", file);

        dispatch(
            actSetImage({
                formData,
                onSuccess: (data) => {},
                onError: (error) => console.log(error),
            })
        );
    };

    console.log("image", image)

    return (
        <div className="bg-[#0000007a] absolute w-full bottom-[0%] z-[10000] right-[0%] top-[0%] left-[0%] m-auto flex items-center justify-center">
            {/* <img
                src="/img/modal.png"
                alt=""
                
            /> */}
            <input
                type="file"
                id="file-input"
                style={{ display: "none" }}
                onChange={handleChange}
            />

            {/* svg */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 634.33 722.03"
                className="tablet:w-auto mobile:w-[90%] max-w-[500px]"
            >
                <defs>
                    <style>
                        {
                            "\n      .cls-1 {\n        fill: none;\n      }\n\n      .cls-2 {\n        fill: #0e5a66;\n        font-family: Interstate-Bold, 'Interstate Bold';\n        font-weight: 700;\n      }\n\n      .cls-2, .cls-3 {\n        font-size: 16px;\n      }\n\n      .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12 {\n        fill: #050400;\n      }\n\n      .cls-4, .cls-13 {\n        opacity: .06;\n      }\n\n      .cls-14 {\n        fill: url(#radial-gradient-3);\n      }\n\n      .cls-14, .cls-6, .cls-7, .cls-15, .cls-16, .cls-17, .cls-8, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24 {\n        mix-blend-mode: soft-light;\n      }\n\n      .cls-14, .cls-7, .cls-25, .cls-26, .cls-27, .cls-28, .cls-29, .cls-30, .cls-31, .cls-32, .cls-12 {\n        opacity: .5;\n      }\n\n      .cls-33 {\n        opacity: .6;\n      }\n\n      .cls-33, .cls-34, .cls-26, .cls-27, .cls-28, .cls-29, .cls-31, .cls-32, .cls-11, .cls-12 {\n        mix-blend-mode: overlay;\n      }\n\n      .cls-35, .cls-10, .cls-36 {\n        opacity: .1;\n      }\n\n      .cls-37 {\n        fill: #f9f1e7;\n      }\n\n      .cls-38 {\n        fill: #007be4;\n      }\n\n      .cls-39 {\n        fill: #f4f4f1;\n      }\n\n      .cls-40, .cls-17, .cls-3, .cls-41 {\n        fill: #fff;\n      }\n\n      .cls-42 {\n        fill: #ffd817;\n      }\n\n      .cls-43 {\n        fill: #6639bc;\n      }\n\n      .cls-44 {\n        fill: #7f00db;\n      }\n\n      .cls-45 {\n        fill: #9075c5;\n      }\n\n      .cls-46 {\n        fill: #b6bcf0;\n      }\n\n      .cls-47 {\n        fill: #ae8b0e;\n      }\n\n      .cls-48 {\n        fill: #b1a3ff;\n      }\n\n      .cls-49 {\n        fill: #dfab17;\n      }\n\n      .cls-50 {\n        fill: #c4b8e4;\n      }\n\n      .cls-51 {\n        fill: #d0dcdd;\n      }\n\n      .cls-52 {\n        fill: #0e9bbc;\n      }\n\n      .cls-53 {\n        fill: #202020;\n      }\n\n      .cls-54 {\n        fill: #9b4de0;\n      }\n\n      .cls-55 {\n        fill: #3c196e;\n      }\n\n      .cls-56 {\n        fill: #4c3a8f;\n      }\n\n      .cls-57 {\n        fill: #5d4a9b;\n      }\n\n      .cls-58 {\n        fill: #7860ed;\n      }\n\n      .cls-6, .cls-16, .cls-59 {\n        opacity: .4;\n      }\n\n      .cls-60 {\n        fill: #606060;\n      }\n\n      .cls-60, .cls-10, .cls-61, .cls-62, .cls-36 {\n        mix-blend-mode: multiply;\n      }\n\n      .cls-15 {\n        fill: url(#radial-gradient-2);\n      }\n\n      .cls-63 {\n        fill: url(#radial-gradient-4);\n      }\n\n      .cls-63, .cls-64, .cls-65, .cls-66, .cls-67, .cls-68, .cls-69, .cls-9, .cls-70 {\n        mix-blend-mode: screen;\n      }\n\n      .cls-63, .cls-64, .cls-65, .cls-66, .cls-67, .cls-68, .cls-70 {\n        opacity: .3;\n      }\n\n      .cls-64 {\n        fill: url(#radial-gradient-9);\n      }\n\n      .cls-65 {\n        fill: url(#radial-gradient-6);\n      }\n\n      .cls-66 {\n        fill: url(#radial-gradient-8);\n      }\n\n      .cls-67 {\n        fill: url(#radial-gradient-7);\n      }\n\n      .cls-68 {\n        fill: url(#radial-gradient-5);\n      }\n\n      .cls-16 {\n        fill: url(#New_Pattern_Swatch_2);\n      }\n\n      .cls-18 {\n        fill: url(#linear-gradient-14);\n      }\n\n      .cls-19 {\n        fill: url(#linear-gradient-12);\n      }\n\n      .cls-20 {\n        fill: url(#linear-gradient-10);\n      }\n\n      .cls-34 {\n        fill: url(#radial-gradient);\n      }\n\n      .cls-34, .cls-71, .cls-11 {\n        opacity: .7;\n      }\n\n      .cls-69 {\n        fill: url(#linear-gradient-2);\n      }\n\n      .cls-21 {\n        fill: url(#linear-gradient-4);\n      }\n\n      .cls-22 {\n        fill: url(#linear-gradient-6);\n      }\n\n      .cls-23 {\n        fill: url(#linear-gradient-8);\n      }\n\n      .cls-72 {\n        letter-spacing: 0em;\n      }\n\n      .cls-73 {\n        opacity: .2;\n      }\n\n      .cls-74 {\n        opacity: .6;\n      }\n\n      .cls-75 {\n        opacity: .8;\n      }\n\n      .cls-26 {\n        fill: url(#linear-gradient-5);\n      }\n\n      .cls-27 {\n        fill: url(#linear-gradient-7);\n      }\n\n      .cls-28 {\n        fill: url(#linear-gradient-3);\n      }\n\n      .cls-29 {\n        fill: url(#linear-gradient-9);\n      }\n\n      .cls-30 {\n        mix-blend-mode: color-dodge;\n      }\n\n      .cls-13 {\n        fill: url(#New_Pattern_Swatch_3);\n      }\n\n      .cls-31 {\n        fill: url(#linear-gradient-11);\n      }\n\n      .cls-32 {\n        fill: url(#linear-gradient-13);\n      }\n\n      .cls-3 {\n        filter: url(#drop-shadow-2);\n      }\n\n      .cls-3, .cls-41 {\n        font-family: Interstate-Black, Interstate;\n        font-weight: 800;\n      }\n\n      .cls-76 {\n        isolation: isolate;\n      }\n\n      .cls-77 {\n        letter-spacing: -.03em;\n      }\n\n      .cls-61 {\n        opacity: .4;\n      }\n\n      .cls-62 {\n        opacity: .3;\n      }\n\n      .cls-78 {\n        letter-spacing: -.03em;\n      }\n\n      .cls-41 {\n        filter: url(#drop-shadow-1);\n        font-size: 40px;\n      }\n\n      .cls-36 {\n        fill: url(#linear-gradient);\n      }\n    "
                        }
                    </style>
                    <pattern
                        id="New_Pattern_Swatch_3"
                        data-name="New Pattern Swatch 3"
                        x={0}
                        y={0}
                        width={355}
                        height={355}
                        patternTransform="translate(-2697.43 -3774.21) scale(.51)"
                        patternUnits="userSpaceOnUse"
                        viewBox="0 0 355 355"
                    >
                        <g>
                            <rect
                                className="cls-1"
                                y={0}
                                width={355}
                                height={355}
                            />
                            <path
                                className="cls-25"
                                d="m4,2c0,20.99,17.01,38,38,38S80,22.99,80,2c0-.67-.02-1.34-.05-2H4.05c-.03.66-.05,1.33-.05,2Z"
                            />
                            <path d="m4,45c-1.38,0-2.72.19-4,.52v30.95c1.28.33,2.62.52,4,.52,8.84,0,16-7.16,16-16s-7.16-16-16-16Z" />
                            <circle cx={288.5} cy={45.5} r={25.5} />
                            <path
                                className="cls-35"
                                d="m155.5,34C179.75,34,200.75,20.18,211.12,0h-111.24c10.36,20.18,31.37,34,55.62,34Z"
                            />
                            <path
                                className="cls-35"
                                d="m155.5,264c-34.52,0-62.5,27.98-62.5,62.5,0,10.27,2.49,19.95,6.88,28.5h111.24c4.39-8.55,6.88-18.23,6.88-28.5,0-34.52-27.98-62.5-62.5-62.5Z"
                            />
                            <circle cx={62.5} cy={83.5} r={25.5} />
                            <circle cx={333.5} cy={19.5} r={10.5} />
                            <circle cx={72.5} cy={306.5} r={10.5} />
                            <circle cx={54.5} cy={254.5} r={20.5} />
                            <circle
                                className="cls-71"
                                cx={269.5}
                                cy={295.5}
                                r={38.5}
                            />
                            <circle
                                className="cls-73"
                                cx={203}
                                cy={168}
                                r={50.5}
                            />
                            <circle
                                className="cls-59"
                                cx={155}
                                cy={77}
                                r={35.5}
                            />
                            <circle
                                className="cls-74"
                                cx={110}
                                cy={137}
                                r={28.5}
                            />
                            <circle
                                className="cls-74"
                                cx={282}
                                cy={113}
                                r={28.5}
                            />
                            <circle
                                className="cls-59"
                                cx={283}
                                cy={213}
                                r={35.5}
                            />
                            <circle
                                className="cls-59"
                                cx={108}
                                cy={223}
                                r={35.5}
                            />
                            <circle
                                className="cls-71"
                                cx={221}
                                cy={91}
                                r={17.5}
                            />
                            <circle
                                className="cls-71"
                                cx={173}
                                cy={234}
                                r={17.5}
                            />
                            <circle
                                className="cls-71"
                                cx={333}
                                cy={101}
                                r={17.5}
                            />
                            <path
                                className="cls-75"
                                d="m0,256.12v48.75c10.42-3.2,18-12.9,18-24.38S10.42,259.33,0,256.12Z"
                            />
                            <path d="m231,4c0,8.84,7.16,16,16,16s16-7.16,16-16c0-1.38-.19-2.72-.52-4h-30.95c-.33,1.28-.52,2.62-.52,4Z" />
                            <path
                                className="cls-73"
                                d="m20,113C12.94,113,6.2,114.34,0,116.77v102.47c6.2,2.42,12.94,3.77,20,3.77,30.38,0,55-24.62,55-55s-24.62-55-55-55Z"
                            />
                            <path
                                className="cls-25"
                                d="m79.95,355c-1.04-20.06-17.63-36-37.95-36s-36.91,15.94-37.95,36h75.89Z"
                            />
                            <path
                                className="cls-73"
                                d="m355,116.77c-20.48,8-35,27.92-35,51.23s14.52,43.23,35,51.23v-102.47Z"
                            />
                            <path d="m355,45.52c-6.9,1.78-12,8.02-12,15.48s5.1,13.7,12,15.48v-30.95Z" />
                            <path d="m262.48,355c-1.78-6.9-8.02-12-15.48-12s-13.7,5.1-15.48,12h30.95Z" />
                            <path
                                className="cls-75"
                                d="m355,256.12c-2.37-.73-4.89-1.12-7.5-1.12-14.08,0-25.5,11.42-25.5,25.5s11.42,25.5,25.5,25.5c2.61,0,5.13-.39,7.5-1.12v-48.75Z"
                            />
                        </g>
                    </pattern>
                    <radialGradient
                        id="radial-gradient"
                        cx={-202.14}
                        cy={557.03}
                        fx={-202.14}
                        fy={557.03}
                        r={547.52}
                        gradientTransform="translate(460.86 -463.5) scale(.76 1.48)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#fff" />
                        <stop offset={1} stopColor="#000" />
                    </radialGradient>
                    <radialGradient
                        id="radial-gradient-2"
                        cx={-202.14}
                        cy={557.03}
                        fx={-202.14}
                        fy={557.03}
                        r={554.16}
                        gradientTransform="translate(460.86 -217.95) scale(.76 1.04)"
                        xlinkHref="#radial-gradient"
                    />
                    <pattern
                        id="New_Pattern_Swatch_2"
                        data-name="New Pattern Swatch 2"
                        x={0}
                        y={0}
                        width={355}
                        height={355}
                        patternTransform="translate(-1326.14 6938.37) rotate(25) scale(1.38)"
                        patternUnits="userSpaceOnUse"
                        viewBox="0 0 355 355"
                    >
                        <g>
                            <rect className="cls-1" width={355} height={355} />
                            <path
                                className="cls-25"
                                d="m4,2c0,20.99,17.01,38,38,38S80,22.99,80,2c0-.67-.02-1.34-.05-2H4.05c-.03.66-.05,1.33-.05,2Z"
                            />
                            <path d="m4,45c-1.38,0-2.72.19-4,.52v30.95c1.28.33,2.62.52,4,.52,8.84,0,16-7.16,16-16s-7.16-16-16-16Z" />
                            <circle cx={62.5} cy={83.5} r={25.5} />
                            <circle cx={72.5} cy={306.5} r={10.5} />
                            <circle cx={54.5} cy={254.5} r={20.5} />
                            <path
                                className="cls-75"
                                d="m0,256.12v48.75c10.42-3.2,18-12.9,18-24.38s-7.58-21.17-18-24.38Z"
                            />
                            <path
                                className="cls-73"
                                d="m20,113c-7.06,0-13.8,1.34-20,3.77v102.47c6.2,2.42,12.94,3.77,20,3.77,30.38,0,55-24.62,55-55s-24.62-55-55-55Z"
                            />
                            <path
                                className="cls-25"
                                d="m79.95,355c-1.04-20.06-17.63-36-37.95-36s-36.91,15.94-37.95,36h75.89Z"
                            />
                            <path
                                className="cls-73"
                                d="m355,116.77c-20.48,8-35,27.92-35,51.23s14.52,43.23,35,51.23v-102.47Z"
                            />
                            <path d="m355,45.52c-6.9,1.78-12,8.02-12,15.48s5.1,13.7,12,15.48v-30.95Z" />
                            <path
                                className="cls-75"
                                d="m355,256.12c-2.37-.73-4.89-1.12-7.5-1.12-14.08,0-25.5,11.42-25.5,25.5s11.42,25.5,25.5,25.5c2.61,0,5.13-.39,7.5-1.12v-48.75Z"
                            />
                        </g>
                    </pattern>
                    <linearGradient
                        id="linear-gradient"
                        x1={-129.66}
                        y1={839.21}
                        x2={-129.66}
                        y2={697.87}
                        gradientTransform="translate(423.02 -497.86) scale(.9 .66)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.5} stopColor="#fff" />
                        <stop offset={0.5} stopColor="#000" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-2"
                        x1={-129.66}
                        y1={839.51}
                        x2={-129.66}
                        y2={698.17}
                        gradientTransform="translate(423.02 -497.86) scale(.9 .66)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.47} stopColor="#000" />
                        <stop offset={0.5} stopColor="#fff" />
                        <stop offset={0.5} stopColor="#000" />
                    </linearGradient>
                    <radialGradient
                        id="radial-gradient-3"
                        cx={-129.66}
                        cy={863.43}
                        fx={-129.66}
                        fy={863.43}
                        r={301.84}
                        gradientTransform="translate(423.02 -212.22) scale(.9 .33)"
                        xlinkHref="#radial-gradient"
                    />
                    <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
                        <feOffset dx={2.32} dy={2.32} />
                        <feGaussianBlur result="blur" stdDeviation={2.32} />
                        <feFlood floodColor="#063a59" floodOpacity={0.75} />
                        <feComposite in2="blur" operator="in" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                    <linearGradient
                        id="linear-gradient-3"
                        x1={584.1}
                        y1={78.31}
                        x2={610.89}
                        y2={15.2}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.4} stopColor="#1a1a1a" />
                        <stop offset={0.58} stopColor="#fff" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-4"
                        x1={585.77}
                        y1={14.54}
                        x2={609.22}
                        y2={78.97}
                        gradientTransform="translate(632.56 -550.75) rotate(90) scale(1 .75)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0} stopColor="#000" />
                        <stop offset={1} stopColor="#fff" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-5"
                        x1={141.53}
                        y1={387.53}
                        x2={160.16}
                        y2={343.66}
                        xlinkHref="#linear-gradient-3"
                    />
                    <linearGradient
                        id="linear-gradient-6"
                        x1={142.69}
                        y1={343.18}
                        x2={159.01}
                        y2={388.01}
                        gradientTransform="translate(425.04 214.75) rotate(90) scale(1 .75)"
                        xlinkHref="#linear-gradient-4"
                    />
                    <radialGradient
                        id="radial-gradient-4"
                        cx={179.72}
                        cy={377.3}
                        fx={179.72}
                        fy={377.3}
                        r={47.08}
                        gradientTransform="translate(-91.31 255.32) rotate(-33.69) scale(.79 .63) skewX(-.96)"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset={0.5} stopColor="#000" />
                        <stop offset={0.5} stopColor="#fff" />
                    </radialGradient>
                    <linearGradient
                        id="linear-gradient-7"
                        x1={141.59}
                        y1={448.72}
                        x2={160.22}
                        y2={404.84}
                        xlinkHref="#linear-gradient-3"
                    />
                    <linearGradient
                        id="linear-gradient-8"
                        x1={142.75}
                        y1={404.36}
                        x2={159.06}
                        y2={449.19}
                        gradientTransform="translate(470.99 275.87) rotate(90) scale(1 .75)"
                        xlinkHref="#linear-gradient-4"
                    />
                    <radialGradient
                        id="radial-gradient-5"
                        cx={178.56}
                        cy={453.24}
                        fx={178.56}
                        fy={453.24}
                        r={47.08}
                        gradientTransform="translate(-116.17 275.65) rotate(-33.69) scale(.79 .63) skewX(-.96)"
                        xlinkHref="#radial-gradient-4"
                    />
                    <linearGradient
                        id="linear-gradient-9"
                        x1={143.01}
                        y1={508.93}
                        x2={161.63}
                        y2={465.05}
                        xlinkHref="#linear-gradient-3"
                    />
                    <linearGradient
                        id="linear-gradient-10"
                        x1={144.16}
                        y1={464.58}
                        x2={160.48}
                        y2={509.41}
                        gradientTransform="translate(517.57 334.67) rotate(90) scale(1 .75)"
                        xlinkHref="#linear-gradient-4"
                    />
                    <radialGradient
                        id="radial-gradient-6"
                        cx={179.15}
                        cy={528.02}
                        fx={179.15}
                        fy={528.02}
                        r={47.08}
                        gradientTransform="translate(-140.42 296.41) rotate(-33.69) scale(.79 .63) skewX(-.96)"
                        xlinkHref="#radial-gradient-4"
                    />
                    <linearGradient
                        id="linear-gradient-11"
                        x1={140.65}
                        y1={628.7}
                        x2={159.28}
                        y2={584.82}
                        xlinkHref="#linear-gradient-3"
                    />
                    <linearGradient
                        id="linear-gradient-12"
                        x1={141.81}
                        y1={584.35}
                        x2={158.12}
                        y2={629.18}
                        gradientTransform="translate(605.04 456.8) rotate(90) scale(1 .75)"
                        xlinkHref="#linear-gradient-4"
                    />
                    <radialGradient
                        id="radial-gradient-7"
                        cx={173.74}
                        cy={676.63}
                        fx={173.74}
                        fy={676.63}
                        r={47.08}
                        gradientTransform="translate(-189.46 334.86) rotate(-33.69) scale(.79 .63) skewX(-.96)"
                        xlinkHref="#radial-gradient-4"
                    />
                    <linearGradient
                        id="linear-gradient-13"
                        x1={139.8}
                        y1={568.55}
                        x2={158.43}
                        y2={524.67}
                        xlinkHref="#linear-gradient-3"
                    />
                    <linearGradient
                        id="linear-gradient-14"
                        x1={140.95}
                        y1={524.19}
                        x2={157.27}
                        y2={569.02}
                        gradientTransform="translate(559.07 397.49) rotate(90) scale(1 .75)"
                        xlinkHref="#linear-gradient-4"
                    />
                    <radialGradient
                        id="radial-gradient-8"
                        cx={173.87}
                        cy={601.95}
                        fx={173.87}
                        fy={601.95}
                        gradientTransform="translate(-165.15 314.43) rotate(-33.69) scale(.79 .63) skewX(-.96)"
                        xlinkHref="#radial-gradient-4"
                    />
                    <radialGradient
                        id="radial-gradient-9"
                        cx={314.68}
                        cy={252.51}
                        fx={314.68}
                        fy={252.51}
                        r={116.56}
                        gradientTransform="translate(82.29 292.8) rotate(-30.44) scale(.42 .32) skewX(2.66)"
                        xlinkHref="#radial-gradient-4"
                    />
                    <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
                        <feOffset dx={2.32} dy={2.32} />
                        <feGaussianBlur result="blur-2" stdDeviation={2.32} />
                        <feFlood floodColor="#063a59" floodOpacity={0.75} />
                        <feComposite in2="blur-2" operator="in" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                </defs>
                <g className="cls-76">
                    <g id="Capa_2" data-name="Capa 2">
                        <g id="Capa_75" data-name="Capa 75">
                            <g>
                                <g className="cls-62">
                                    <path
                                        className="cls-5"
                                        d="m78.94,23.33h476.85c38.16,0,69.15,30.98,69.15,69.15v547.34c0,38.16-30.98,69.15-69.15,69.15H78.94c-38.16,0-69.15-30.98-69.15-69.15V92.48c0-38.16,30.98-69.15,69.15-69.15Z"
                                    />
                                    <path
                                        className="cls-5"
                                        d="m78.94,36.39h476.85c38.16,0,69.15,30.98,69.15,69.15v547.34c0,38.16-30.98,69.15-69.15,69.15H78.94c-38.16,0-69.15-30.98-69.15-69.15V105.54c0-38.16,30.98-69.15,69.15-69.15Z"
                                    />
                                    <rect
                                        className="cls-5"
                                        x={13.06}
                                        y={26.59}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <rect
                                        className="cls-5"
                                        x={13.06}
                                        y={39.65}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <rect
                                        className="cls-5"
                                        x={13.06}
                                        y={39.65}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <rect
                                        className="cls-4"
                                        x={13.06}
                                        y={39.65}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <rect
                                        className="cls-11"
                                        x={13.06}
                                        y={39.65}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <path
                                        className="cls-5"
                                        d="m80.03,59.79h476.85c26.45,0,47.92,21.47,47.92,47.92v547.34c0,26.45-21.47,47.92-47.92,47.92H80.03c-26.45,0-47.92-21.47-47.92-47.92V107.71c0-26.45,21.47-47.92,47.92-47.92Z"
                                    />
                                    <path
                                        className="cls-5"
                                        d="m78.94,57.61h476.85c26.45,0,47.92,21.47,47.92,47.92v547.34c0,26.45-21.47,47.92-47.92,47.92H78.94c-26.45,0-47.92-21.47-47.92-47.92V105.54c0-26.45,21.47-47.92,47.92-47.92Z"
                                    />
                                    <path
                                        className="cls-5"
                                        d="m78.94,59.25h476.85c25.55,0,46.29,20.74,46.29,46.29v547.34c0,25.55-20.74,46.29-46.29,46.29H78.94c-25.55,0-46.29-20.74-46.29-46.29V105.54c0-25.55,20.74-46.29,46.29-46.29Z"
                                    />
                                    <path
                                        className="cls-8"
                                        d="m78.94,59.25h476.85c25.55,0,46.29,20.74,46.29,46.29v547.34c0,25.55-20.74,46.29-46.29,46.29H78.94c-25.55,0-46.29-20.74-46.29-46.29V105.54c0-25.55,20.74-46.29,46.29-46.29Z"
                                    />
                                    <path
                                        className="cls-6"
                                        d="m78.94,59.25h476.85c25.55,0,46.29,20.74,46.29,46.29v547.34c0,25.55-20.74,46.29-46.29,46.29H78.94c-25.55,0-46.29-20.74-46.29-46.29V105.54c0-25.55,20.74-46.29,46.29-46.29Z"
                                    />
                                </g>
                                <g>
                                    <g>
                                        <path
                                            className="cls-56"
                                            d="m69.15,4.82h476.85c38.16,0,69.15,30.98,69.15,69.15v547.34c0,38.16-30.98,69.15-69.15,69.15H69.15c-38.16,0-69.15-30.98-69.15-69.15V73.97C0,35.81,30.98,4.82,69.15,4.82Z"
                                        />
                                        <rect
                                            className="cls-56"
                                            y={17.89}
                                            width={615.15}
                                            height={685.64}
                                            rx={69.15}
                                            ry={69.15}
                                        />
                                    </g>
                                    <g>
                                        <rect
                                            className="cls-45"
                                            x={3.27}
                                            y={8.09}
                                            width={608.62}
                                            height={679.11}
                                            rx={65.88}
                                            ry={65.88}
                                        />
                                        <rect
                                            className="cls-45"
                                            x={3.27}
                                            y={21.15}
                                            width={608.62}
                                            height={679.11}
                                            rx={65.88}
                                            ry={65.88}
                                        />
                                    </g>
                                    <rect
                                        className="cls-48"
                                        x={3.27}
                                        y={21.15}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <rect
                                        className="cls-13"
                                        x={3.27}
                                        y={21.15}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <rect
                                        className="cls-34"
                                        x={3.27}
                                        y={21.15}
                                        width={608.62}
                                        height={679.11}
                                        rx={65.88}
                                        ry={65.88}
                                    />
                                    <g>
                                        <g className="cls-62">
                                            <path
                                                className="cls-5"
                                                d="m70.24,41.29h476.85c26.45,0,47.92,21.47,47.92,47.92v547.34c0,26.45-21.47,47.92-47.92,47.92H70.24c-26.45,0-47.92-21.47-47.92-47.92V89.21c0-26.45,21.47-47.92,47.92-47.92Z"
                                            />
                                        </g>
                                        <path
                                            className="cls-57"
                                            d="m69.15,39.11h476.85c26.45,0,47.92,21.47,47.92,47.92v547.34c0,26.45-21.47,47.92-47.92,47.92H69.15c-26.45,0-47.92-21.47-47.92-47.92V87.03c0-26.45,21.47-47.92,47.92-47.92Z"
                                        />
                                    </g>
                                    <path
                                        className="cls-39"
                                        d="m69.15,40.74h476.85c25.55,0,46.29,20.74,46.29,46.29v547.34c0,25.55-20.74,46.29-46.29,46.29H69.15c-25.55,0-46.29-20.74-46.29-46.29V87.03c0-25.55,20.74-46.29,46.29-46.29Z"
                                    />
                                    <path
                                        className="cls-15"
                                        d="m69.15,40.74h476.85c25.55,0,46.29,20.74,46.29,46.29v547.34c0,25.55-20.74,46.29-46.29,46.29H69.15c-25.55,0-46.29-20.74-46.29-46.29V87.03c0-25.55,20.74-46.29,46.29-46.29Z"
                                    />
                                    <path
                                        className="cls-16"
                                        d="m69.15,40.74h476.85c25.55,0,46.29,20.74,46.29,46.29v547.34c0,25.55-20.74,46.29-46.29,46.29H69.15c-25.55,0-46.29-20.74-46.29-46.29V87.03c0-25.55,20.74-46.29,46.29-46.29Z"
                                    />
                                </g>
                            </g>
                        </g>
                        <g id="Capa_74" data-name="Capa 74">
                            <g>
                                <g className="cls-61">
                                    <path
                                        className="cls-5"
                                        d="m116.17,2.18l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H116.17Z"
                                    />
                                    <path
                                        className="cls-5"
                                        d="m309.31,89.37c-65.48,0-130.84-6.31-194.32-18.77-.94-3.68-1.96-12.47-1.42-28.96.52-15.82,2.13-28.07,2.89-30.56l3.58-6.95h378.52l3.68,7.16c.82,2.49,2.5,14.84,2.96,30.65.46,15.96-.65,24.76-1.7,28.68-63.44,12.44-128.76,18.75-194.2,18.75Z"
                                    />
                                    <path
                                        className="cls-5"
                                        d="m309.31,81.1c-62.32,0-124.53-6.22-184.99-18.49-1.89-12.96.02-47.04,1.88-54.78l2.04-4.16h362.14l2.15,4.39c.74,3.09,2.13,14.61,2.56,28.99.39,13.14-.26,21.22-.94,25.58-60.42,12.25-122.58,18.46-184.84,18.46Z"
                                    />
                                    <path
                                        className="cls-10"
                                        d="m116.17,2.18l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H116.17Z"
                                    />
                                    <path
                                        className="cls-9"
                                        d="m116.17,2.18l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H116.17Z"
                                    />
                                    <path
                                        className="cls-7"
                                        d="m116.17,2.18l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H116.17Z"
                                    />
                                </g>
                                <g>
                                    <path
                                        className="cls-44"
                                        d="m112.9,0l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H112.9Z"
                                    />
                                    <path
                                        className="cls-58"
                                        d="m306.04,87.19c-65.48,0-130.84-6.31-194.32-18.77-.94-3.68-1.96-12.47-1.42-28.96.52-15.82,2.13-28.07,2.89-30.56l3.58-6.95h378.52l3.68,7.16c.82,2.49,2.5,14.84,2.96,30.65.46,15.96-.65,24.76-1.7,28.68-63.44,12.44-128.76,18.75-194.2,18.75Z"
                                    />
                                    <path
                                        className="cls-43"
                                        d="m306.04,78.92c-62.32,0-124.53-6.22-184.99-18.49-1.89-12.96.02-47.04,1.88-54.78l2.04-4.16h362.14l2.15,4.39c.74,3.09,2.13,14.61,2.56,28.99.39,13.14-.26,21.22-.94,25.58-60.42,12.25-122.58,18.46-184.84,18.46Z"
                                    />
                                    <path
                                        className="cls-36"
                                        d="m112.9,0l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H112.9Z"
                                    />
                                    <path
                                        className="cls-69"
                                        d="m112.9,0l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H112.9Z"
                                    />
                                    <path
                                        className="cls-14"
                                        d="m112.9,0l-5.61,10.26c-2.66,5.24-6.75,56.95,0,64.83,130.38,24.56,267.1,24.56,397.48,0,6.96-10.02,2.8-60.21,0-64.83l-5.59-10.26H112.9Z"
                                    />
                                </g>
                            </g>
                            <text
                                className="cls-41"
                                transform="translate(238.47 55.99)"
                            >
                                <tspan x={0} y={0}>
                                    {"PERFIL"}
                                </tspan>
                            </text>
                        </g>
                        <g id="Capa_73" data-name="Capa 73" onClick={onClose}>
                            <g  data="hola">
                                <g className="cls-62">
                                    <circle
                                        className="cls-5"
                                        cx={595.44}
                                        cy={54.97}
                                        r={36.84}
                                    />
                                    <circle
                                        className="cls-5"
                                        cx={595.44}
                                        cy={54.97}
                                        r={34.27}
                                    />
                                    <circle
                                        className="cls-12"
                                        cx={595.44}
                                        cy={54.97}
                                        r={34.27}
                                    />
                                    <ellipse
                                        className="cls-5"
                                        cx={595.44}
                                        cy={54.97}
                                        rx={25.7}
                                        ry={34.27}
                                        transform="translate(330.74 591.16) rotate(-69)"
                                    />
                                    <ellipse
                                        className="cls-8"
                                        cx={595.44}
                                        cy={54.97}
                                        rx={25.7}
                                        ry={34.27}
                                        transform="translate(330.74 591.16) rotate(-69)"
                                    />
                                </g>
                                <g>
                                    <circle
                                        className="cls-55"
                                        cx={597.5}
                                        cy={46.75}
                                        r={36.84}
                                    />
                                    <circle
                                        className="cls-46"
                                        cx={597.5}
                                        cy={46.75}
                                        r={34.27}
                                    />
                                    <circle
                                        className="cls-28"
                                        cx={597.5}
                                        cy={46.75}
                                        r={34.27}
                                    />
                                    <ellipse
                                        className="cls-46"
                                        cx={597.5}
                                        cy={46.75}
                                        rx={25.7}
                                        ry={34.27}
                                        transform="translate(339.73 587.81) rotate(-69)"
                                    />
                                    <ellipse
                                        className="cls-21"
                                        cx={597.5}
                                        cy={46.75}
                                        rx={25.7}
                                        ry={34.27}
                                        transform="translate(339.73 587.81) rotate(-69)"
                                    />
                                </g>
                            </g>
                            <path
                                className="cls-40"
                                d="m610.25,23.36s0,0,0,0c-.15-.6.57-1.12,1.57-.95,2.55.44,4.96,1.89,6.55,3.94.63.8.5,1.68-.1,1.83t0,0c-.6.16-7.87-4.22-8.02-4.82Z"
                            />
                            <path
                                className="cls-40"
                                d="m599.64,78.14s0,0,0,0c.08-.46.61-1.09,1.11-1.22,1.27-.33,2.19.22,2.49,1.5.12.5-.19,1.27-.55,1.56t0,0c-.37.29-3.14-1.37-3.05-1.83Z"
                            />
                            <g>
                                <path
                                    className="cls-74"
                                    d="m588.27,63.4c-2.6,0-5.03-1.36-6.36-3.56-1.73-2.86-1.25-6.6,1.15-9.1,1.27-1.33,2.6-2.64,3.88-3.91l.08-.08c-.94-.93-1.87-1.87-2.8-2.8-1.33-1.33-2.65-2.65-3.16-4.67-.8-3.16.6-6.52,3.41-8.17,1.12-.66,2.41-1.01,3.75-1.01.32,0,.65.02.97.06,1.62.21,3.09.95,4.38,2.2,1.32,1.29,2.62,2.6,3.92,3.91l2.87-2.88c1.07-1.08,2.18-2.2,3.74-2.83.85-.32,1.72-.47,2.61-.47,1.97,0,3.89.78,5.26,2.13,1.84,1.81,2.58,4.52,1.93,7.05-.51,2.01-1.82,3.32-3.09,4.59l-2.86,2.87,3.65,3.64c1.62,1.63,2.45,3.35,2.54,5.25.09,2-.66,3.99-2.06,5.46-1.39,1.46-3.32,2.3-5.28,2.3h0c-.13,0-.27,0-.41-.01-1.94-.11-3.67-.95-5.28-2.56l-3.6-3.6-2.81,2.81c-1.32,1.32-2.61,2.61-4.58,3.14-.6.16-1.22.24-1.85.24Z"
                                />
                                <path
                                    
                                    className="cls-40"
                                    d="m610.88,51.1c-.41-.41-.82-.82-1.23-1.23-1.05-1.04-2.09-2.09-3.14-3.13,1.16-1.16,2.31-2.32,3.47-3.47,1.26-1.26,2.48-2.44,2.94-4.23.55-2.15-.08-4.5-1.66-6.07-1.76-1.74-4.45-2.29-6.76-1.44-1.49.6-2.56,1.76-3.67,2.87-1.11,1.11-2.22,2.22-3.33,3.34-1.54-1.55-3.08-3.1-4.64-4.62-1.06-1.03-2.31-1.73-3.79-1.92-1.39-.18-2.85.1-4.06.81-2.39,1.41-3.62,4.34-2.94,7.03.45,1.76,1.65,2.95,2.89,4.19,1.18,1.18,2.36,2.35,3.54,3.53-1.57,1.56-3.15,3.1-4.68,4.7-2.02,2.11-2.56,5.31-1.01,7.86,1.44,2.37,4.38,3.57,7.07,2.86,1.73-.46,2.89-1.65,4.12-2.87,1.18-1.18,2.36-2.36,3.53-3.54.89.89,1.78,1.78,2.68,2.67.55.55,1.1,1.1,1.65,1.65,1.28,1.28,2.77,2.16,4.61,2.27,3.72.21,6.84-2.98,6.67-6.67-.09-1.82-.98-3.31-2.24-4.58Z"
                                />
                            </g>
                            <ellipse
                                className="cls-52"
                                cx={318.56}
                                cy={181.18}
                                rx={72.32}
                                ry={74.36}
                            />
                            <label htmlFor="file-input">
                                <ellipse
                                    className="cls-51"
                                    cx={318.56}
                                    cy={181.18}
                                    rx={64.45}
                                    ry={66.27}
                                />
                            </label>
                            <path
                                className="cls-60"
                                d="m383.01,181.18c0,36.59-28.86,66.26-64.46,66.26-22.42,0-42.17-11.77-53.69-29.64,11.81,15.14,29.94,24.83,50.3,24.83,35.59,0,64.44-29.67,64.44-66.28,0-13.53-3.96-26.13-10.75-36.62,8.87,11.34,14.16,25.75,14.16,41.44Z"
                            />
                            {image ? (
                                <>
                                    <foreignObject
                                        cx={318.56}
                                        cy={181.18}
                                        rx={64.45}
                                        ry={66.27}
                                        x={"40%"}
                                        y={"15.8%"}
                                        width={"20.1%"}
                                        height={"18%"}
                                    >
                                        <label htmlFor="file-input">
                                            <img
                                                width="100%"
                                                height="100%"
                                                src={image}
                                                style={{
                                                    borderRadius: "50%",
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </label>
                                    </foreignObject>
                                </>
                            ) : (
                                <foreignObject
                                        cx={318.56}
                                        cy={181.18}
                                        rx={64.45}
                                        ry={66.27}
                                        x={"40%"}
                                        y={"15.8%"}
                                        width={"20.1%"}
                                        height={"18%"}
                                    >
                                        <label htmlFor="file-input">
                                            <img
                                                width="100%"
                                                height="100%"
                                                src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
                                                style={{
                                                    borderRadius: "50%",
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                            />
                                        </label>
                                    </foreignObject>
                            )}
                            {/* <g id="ggBtfa.tif">
                                <image
                                    id="Layer_0"
                                    data-name="Layer 0"
                                    width={512}
                                    height={380}
                                    transform="translate(291.62 158.32) scale(.1)"
                                    xlinkHref="data:image/png;base64,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"
                                />
                            </g> */}
                            <g>
                                <g className="cls-33">
                                    <rect
                                        className="cls-40"
                                        x={94.55}
                                        y={320.88}
                                        width={444.25}
                                        height={334.51}
                                        rx={21.05}
                                        ry={21.05}
                                    />
                                    <rect
                                        className="cls-17"
                                        x={94.55}
                                        y={320.88}
                                        width={444.25}
                                        height={334.51}
                                        rx={21.05}
                                        ry={21.05}
                                    />
                                    <rect
                                        className="cls-40"
                                        x={99.33}
                                        y={325.66}
                                        width={438.79}
                                        height={329.05}
                                        rx={18.32}
                                        ry={18.32}
                                    />
                                </g>
                                <g>
                                    <rect
                                        className="cls-54"
                                        x={92.5}
                                        y={316.77}
                                        width={444.25}
                                        height={334.51}
                                        rx={21.05}
                                        ry={21.05}
                                    />
                                    <rect
                                        className="cls-24"
                                        x={92.5}
                                        y={316.77}
                                        width={444.25}
                                        height={334.51}
                                        rx={21.05}
                                        ry={21.05}
                                    />
                                    <rect
                                        className="cls-50"
                                        x={97.28}
                                        y={321.56}
                                        width={438.79}
                                        height={329.05}
                                        rx={18.32}
                                        ry={18.32}
                                    />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g className="cls-62">
                                        <path
                                            className="cls-5"
                                            d="m149.2,398.15c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={149.2}
                                            cy={372.18}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-12"
                                            cx={149.2}
                                            cy={372.18}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={149.2}
                                            cy={372.18}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-251.73 378.09) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-8"
                                            cx={149.2}
                                            cy={372.18}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-251.73 378.09) rotate(-69)"
                                        />
                                    </g>
                                    <g>
                                        <path
                                            className="cls-53"
                                            d="m150.85,391.56c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={150.85}
                                            cy={365.6}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-26"
                                            cx={150.85}
                                            cy={365.6}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={150.85}
                                            cy={365.6}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-244.52 375.41) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-22"
                                            cx={150.85}
                                            cy={365.6}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-244.52 375.41) rotate(-69)"
                                        />
                                    </g>
                                </g>
                                <path
                                    className="cls-40"
                                    d="m159.53,349.28s0,0,0,0c-.1-.42.39-.78,1.07-.66,1.74.31,3.38,1.32,4.46,2.75.43.56.34,1.17-.07,1.28t0,0c-.41.11-5.37-2.94-5.47-3.36Z"
                                />
                                <path
                                    className="cls-40"
                                    d="m166.02,354h0c.06-.32.42-.76.76-.85.87-.23,1.49.16,1.7,1.05.08.35-.13.88-.38,1.09h0c-.25.21-2.14-.96-2.08-1.28Z"
                                />
                                <g>
                                    <path
                                        className="cls-47"
                                        d="m153.34,351.42l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <path
                                        className="cls-40"
                                        d="m158.46,379.56c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.52-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.79-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.58.16,1.01.6,1.19,1.18.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Z"
                                    />
                                    <path
                                        className="cls-63"
                                        d="m153.34,351.42l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <g className="cls-30">
                                        <path
                                            className="cls-40"
                                            d="m158.46,379.56c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.51-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.79-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.58.16,1.01.6,1.19,1.18.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Zm-7.9-3.34c.56,0,1.1.11,1.62.33l6.01,2.51.28.02c.32,0,.64-.14.88-.39.18-.19.39-.51.37-.99l-.26-6.43c-.04-1.08.31-2.12.99-2.95l4.06-4.91c.29-.36.38-.82.25-1.27-.14-.44-.45-.75-.86-.87l-6.05-1.74c-1.03-.29-1.9-.97-2.46-1.89l-3.31-5.46c-.24-.39-.62-.61-1.06-.61s-.79.21-1.03.57l-3.49,5.36c-.59.91-1.49,1.55-2.53,1.81l-6.1,1.53c-.42.11-.74.41-.89.83-.15.44-.08.91.21,1.28l3.9,5.04c.65.85.97,1.9.9,2.98l-.46,6.41c-.03.38.1.75.35,1.02.24.26.56.4.89.4h.18l.24-.08,5.9-2.24c.48-.18.98-.27,1.49-.27Z"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g className="cls-62">
                                        <path
                                            className="cls-5"
                                            d="m149.26,459.33c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={149.26}
                                            cy={433.36}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-12"
                                            cx={149.26}
                                            cy={433.36}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={149.26}
                                            cy={433.36}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-308.81 417.41) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-8"
                                            cx={149.26}
                                            cy={433.36}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-308.81 417.41) rotate(-69)"
                                        />
                                    </g>
                                    <g>
                                        <path
                                            className="cls-53"
                                            d="m150.91,452.74c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={150.91}
                                            cy={426.78}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-27"
                                            cx={150.91}
                                            cy={426.78}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={150.91}
                                            cy={426.78}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-301.6 414.72) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-23"
                                            cx={150.91}
                                            cy={426.78}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-301.6 414.72) rotate(-69)"
                                        />
                                    </g>
                                </g>
                                <path
                                    className="cls-40"
                                    d="m159.59,410.46s0,0,0,0c-.1-.42.39-.78,1.07-.66,1.74.31,3.38,1.32,4.46,2.75.43.56.34,1.17-.07,1.28t0,0c-.41.11-5.37-2.94-5.47-3.36Z"
                                />
                                <path
                                    className="cls-40"
                                    d="m166.08,415.18h0c.06-.32.42-.76.76-.85.87-.23,1.49.16,1.7,1.05.08.35-.13.88-.38,1.09h0c-.25.21-2.14-.96-2.08-1.28Z"
                                />
                                <g>
                                    <path
                                        className="cls-47"
                                        d="m153.4,412.6l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <path
                                        className="cls-40"
                                        d="m158.52,440.74c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.51-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.8-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.58.16,1.01.6,1.19,1.18.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Z"
                                    />
                                    <path
                                        className="cls-68"
                                        d="m153.4,412.6l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <g className="cls-30">
                                        <path
                                            className="cls-40"
                                            d="m158.52,440.74c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.51-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.8-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.58.16,1.01.6,1.19,1.18.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Zm-7.9-3.34c.56,0,1.1.11,1.62.33l6,2.51.28.02c.33,0,.65-.14.89-.39.25-.25.38-.61.36-.99l-.26-6.42c-.04-1.08.31-2.12.99-2.95l4.06-4.91c.3-.36.38-.83.24-1.27-.13-.43-.45-.74-.87-.86l-6.04-1.73c-1.03-.29-1.9-.97-2.47-1.89l-3.31-5.46c-.24-.39-.62-.61-1.06-.61s-.8.21-1.03.57l-3.48,5.35c-.59.91-1.49,1.55-2.53,1.81l-6.1,1.53c-.42.11-.74.41-.89.83-.15.45-.08.91.2,1.28l3.9,5.04c.65.85.97,1.9.9,2.98l-.46,6.41c-.03.38.09.74.35,1.01.24.26.57.41.9.41h.2l.25-.09,5.87-2.22c.48-.18.98-.27,1.49-.27Z"
                                        />
                                    </g>
                                </g>
                            </g>
                            <rect
                                className="cls-37"
                                x={189.42}
                                y={409.11}
                                width={303.79}
                                height={34.8}
                                rx={11.44}
                                ry={11.44}
                            />
                            <rect
                                className="cls-37"
                                x={190.03}
                                y={470.91}
                                width={303.79}
                                height={34.8}
                                rx={11.44}
                                ry={11.44}
                            />
                            <rect
                                className="cls-37"
                                x={191.32}
                                y={586.95}
                                width={303.79}
                                height={34.8}
                                rx={11.44}
                                ry={11.44}
                            />
                            <rect
                                className="cls-37"
                                x={189.42}
                                y={529.78}
                                width={303.79}
                                height={34.8}
                                rx={11.44}
                                ry={11.44}
                            />
                            <g>
                                <g>
                                    <g className="cls-62">
                                        <path
                                            className="cls-5"
                                            d="m150.68,519.55c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={150.67}
                                            cy={493.58}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-12"
                                            cx={150.67}
                                            cy={493.58}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={150.67}
                                            cy={493.58}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-364.12 457.36) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-8"
                                            cx={150.67}
                                            cy={493.58}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-364.12 457.36) rotate(-69)"
                                        />
                                    </g>
                                    <g>
                                        <path
                                            className="cls-53"
                                            d="m152.32,512.96c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={152.32}
                                            cy={486.99}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-29"
                                            cx={152.32}
                                            cy={486.99}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={152.32}
                                            cy={486.99}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-356.91 454.67) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-20"
                                            cx={152.32}
                                            cy={486.99}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-356.91 454.67) rotate(-69)"
                                        />
                                    </g>
                                </g>
                                <path
                                    className="cls-40"
                                    d="m161.01,470.67s0,0,0,0c-.1-.42.39-.78,1.07-.66,1.74.31,3.38,1.32,4.46,2.75.43.56.34,1.17-.07,1.28t0,0c-.41.11-5.37-2.94-5.47-3.36Z"
                                />
                                <path
                                    className="cls-40"
                                    d="m167.49,475.39h0c.06-.32.42-.76.76-.85.87-.23,1.49.16,1.7,1.05.08.35-.13.88-.38,1.09h0c-.25.21-2.14-.96-2.08-1.28Z"
                                />
                                <g>
                                    <path
                                        className="cls-47"
                                        d="m154.81,472.81l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <path
                                        className="cls-40"
                                        d="m159.93,500.96c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.24c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.52-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.8-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.57.17,1.01.6,1.19,1.19.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Z"
                                    />
                                    <path
                                        className="cls-65"
                                        d="m154.81,472.81l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <g className="cls-30">
                                        <path
                                            className="cls-40"
                                            d="m159.93,500.96c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.24c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.52-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.8-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.57.17,1.01.6,1.19,1.19.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Zm-7.9-3.34c.56,0,1.1.11,1.62.33l6,2.51.28.02c.32,0,.64-.14.88-.39.18-.19.39-.51.37-.99l-.26-6.42c-.04-1.08.31-2.12.99-2.95l4.06-4.91c.3-.36.39-.82.24-1.27-.13-.43-.45-.74-.87-.86l-6.04-1.74c-1.03-.29-1.91-.97-2.47-1.89l-3.31-5.46c-.24-.39-.62-.61-1.06-.61s-.8.21-1.03.58l-3.48,5.35c-.59.91-1.49,1.55-2.53,1.81l-6.1,1.53c-.4.09-.73.39-.89.83-.15.45-.08.91.2,1.28l3.9,5.04c.65.85.97,1.9.9,2.98l-.46,6.41c-.03.38.09.74.35,1.01.24.26.57.41.9.41h.18l.24-.08,5.9-2.24c.48-.18.98-.27,1.49-.27Z"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g className="cls-62">
                                        <path
                                            className="cls-5"
                                            d="m148.32,639.32c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={148.32}
                                            cy={613.35}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-12"
                                            cx={148.32}
                                            cy={613.35}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={148.32}
                                            cy={613.35}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-477.44 532.01) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-8"
                                            cx={148.32}
                                            cy={613.35}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-477.44 532.01) rotate(-69)"
                                        />
                                    </g>
                                    <g>
                                        <path
                                            className="cls-53"
                                            d="m149.97,632.73c-14.02,0-25.42-11.65-25.42-25.97s11.4-25.97,25.42-25.97,25.42,11.65,25.42,25.97-11.4,25.97-25.42,25.97Z"
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={149.97}
                                            cy={606.76}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-31"
                                            cx={149.97}
                                            cy={606.76}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={149.97}
                                            cy={606.76}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-470.24 529.32) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-19"
                                            cx={149.97}
                                            cy={606.76}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-470.24 529.32) rotate(-69)"
                                        />
                                    </g>
                                </g>
                                <path
                                    className="cls-40"
                                    d="m158.65,590.44s0,0,0,0c-.1-.42.39-.78,1.07-.66,1.74.31,3.38,1.32,4.46,2.75.43.56.34,1.17-.07,1.28t0,0c-.41.11-5.37-2.94-5.47-3.36Z"
                                />
                                <path
                                    className="cls-40"
                                    d="m165.14,595.16h0c.06-.32.42-.76.76-.85.87-.23,1.49.16,1.7,1.05.08.35-.13.88-.38,1.09h0c-.25.21-2.14-.96-2.08-1.28Z"
                                />
                                <g>
                                    <path
                                        className="cls-47"
                                        d="m152.46,592.58l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <path
                                        className="cls-40"
                                        d="m157.58,620.73c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.51-.86-.48-1.38l.46-6.41c.07-.96-.21-1.89-.8-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.57.17,1.01.6,1.19,1.19.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Z"
                                    />
                                    <path
                                        className="cls-67"
                                        d="m152.46,592.58l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <g className="cls-30">
                                        <path
                                            className="cls-40"
                                            d="m157.58,620.73c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.45-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.51-.86-.48-1.38l.46-6.41c.07-.96-.21-1.89-.8-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.57.17,1.01.6,1.19,1.19.19.6.06,1.25-.33,1.72l-4.06,4.91c-.6.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Zm-7.9-3.34c.56,0,1.1.11,1.62.32l6,2.51.28.02c.32,0,.64-.14.88-.39.15-.16.39-.49.37-.99l-.26-6.42c-.04-1.08.31-2.12.99-2.95l4.06-4.91c.3-.36.39-.82.24-1.27-.13-.43-.45-.74-.87-.86l-6.04-1.74c-1.03-.29-1.91-.97-2.47-1.89l-3.31-5.46c-.23-.38-.62-.61-1.06-.61s-.8.21-1.03.57l-3.48,5.35c-.59.91-1.49,1.55-2.53,1.81l-6.1,1.53c-.42.11-.74.41-.89.83-.15.45-.08.91.2,1.28l3.9,5.04c.65.85.97,1.9.9,2.98l-.46,6.41c-.04.51.2.86.35,1.02.24.26.57.4.89.4h.2l.25-.09,5.87-2.22c.48-.18.98-.27,1.49-.27Z"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g className="cls-62">
                                        <ellipse
                                            className="cls-5"
                                            cx={147.47}
                                            cy={553.19}
                                            rx={25.42}
                                            ry={25.97}
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={147.47}
                                            cy={553.19}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-12"
                                            cx={147.47}
                                            cy={553.19}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-5"
                                            cx={147.47}
                                            cy={553.19}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-421.83 492.62) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-8"
                                            cx={147.47}
                                            cy={553.19}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-421.83 492.62) rotate(-69)"
                                        />
                                    </g>
                                    <g>
                                        <ellipse
                                            className="cls-53"
                                            cx={149.11}
                                            cy={546.61}
                                            rx={25.42}
                                            ry={25.97}
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={149.11}
                                            cy={546.61}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-32"
                                            cx={149.11}
                                            cy={546.61}
                                            rx={23.36}
                                            ry={23.91}
                                        />
                                        <ellipse
                                            className="cls-49"
                                            cx={149.11}
                                            cy={546.61}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-414.63 489.93) rotate(-69)"
                                        />
                                        <ellipse
                                            className="cls-18"
                                            cx={149.11}
                                            cy={546.61}
                                            rx={17.93}
                                            ry={23.36}
                                            transform="translate(-414.63 489.93) rotate(-69)"
                                        />
                                    </g>
                                </g>
                                <path
                                    className="cls-40"
                                    d="m157.8,530.29s0,0,0,0c-.1-.42.39-.78,1.07-.66,1.74.31,3.38,1.32,4.46,2.75.43.56.34,1.17-.07,1.28t0,0c-.41.11-5.37-2.94-5.47-3.36Z"
                                />
                                <path
                                    className="cls-40"
                                    d="m164.28,535.01h0c.06-.32.42-.76.76-.85.87-.23,1.49.16,1.7,1.05.08.35-.13.88-.38,1.09h0c-.25.21-2.14-.96-2.08-1.28Z"
                                />
                                <g>
                                    <path
                                        className="cls-47"
                                        d="m151.6,532.43l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <path
                                        className="cls-40"
                                        d="m156.72,560.57c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.52-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.79-2.65l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.57.17,1.01.6,1.19,1.19.19.6.06,1.25-.33,1.72l-4.06,4.91c-.61.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Z"
                                    />
                                    <path
                                        className="cls-66"
                                        d="m151.6,532.43l3.31,5.46c.36.6.93,1.04,1.6,1.23l6.05,1.74c1.93.55,2.65,2.96,1.36,4.53l-4.06,4.91c-.44.54-.68,1.23-.65,1.93l.26,6.42c.08,2.05-1.93,3.5-3.79,2.72l-5.82-2.43c-.64-.27-1.35-.28-2-.03l-5.89,2.23c-1.88.71-3.85-.8-3.7-2.85l.46-6.41c.05-.7-.16-1.4-.59-1.95l-3.9-5.04c-1.24-1.61-.44-3.99,1.5-4.48l6.1-1.53c.67-.17,1.25-.59,1.63-1.17l3.48-5.35c1.11-1.71,3.57-1.67,4.63.08Z"
                                    />
                                    <g className="cls-30">
                                        <path
                                            className="cls-40"
                                            d="m156.72,560.57c-.22,0-.44-.04-.65-.13l-5.82-2.43c-.46-.19-.94-.29-1.43-.29-.45,0-.89.08-1.32.24l-5.89,2.23c-.2.08-.4.11-.6.11-.46,0-.92-.2-1.25-.56-.35-.37-.51-.86-.48-1.38l.46-6.41c.07-.95-.21-1.89-.79-2.64l-3.9-5.04c-.38-.49-.49-1.14-.28-1.74.2-.58.65-1,1.23-1.14l6.1-1.53c.92-.23,1.71-.8,2.24-1.6l3.48-5.35c.33-.5.85-.79,1.44-.79s1.15.31,1.47.84l3.31,5.46c.5.82,1.27,1.42,2.18,1.68l6.05,1.74c.57.17,1.01.6,1.19,1.19.19.6.06,1.25-.33,1.72l-4.06,4.91c-.61.73-.92,1.66-.88,2.62l.26,6.42c.02.51-.16.99-.5,1.34-.33.34-.78.54-1.23.54Zm-7.9-3.34c.56,0,1.1.11,1.62.32l6,2.51.28.02c.33,0,.65-.14.89-.4.17-.17.38-.49.36-.97l-.26-6.43c-.04-1.08.31-2.12.99-2.95l4.06-4.91c.3-.36.39-.82.24-1.27-.13-.43-.45-.74-.86-.86l-6.05-1.74c-1.03-.29-1.9-.97-2.47-1.89l-3.31-5.46c-.23-.38-.62-.61-1.06-.61s-.8.21-1.03.57l-3.48,5.35c-.59.91-1.49,1.55-2.53,1.81l-6.1,1.53c-.42.11-.74.41-.89.83-.15.43-.08.91.21,1.28l3.9,5.04c.65.85.97,1.91.9,2.98l-.46,6.41c-.03.38.1.75.35,1.02.24.26.56.4.89.4h.2l.25-.09,5.87-2.22c.48-.18.98-.27,1.49-.27Z"
                                        />
                                    </g>
                                </g>
                            </g>
                            <g>
                                <rect
                                    className="cls-54"
                                    x={237.54}
                                    y={266.92}
                                    width={175.1}
                                    height={33.17}
                                    rx={11.44}
                                    ry={11.44}
                                />
                                <g>
                                    <g className="cls-62">
                                        <path d="m246.45,267.94l2.56,4.01c.8,1.25,2.06,2.17,3.54,2.59l4.77,1.34c4.31,1.21,5.86,6.19,2.91,9.36l-3.26,3.5c-1.02,1.09-1.56,2.5-1.51,3.95l.13,4.66c.12,4.21-4.45,7.11-8.59,5.45l-4.58-1.84c-1.42-.57-3.02-.62-4.48-.15l-4.69,1.54c-4.24,1.39-8.61-1.8-8.22-5.99l.43-4.64c.14-1.44-.31-2.88-1.25-4.04l-3.03-3.71c-2.74-3.35-.87-8.22,3.51-9.15l4.85-1.03c1.51-.32,2.83-1.16,3.71-2.35l2.82-3.83c2.55-3.46,8.07-3.28,10.39.34Z" />
                                        <path d="m249.44,301.63c-.62,0-1.24-.12-1.83-.36l-4.58-1.84c-.97-.39-2-.59-3.05-.59-.87,0-1.73.14-2.55.41l-4.69,1.54c-.5.17-1.02.25-1.54.25-1.35,0-2.62-.55-3.51-1.52-.77-.84-1.13-1.91-1.03-3.01l.44-4.64c.18-1.88-.4-3.74-1.62-5.23l-3.03-3.71c-.89-1.09-1.15-2.46-.69-3.75.49-1.39,1.71-2.42,3.27-2.75l4.85-1.03c1.91-.4,3.57-1.46,4.69-2.98l2.82-3.83c.85-1.16,2.21-1.82,3.74-1.82,1.64,0,3.11.77,3.94,2.07l2.56,4c1.02,1.59,2.61,2.75,4.48,3.28l4.77,1.34c1.53.43,2.69,1.54,3.09,2.96.37,1.32.03,2.67-.93,3.7l-3.26,3.5c-1.31,1.41-2.01,3.23-1.96,5.11l.13,4.66c.04,1.35-.59,2.29-1.12,2.83-.87.89-2.1,1.4-3.38,1.4Z" />
                                        <path
                                            className="cls-70"
                                            d="m246.45,267.94l2.56,4.01c.8,1.25,2.06,2.17,3.54,2.59l4.77,1.34c4.31,1.21,5.86,6.19,2.91,9.36l-3.26,3.5c-1.02,1.09-1.56,2.5-1.51,3.95l.13,4.66c.12,4.21-4.45,7.11-8.59,5.45l-4.58-1.84c-1.42-.57-3.02-.62-4.48-.15l-4.69,1.54c-4.24,1.39-8.61-1.8-8.22-5.99l.43-4.64c.14-1.44-.31-2.88-1.25-4.04l-3.03-3.71c-2.74-3.35-.87-8.22,3.51-9.15l4.85-1.03c1.51-.32,2.83-1.16,3.71-2.35l2.82-3.83c2.55-3.46,8.07-3.28,10.39.34Z"
                                        />
                                        <path d="m249.44,301.63c-.63,0-1.24-.12-1.83-.36l-4.58-1.84c-.97-.39-2-.59-3.05-.59-.87,0-1.73.14-2.55.41l-4.69,1.54c-.5.17-1.02.25-1.54.25-1.35,0-2.62-.56-3.51-1.52-.77-.84-1.13-1.91-1.03-3.01l.44-4.64c.18-1.88-.4-3.74-1.62-5.23l-3.03-3.71c-.89-1.09-1.15-2.46-.69-3.75.49-1.39,1.71-2.42,3.27-2.75l4.85-1.03c1.91-.4,3.57-1.46,4.69-2.98l2.82-3.83c.85-1.16,2.21-1.82,3.74-1.82,1.64,0,3.11.78,3.94,2.07l2.56,4.01c1.02,1.59,2.61,2.75,4.48,3.28l4.77,1.34c1.53.43,2.69,1.54,3.09,2.96.37,1.32.03,2.67-.93,3.7l-3.26,3.5c-1.31,1.41-2.01,3.23-1.96,5.11l.13,4.66c.04,1.35-.59,2.29-1.12,2.83-.87.89-2.1,1.4-3.38,1.4Zm-9.47-6.07c1.48,0,2.92.28,4.28.83l6.45,2.59-.17-6.15c-.08-2.75.93-5.4,2.83-7.45l4.06-4.36-6.21-1.75c-2.65-.75-4.91-2.41-6.36-4.67l-3.64-5.7-4,5.45c-1.59,2.17-3.96,3.68-6.65,4.25l-6.31,1.34,3.77,4.62c1.77,2.17,2.6,4.87,2.34,7.61l-.57,6.13,6.61-2.17c1.15-.38,2.36-.57,3.57-.57Z" />
                                    </g>
                                    <g>
                                        <path
                                            className="cls-38"
                                            d="m243.16,263.02l2.56,4.01c.8,1.25,2.06,2.17,3.54,2.59l4.77,1.34c4.31,1.21,5.86,6.19,2.91,9.36l-3.26,3.5c-1.02,1.09-1.56,2.5-1.51,3.95l.13,4.66c.12,4.21-4.45,7.11-8.59,5.45l-4.58-1.84c-1.42-.57-3.02-.62-4.48-.15l-4.69,1.54c-4.24,1.39-8.61-1.8-8.22-5.99l.43-4.64c.14-1.44-.31-2.88-1.25-4.04l-3.03-3.71c-2.74-3.35-.87-8.22,3.51-9.15l4.85-1.03c1.51-.32,2.83-1.16,3.71-2.35l2.82-3.83c2.55-3.46,8.07-3.28,10.39.34Z"
                                        />
                                        <path
                                            className="cls-42"
                                            d="m246.16,296.7c-.62,0-1.24-.12-1.83-.36l-4.58-1.84c-.97-.39-2-.59-3.05-.59-.87,0-1.73.14-2.55.41l-4.69,1.54c-.5.17-1.02.25-1.54.25-1.35,0-2.62-.55-3.51-1.52-.77-.84-1.13-1.91-1.03-3.01l.44-4.64c.18-1.88-.4-3.74-1.62-5.23l-3.03-3.71c-.89-1.09-1.15-2.46-.69-3.75.49-1.39,1.71-2.42,3.27-2.75l4.85-1.03c1.91-.4,3.57-1.46,4.69-2.98l2.82-3.83c.85-1.16,2.21-1.82,3.74-1.82,1.64,0,3.11.77,3.94,2.07l2.56,4c1.02,1.59,2.61,2.75,4.48,3.28l4.77,1.34c1.53.43,2.69,1.54,3.09,2.96.37,1.32.03,2.67-.93,3.7l-3.26,3.5c-1.31,1.41-2.01,3.23-1.96,5.11l.13,4.66c.04,1.35-.59,2.29-1.12,2.83-.87.89-2.1,1.4-3.38,1.4Z"
                                        />
                                        <path
                                            className="cls-64"
                                            d="m243.16,263.02l2.56,4.01c.8,1.25,2.06,2.17,3.54,2.59l4.77,1.34c4.31,1.21,5.86,6.19,2.91,9.36l-3.26,3.5c-1.02,1.09-1.56,2.5-1.51,3.95l.13,4.66c.12,4.21-4.45,7.11-8.59,5.45l-4.58-1.84c-1.42-.57-3.02-.62-4.48-.15l-4.69,1.54c-4.24,1.39-8.61-1.8-8.22-5.99l.43-4.64c.14-1.44-.31-2.88-1.25-4.04l-3.03-3.71c-2.74-3.35-.87-8.22,3.51-9.15l4.85-1.03c1.51-.32,2.83-1.16,3.71-2.35l2.82-3.83c2.55-3.46,8.07-3.28,10.39.34Z"
                                        />
                                        <g className="cls-30">
                                            <path
                                                className="cls-40"
                                                d="m246.16,296.7c-.63,0-1.24-.12-1.83-.36l-4.58-1.84c-.97-.39-2-.59-3.05-.59-.87,0-1.73.14-2.55.41l-4.69,1.54c-.5.17-1.02.25-1.54.25-1.35,0-2.62-.56-3.51-1.52-.77-.84-1.13-1.91-1.03-3.01l.44-4.64c.18-1.88-.4-3.74-1.62-5.23l-3.03-3.71c-.89-1.09-1.15-2.46-.69-3.75.49-1.39,1.71-2.42,3.27-2.75l4.85-1.03c1.91-.4,3.57-1.46,4.69-2.98l2.82-3.83c.85-1.16,2.21-1.82,3.74-1.82,1.64,0,3.11.78,3.94,2.07l2.56,4.01c1.02,1.59,2.61,2.75,4.48,3.28l4.77,1.34c1.53.43,2.69,1.54,3.09,2.96.37,1.32.03,2.67-.93,3.7l-3.26,3.5c-1.31,1.41-2.01,3.23-1.96,5.11l.13,4.66c.04,1.35-.59,2.29-1.12,2.83-.87.89-2.1,1.4-3.38,1.4Zm-9.47-6.07c1.48,0,2.92.28,4.28.83l6.45,2.59-.17-6.15c-.08-2.75.93-5.4,2.83-7.45l4.06-4.36-6.21-1.75c-2.65-.75-4.91-2.41-6.36-4.67l-3.64-5.7-4,5.45c-1.59,2.17-3.96,3.68-6.65,4.25l-6.31,1.34,3.77,4.62c1.77,2.17,2.6,4.87,2.34,7.61l-.57,6.13,6.61-2.17c1.15-.38,2.36-.57,3.57-.57Z"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <text
                                    className="cls-3"
                                    transform="translate(276.74 290.49)"
                                >
                                    <tspan x={0} y={0}>
                                        {"G"}
                                    </tspan>
                                    <tspan className="cls-78" x={14.42} y={0}>
                                        {"U"}
                                    </tspan>
                                    <tspan x={28.68} y={0}>
                                        {"AR"}
                                    </tspan>
                                    <tspan className="cls-77" x={58.24} y={0}>
                                        {"D"}
                                    </tspan>
                                    <tspan x={72.02} y={0}>
                                        {"AR"}
                                    </tspan>
                                </text>
                            </g>
                            <text
                                className="cls-2"
                                transform="translate(200.7 432.51)"
                            >
                                <tspan x={0} y={0}>
                                    {email}
                                </tspan>
                            </text>
                            <text
                                className="cls-2"
                                transform="translate(200.26 494.42)"
                            >
                                <tspan x={0} y={0}>
                                    {phone}
                                </tspan>
                            </text>
                            <text
                                className="cls-2"
                                transform="translate(200.02 552.3)"
                            >
                                <tspan x={0} y={0}>
                                    {pharmacy_name}
                                </tspan>
                            </text>
                            <text
                                className="cls-2"
                                transform="translate(200.26 608.19)"
                            >
                                <tspan x={0} y={0}>
                                    {chain}
                                </tspan>
                            </text>
                            <rect
                                className="cls-37"
                                x={187.25}
                                y={350.85}
                                width={303.79}
                                height={34.8}
                                rx={11.44}
                                ry={11.44}
                            />
                            <text
                                className="cls-2"
                                transform="translate(200.23 374.87)"
                            >
                                <tspan x={0} y={0}>
                                    {name}
                                </tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default ModalPerfil;
