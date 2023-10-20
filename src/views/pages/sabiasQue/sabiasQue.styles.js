import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainersabiasQue = styled.div`
    ${tw`relative w-screen h-screen flex justify-center items-center`}
    ${({ fondo }) => `background-image: url(${fondo});`}
    background-size: 100% 100%;
`;