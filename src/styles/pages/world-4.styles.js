import styled from "styled-components";
import tw from "twin.macro";

export const World1Container = styled.div`
    ${tw`relative w-screen h-screen overflow-hidden`}

    .monster-container {
        ${tw`h-[35%] w-full flex justify-between`}
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .score {
            ${tw`mt-[5%] pt-[8%] pb-[1%] pl-[25%] flex justify-center items-end h-[18%]`}
            background-image: url('https://juegoseml.co/images-recover/profile-green.webp');
            background-size: 100% 100%;

            @media (min-width: 768px) {
                ${tw`w-[68%] pb-[4.5%]`}
            }
        }

        [alt="pause"] {
            @media (min-width: 768px) {
                ${tw`w-[45%]`}
            }
        }

        .buttons-container {
            ${tw`relative w-[40%] ml-[2%]`}

            img {
                ${tw`w-full mt-[15%]`}

                @media (min-width: 768px) {
                    ${tw`w-[70%]`}
                }
            }
        }

        .cronometer {
            ${tw`w-full flex justify-center items-center p-[10px] rounded-[100%] text-white font-bold mr-[3%] mt-[20%]`}
            font-family: "Interstate", sans-serif !important;
            background-image: url("https://juegoseml.co/images-recover/boton-conteo.webp");
            background-size: 100% 100%;

            @media (min-width: 768px) {
                ${tw`w-[70%] p-[21%]`}
            }
        }

        .cat-counter {
            ${tw`w-full p-[10% 0] flex justify-end pr-[23%]`}
            background-image: url('https://juegoseml.co/images-recover/cat-green.webp');
            background-size: 100% 100%;

            @media (min-width: 768px) {
                ${tw`w-[68%]`}
            }
        }

        .sun-counter {
            ${tw`w-full p-[10% 0] flex justify-end pr-[23%]`}
            background-image: url('https://juegoseml.co/images-recover/sun-green.webp');
            background-size: 100% 100%;

            @media (min-width: 768px) {
                ${tw`w-[68%]`}
            }
        }

        .bacterium-counter {
            ${tw`w-full p-[10% 0] flex justify-end pr-[23%]`}
            background-image: url('https://juegoseml.co/images-recover/bacterium-green.webp');
            background-size: 100% 100%;

            @media (min-width: 768px) {
                ${tw`w-[68%]`}
            }
        }

        .apple-counter {
            ${tw`w-full p-[10% 0] flex justify-end pr-[23%]`}
            background-image: url('https://juegoseml.co/images-recover/apple-green.webp');
            background-size: 100% 100%;

            @media (min-width: 768px) {
                ${tw`w-[68%]`}
            }
        }
    }

    .content-game {
        ${tw`h-[65%] relative bg-[#daff55]`}
        
        #gameBoard {
          z-index: 1;
          margin: auto;
          width: 91%;
          height: 52%;
          position: relative;
          
          @media (min-width: 360px) {
            transform: translate(0%, 8%);
          }

          @media (min-width: 365px) {
            transform: translate(0%, 13%);
          }

          @media (min-width: 400px) {
            transform: translate(0%, 14%);
          }

          @media (max-width: 400px) and (max-height: 670px) {
            transform: translate(0%, 2%);
          }

          @media (min-width: 768px) {
            transform: translate(0%, 0%);
          }

          @media (min-width: 820px) {
            transform: translate(0%, 0%);
          }
        }
      
        canvas {
          z-index: 10;
          position: absolute;
          top: 9%;
          left: 2%;
          opacity: 0.7;

          
          
          //@media(min-width: 360px) {
          //  top: 12%;
          //  left: 0%;
          //}
          //
          //@media (max-width: 400px) and (min-height: 668px) {
          //  top: 14%;
          //  left: 4%; 
          //}
          //
          //@media(min-width: 400px) {
          //  top: 15%;
          //  left: 0%;
          //}
          //
          //@media (max-width: 400px) and (max-height: 670px) {
          //  top: 8%;
          //  left: 2%;
          //
          //
          //  @media(min-width: 768px) {
          //    left: 15%;
          //  }
          //
          //  @media(min-width: 820px) {
          //    left: 10%;
          //  }
            
            @media (max-width: 820px) {
              left: 10%;
            }
          
            @media (max-width: 768px) {
              left: 14%;
            }
          
            @media (max-width: 500px) {
              left: 0%;
              top: 15%;
            }

          @media (max-width: 400px) {
            left: 4.5%;
            top: 14%;
          }

          @media (max-width: 400px) and (max-height: 700px) {
            left: 4.5%;
            top: 9%;
          }
          
          @media (max-width: 375px) {
            left: 2.5%;
            top: 8%;
          }
        }
        // img {
        //   ${tw`absolute`}
        // }

        .grama-bottom {
            ${tw`absolute bottom-0`}
        }
    }

    .game-content {
        ${tw`flex flex-wrap relative py-[5%] h-[90%] gap-[5px] mx-auto justify-center`}

        @media (min-width: 820px) {
            ${tw`pt-[3%] pb-[3%] h-[65%] gap-[20px] w-[90%]`}
        }

        @media (min-width: 768px) {
            ${tw`pt-[3%] pb-[3%] h-[65%] gap-[20px] w-[92%]`}
        }

        .item-card {
            ${tw`w-[calc(100% / 7)] h-[calc(100% / 7)]`}

            @media (min-width: 768px) {
                ${tw`h-[calc(100% / 5)]`}
            }
        }
    }
`;
