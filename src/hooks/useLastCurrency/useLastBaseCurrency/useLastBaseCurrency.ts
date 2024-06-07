import { useAppSelector } from "../../reduxHooks/reduxHooks";

const useLastBaseCurrency = () => {
  const baseCurrencies = useAppSelector(
    (state) => state.userProfileCurrency.baseCurrencies
  );

  return baseCurrencies[baseCurrencies.length - 1];
};

export default useLastBaseCurrency;
