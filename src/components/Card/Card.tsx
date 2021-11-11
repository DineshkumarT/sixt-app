import LazyLoad from "react-lazyload";
import * as Styled from "./Card.styles";
import type { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({ offer }) => {
  const { headlines, carGroupInfo, prices } = offer;
  return (
    <>
      <Styled.CardWrapper>
        <Styled.CardTitle>{headlines.description}</Styled.CardTitle>
        <LazyLoad>
          <Styled.CardImage
            src={carGroupInfo?.modelExample?.imageUrl || ""}
            alt=""
            onError={(e) => {
              //@ts-ignore
              e.target.src = "./placeholder.png";
            }}
          />
        </LazyLoad>
        <Styled.CardPriceWrapper>
          <Styled.Price>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: prices.dayPrice.amount.currency,
            }).format(prices.dayPrice.amount.value)}
          </Styled.Price>
          <Styled.Duration>| day</Styled.Duration>
        </Styled.CardPriceWrapper>
      </Styled.CardWrapper>
    </>
  );
};

export default Card;
