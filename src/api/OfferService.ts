import axios from "axios";
import type { Offer } from "../model/Offer";
import { restEndpoints } from "./RestEndpoints";

export class OfferService {
  public async getOffers(): Promise<Offer[]> {
    try {
      const { data } = await axios.get(restEndpoints.offers);
      return data.offers;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
