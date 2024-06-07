import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import Button from "../Button/Button";

import { addAmountCurrency } from "../../store/userProfileCurrency";
import { useAppDispatch } from "../../hooks/reduxHooks/reduxHooks";
import styles from "./CurrencyAmount.module.css";
import Ptag from "../Ptag/Ptag";

const CurrencyAmount: FC = 
  () => {
    const [currencyAmount, setCurrencyAmount] = useState<number>(1);
    const dispatch = useAppDispatch();
    
    const enterCurrencyAmount = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const value = +e.target.value;
      if (value > 0) {
        setCurrencyAmount(value);
      }
    };

    const submitForm = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formDate = new FormData(e.currentTarget);
        const data = Object.fromEntries(formDate);
        const { amount } = data;
        dispatch(addAmountCurrency(String(amount)));
      },
      [dispatch]
    );
    return (
      <form action="" onSubmit={submitForm} className={styles.form_wrapper}>
        <label htmlFor="amount">
          <Ptag size="medium"> Количество :</Ptag>

          <input
            onChange={enterCurrencyAmount}
            type="number"
            id="amount"
            name="amount"
            value={currencyAmount}
            min="0"
            step="0.01"
          />
        </label>
        <Button>Конвертировать</Button>
      </form>
    );
  }
;
export default CurrencyAmount;
