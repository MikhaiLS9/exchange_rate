import { FC, useCallback, } from "react";
import Htag from "../../../components/Htag/Htag";
import { useGetSupportedCodesQuery } from "../../../services/ExchangeRateQuery";
import CurrencyAmount from "../../../components/CurrencyAmount/CurrencyAmount";
import CurrencyPicker from "../../../components/CurrencyPicker/CurrencyPicker";
import useLastBaseCurrency from "../../../hooks/useLastCurrency/useLastBaseCurrency/useLastBaseCurrency";
import { useAppDispatch } from "../../../hooks/reduxHooks/reduxHooks";
import {
  addBaseCurrency,
  addTargetCurrency,
} from "../../../store/userProfileCurrency";
import useLastTargetCurrency from "../../../hooks/useLastCurrency/useLastTargetCurrency/useLastTargetCurrency";
import styles from "./ConvertRatePair.module.css";

const ConvertRatePair: FC = () => {
  const lastBaseCurrency = useLastBaseCurrency();
  const lastTargetCurrency = useLastTargetCurrency();
  
  const dispatch = useAppDispatch();

  const { data } = useGetSupportedCodesQuery("");

  const handleBaseCurrencySelect = useCallback(
    (code: string) => {
      dispatch(addBaseCurrency(code));
    },
    [dispatch]
  );
  const handleTargetCurrencySelect = useCallback(
    (code: string) => {
      dispatch(addTargetCurrency(code));
    },
    [dispatch]
  );

  return (
    <div>
      <Htag tag="h2">Выберите валюту</Htag>

      <div className={styles.currency_picker_wrapper}>
        <CurrencyPicker
          text="У меня есть"
          currency={lastBaseCurrency}
          data={data}
          handleCurrencySelect={handleBaseCurrencySelect}
        />

        <CurrencyPicker
          text="Хочу купить"
          currency={lastTargetCurrency}
          data={data}
          handleCurrencySelect={handleTargetCurrencySelect}
        />

        <CurrencyAmount />
      </div>
    </div>
  );
};

export default ConvertRatePair;
