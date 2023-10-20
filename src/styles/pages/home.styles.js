import styled from "styled-components";
import tw from "twin.macro";
import { leftToRight, rotate, translateToRight, upToDown, zoomIn } from "./animations";

const HomeStyles = {};

HomeStyles.Background = styled.div.attrs({
  id: "background",
})`
  ${tw`w-screen h-screen relative flex justify-center items-center overflow-hidden`}
  background: url('https://juegoseml.co/images-recover/home-background.webp');
  background-size: cover;
  background-position: center;

  .stars {
    ${tw`w-screen h-screen fixed top-0 left-0`}
    background: url('https://juegoseml.co/images-recover/stars.webp');
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    animation: ${zoomIn} 10s infinite;
    mix-blend-mode: color-dodge;
  }

  .world {
    ${tw`fixed bottom-[-10%] left-[30%] max-w-[700px] w-full h-[auto]`}
    animation: ${rotate} 8s infinite;

    @media (min-width: 767px) {
        ${tw`bottom-[-25%] left-[40%]`}
    }

    img {
        ${tw`w-full h-full`}
    }
  }

  .kite {
    ${tw`w-[40%] absolute top-[80%]`}
    animation: ${translateToRight} 15s infinite;
    mix-blend-mode: color-dodge;
  }

  .button {
    ${tw`z-[1] w-full max-w-[500px]`}

    @media (min-width: 767px) {
        ${tw`max-w-[450px]`}
    }

    @media (max-width: 500px) {
        ${tw`w-[90%]`}
    }

    .sintomania, .welcome {
        ${tw`mb-[10px]`}
        animation: ${upToDown} 5s infinite;
    }

    .flower {
        ${tw`mb-[20px] w-[60px] h-[60px]`}
        animation: ${rotate} 5s infinite;
    }
  }

  .satelite {
    ${tw`fixed top-[15%] right-[5%] w-[30%]`}
    animation: ${upToDown} 5s infinite;

    @media (min-width: 767px) {
        ${tw`w-[20%] top-[10%] right-[10%]`}
    }
  }

  .planet {
    ${tw`fixed top-[10%] left-[5%] w-[50%]`}
    animation: ${leftToRight} 5s infinite;

    @media (min-width: 767px) {
        ${tw`w-[30%] top-[5%]`}
    }
  }

  .bacterium {
    ${tw`fixed top-[-5%] right-[-10%] w-[30%]`}
    animation: ${rotate} 5s infinite;

    @media (min-width: 767px) {
        ${tw`w-[25%] top-[-7%]`}

        img {
            ${tw`w-full h-full`}
        }
    }
  }
`;

HomeStyles.Background2 = styled.div.attrs({
  id: "background",
})`
  ${tw`w-screen h-screen relative flex justify-center items-center overflow-hidden`}
  background: url('https://juegoseml.co/images-recover/background-grey.webp');
  background-size: cover;
  background-position: center;

  .stars {
    ${tw`w-screen h-screen fixed top-0 left-0`}
    background: url('https://juegoseml.co/images-recover/stars.webp');
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    animation: ${zoomIn} 10s infinite;
    mix-blend-mode: color-dodge;
  }

  .world {
    ${tw`fixed bottom-[-15%] right-[30%] max-w-[700px] w-full h-[auto]`}
    animation: ${rotate} 8s infinite;

    @media (min-width: 767px) {
        ${tw`bottom-[-25%] left-[40%]`}
    }

    img {
        ${tw`w-full h-full`}
    }
  }

  .kite {
    ${tw`w-[40%] absolute top-[80%]`}
    animation: ${translateToRight} 15s infinite;
  }

  .button {
    ${tw`z-[1] w-full max-w-[500px] mt-[-30%]`}

    @media (min-width: 767px) {
        ${tw`max-w-[450px]`}
    }

    @media (max-width: 500px) {
        ${tw`w-[90%]`}
    }

    .sintomania, .welcome {
        ${tw`mb-[10px]`}
        animation: ${upToDown} 5s infinite;
    }

    .flower {
        ${tw`mb-[20px] w-[60px] h-[60px]`}
        animation: ${rotate} 5s infinite;
    }
  }

  .satelite {
    ${tw`fixed top-[15%] right-[5%] w-[30%]`}
    animation: ${upToDown} 5s infinite;

    @media (min-width: 767px) {
        ${tw`w-[20%] top-[10%] right-[10%]`}
    }
  }

  .planet {
    ${tw`fixed top-[10%] left-[5%] w-[50%]`}
    animation: ${leftToRight} 5s infinite;

    @media (min-width: 767px) {
        ${tw`w-[30%] top-[5%]`}
    }
  }

  .bacterium {
    ${tw`fixed top-[-5%] right-[-10%] w-[30%]`}
    animation: ${rotate} 5s infinite;

    @media (min-width: 767px) {
        ${tw`w-[25%] top-[-7%]`}

        img {
            ${tw`w-full h-full`}
        }
    }
  }
`;

export default HomeStyles;
