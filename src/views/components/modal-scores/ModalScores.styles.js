import styled from "styled-components";
import tw from "twin.macro";

const ScoresModalStyles = {};

ScoresModalStyles.Modal = styled.div`
    ${tw`fixed bg-[rgba(0, 0, 0, .5)] w-screen h-screen top-0 left-0 z-[1] flex justify-center items-center`}

    .score-list {
        ${tw`absolute w-[80%] h-[57%] top-[15%] left-[12%] max-h-[57%] overflow-auto`}
    }

    .button-close {
        ${tw`absolute  absolute w-[54%] h-[10%] top-[91%] right-[19%] `}
    }
`;

export { ScoresModalStyles }; 