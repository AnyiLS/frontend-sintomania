import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerScore = styled.div`
    ${tw`relative w-screen h-screen flex justify-center items-center`}
    ${({background}) => `background-image: url('${background}');` }
    background-size: 100% 100%;

    h3 {
        position: absolute;
        bottom: 11%;
        font-weight: 700;
        color: #0e5a66;
    }

    .score-list {
        ${tw`absolute w-[78%] h-[57%] top-[12.7%] left-[11%] max-h-[57%] overflow-auto`}

        svg {
        }
    }
`;
