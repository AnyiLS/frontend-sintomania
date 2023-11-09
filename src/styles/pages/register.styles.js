import styled from "styled-components";
import tw from "twin.macro";

export const RegisterContent = styled.div`
  ${tw`h-screen relative flex flex-col justify-center items-center overflow-hidden`}


  .register-content {
    ${tw`rounded-[20px] relative p-[2%] max-w-[450px]`}
    background: linear-gradient(to right, #f3702a, #fcad39, #f3702a);
    border: 1pt solid #77251f;
    .register-path {
      ${tw`bg-white w-full h-full rounded-[20px] flex justify-start items-center relative flex-col mx-auto px-[11%]`}
      border: 1pt solid #77251f;
      @media (max-width: 600px) {
        ${tw`px-[7%]`}
      }
      img {
        ${tw`w-full h-auto mt-[-13.3%] mb-[20px]`}
      }
      .input-container {
        ${tw`mt-[20px] w-full`}
        .checkbox-content {
          ${tw`flex gap-[10px] items-center`}
          .checkbox {
            ${tw`rounded-[5px] w-[20px] h-[20px] text-[19px] text-[#1d579e] flex justify-center items-center`}
            border: 1px solid #1d579e;
          }
          label {
            ${tw`text-[10px] text-[#1d579e] w-[85%]`}
          }
        }
      }
      .button-container {
        ${tw`flex justify-center`}
        button {
          ${tw`bg-[#54f125] px-[20px] rounded-[30px] py-[5px] uppercase text-white font-bold mb-[-12%]`}
          letter-spacing: 1px;
          font-family: "Interstate", sans-serif !important;
          border: 2px solid #43bc1e;
          text-shadow: 1px 1px #37861b;
          box-shadow: 1px 3px 5px 0px #000;
        }
      }
    }
  }
`;
