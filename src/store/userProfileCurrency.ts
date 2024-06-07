import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserProfileCurrency {
  baseCurrencies: string[];
  targetCurrencies: string[];
  amountCurrencies: string[];
}

const initialState: IUserProfileCurrency = {
  baseCurrencies: [],
  targetCurrencies: [],
  amountCurrencies: [],
};

export const userProfileCurrencySlice = createSlice({
  name: "userProfileCurrency",

  initialState,
  reducers: {
    addBaseCurrency(state, action: PayloadAction<string>) {
      if (state.baseCurrencies.length >= 5) {
        state.baseCurrencies.shift();
      }
      state.baseCurrencies.push(action.payload);
      localStorage.setItem(
        "baseCurrencies",
        JSON.stringify(state.baseCurrencies)
      );
    },
    addTargetCurrency(state, action: PayloadAction<string>) {
      if (state.targetCurrencies.length >= 5) {
        state.targetCurrencies.shift();
      }
      state.targetCurrencies.push(action.payload);
      localStorage.setItem(
        "targetCurrencies",
        JSON.stringify(state.targetCurrencies)
      );
    },
    addAmountCurrency(state, action: PayloadAction<string>) {
      if (state.amountCurrencies.length >= 5) {
        state.amountCurrencies.shift();
      }
      state.amountCurrencies.push(action.payload);
      localStorage.setItem(
        "amountCurrencies",
        JSON.stringify(state.amountCurrencies)
      );
    },
    clearCurrency(state) {
      state.baseCurrencies = [];
      state.targetCurrencies = [];
      localStorage.clear();
    },
  },
});

export const {
  addBaseCurrency,
  addTargetCurrency,
  clearCurrency,
  addAmountCurrency,
} = userProfileCurrencySlice.actions;
