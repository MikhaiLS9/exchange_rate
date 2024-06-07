// src/services/exchangeRateApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTE } from "../helpers/API/API";
import { ApiKey } from "../helpers/ApiKey/ApiKey";
import {
  IExchangeRateApiCode,
  IExchangeRateApiLatest,
  IExchangeRateApiPair,
} from "../interfaces/exchangeRateApi.interfaces";

export const exchangeRateApi = createApi({
  reducerPath: "exchangeRateApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_ROUTE.base}/${ApiKey}/` }),
  endpoints: (builder) => ({
    getSupportedCodes: builder.query<IExchangeRateApiCode, string>({
      query: () => "codes",
    }),
    getConversionRate: builder.query<
      IExchangeRateApiPair,
      { baseCurrency: string; targetCurrency: string; amount: string }
    >({
      query: ({ baseCurrency, targetCurrency, amount }) =>
        `pair/${baseCurrency}/${targetCurrency}/${amount}`,
    }),
    getLatestRates: builder.query<
    IExchangeRateApiLatest,
      { baseCurrency: string }
    >({
      query: ({ baseCurrency }) => `latest/${baseCurrency}`,
    }),
  }),
});

export const { useGetSupportedCodesQuery, useGetConversionRateQuery, useGetLatestRatesQuery } =
  exchangeRateApi;
