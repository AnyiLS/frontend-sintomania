import styled from "styled-components";
import tw from "twin.macro";

export const FinishContainer = styled.div.attrs({
    id: "finish-page"
})`
    ${tw`w-screen h-screen relative`}
    background-image: url('https://juegoseml.co/images-recover/finish-page.png');
    background-size: 100% 100%;

    .back-to-game {
        ${tw`w-[18%] h-[14%] absolute top-[58%] left-[28%]`}
    }

    .close-session {
        ${tw`w-[18%] h-[14%] top-[58%] absolute left-[54%]`}
    }
`;