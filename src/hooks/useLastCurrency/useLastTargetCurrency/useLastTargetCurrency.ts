import { useAppSelector } from "../../reduxHooks/reduxHooks";

const useLastTargetCurrency = () => {
  const targetCurrencies = useAppSelector(
    (state) => state.userProfileCurrency.targetCurrencies
  );

  return targetCurrencies[targetCurrencies.length - 1];
};

export default useLastTargetCurrency;
