import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 4px;
  padding: 8px;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 15%);

  &:hover {
    box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 30%);
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  width: 75%;
`;

export const CardTitle = styled.div`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.334;
  letter-spacing: 0em;
  background-color: black;
  color: white;
`;

export const Price = styled.div`
  font-size: 1.1em;
  font-weight: 400;
`;

export const Duration = styled.div`
  font-size: 0.7em;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

export const CardPriceWrapper = styled.div`
  display: flex;
  padding-left: 15px;
`;
