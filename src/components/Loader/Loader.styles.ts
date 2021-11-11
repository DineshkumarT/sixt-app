import styled, { keyframes } from "styled-components";

const Spinner = keyframes`
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`;

export const LoaderWrapper = styled.div`
  ::before {
    content: "";
    position: absolute;
    animation: 1.5s linear infinite ${Spinner};
    border: solid 5px #cfd0d1;
    border-bottom-color: #1c87c9;
    border-radius: 50%;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
  }
`;
