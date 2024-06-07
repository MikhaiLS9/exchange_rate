import { useAppSelector } from "../../reduxHooks/reduxHooks";

const useLastAmountCurrency = () => {
  const amountCurrencies = useAppSelector(
    (state) => state.userProfileCurrency.amountCurrencies
  );

  return amountCurrencies[amountCurrencies.length - 1];
};

export default useLastAmountCurrency;
