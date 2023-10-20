import styled from "styled-components";
import tw from "twin.macro";

export const InputContent = styled.div`
    ${tw`flex flex-nowrap w-full items-center`}
    border-bottom: 1px solid #1d579e;
    span {
        ${tw`text-[#1d579e] text-[20px] ml-[10px]`}
        @media (max-width: 600px) {
            ${tw`text-[15px]`}
        }
    }
    input {
        ${tw`w-full ml-[10px] text-center uppercase text-[22px] text-[#1d579e]`}
        font-family: "Interstate", sans-serif !important;
        letter-spacing: -1px;
        @media (max-width: 600px) {
            ${tw`text-[15px]`}
        }
        &:focus {
            outline: none;
        }
        &:focus-visible {
            outline: none;
        }
    }
`;