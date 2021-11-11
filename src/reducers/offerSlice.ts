import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { offerService } from "../api";
import { AppThunk } from "../app/store";
import type { Offer } from "../model/Offer";

type Status = "idle" | "loading" | "resolved" | "failed";

interface OfferState {
  data: Offer[];
  status: Status;
}

const initialState: OfferState = {
  data: [],
  status: "idle",
};

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.data = action.payload;
      return state;
    },
    updateStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
      return state;
    },
  },
});

export const { setOffers, updateStatus } = offerSlice.actions;

export const fetchOffers = (): AppThunk => async (dispatch) => {
  let offers: Offer[];
  dispatch(updateStatus("loading"));
  try {
    offers = await offerService.getOffers();
    dispatch(updateStatus("resolved"));
  } catch (error) {
    dispatch(updateStatus("failed"));
    offers = [];
  }
  dispatch(setOffers(offers));
};

export default offerSlice.reducer;
