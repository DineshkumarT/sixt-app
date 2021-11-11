import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Card, Loader } from "..";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchOffers } from "../../reducers";
import * as Styled from "./Offers.styles";

function ErrorFallback() {
  return (
    <div role="alert">
      <p>Something went wrong,please try again later.</p>
    </div>
  );
}

const Offers: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: offers, status } = useAppSelector((store) => store.offer);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <>
      {(status === "loading" || status === "idle") && <Loader />}
      {status === "failed" && (
        <Styled.Error>Error occoured while fetching the offers.</Styled.Error>
      )}
      {status === "resolved" && (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Styled.OffersWrapper>
            {offers.map((offer) => (
              <Card key={offer.id} offer={offer} />
            ))}
          </Styled.OffersWrapper>
        </ErrorBoundary>
      )}
    </>
  );
};

export default Offers;
