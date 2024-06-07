import { FC, memo } from "react";
import { IExchangeRateApiCode } from "../../interfaces/exchangeRateApi.interfaces";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import Ptag from "../Ptag/Ptag";
import styles from './CurrencyPicker.module.css'

export interface ICurrencyPickerProps {
  data: IExchangeRateApiCode | undefined;
  handleCurrencySelect: (prev: string) => void;
  currency: string | null;
  text: string;
}

const CurrencyPicker: FC<ICurrencyPickerProps> = memo(({
  data,
  currency,
  handleCurrencySelect,
  text,
}) => {

  console.log("render 3");
  
  return (
    <div className={styles.picker_wrapper}>
      <Ptag size="large">{text}</Ptag>
      {data && (
        <>
          {currency}
          <CurrencySelect
            type="text"
            options={data?.supported_codes}
            onSelect={handleCurrencySelect}/>
        </>
      )}
    </div>
  );
});

export default CurrencyPicker;
