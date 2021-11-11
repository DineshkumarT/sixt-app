import styled from "styled-components";

export const OffersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 24px;
  gap: 1em;
  padding: 3em;
  @media (max-width: 1320px) {
    font-size: 21px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    grid-template-columns: 1fr;
  }
`;

export const Error = styled.div`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;
