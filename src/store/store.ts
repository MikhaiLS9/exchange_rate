import { configureStore } from "@reduxjs/toolkit";
import { exchangeRateApi } from "../services/ExchangeRateQuery";
import { userProfileCurrencySlice } from "./userProfileCurrency";

const preloadedState = {
  userProfileCurrency: {
    baseCurrencies: JSON.parse(localStorage.getItem("baseCurrencies") || "[]"),
    targetCurrencies: JSON.parse(
      localStorage.getItem("targetCurrencies") || "[]"
    ),
    amountCurrencies: JSON.parse(
      localStorage.getItem("amountCurrencies") || "[]"
    ),
  },
};

export const store = configureStore({
  reducer: {
    [exchangeRateApi.reducerPath]: exchangeRateApi.reducer,
    userProfileCurrency: userProfileCurrencySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeRateApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

