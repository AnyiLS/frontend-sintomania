import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainerLograste = styled.div`
    ${tw`relative w-full h-full flex justify-center items-center`}
    ${({ background }) => `background-image: url(${background});`}
    background-size: 100% 100%;
`;