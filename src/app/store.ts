import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import offerReducer from "../reducers/offerSlice";

export const store = configureStore({
  reducer: {
    offer: offerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
