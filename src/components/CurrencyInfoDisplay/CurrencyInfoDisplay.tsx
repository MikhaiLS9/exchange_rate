import { FC } from "react";
import Htag from "../Htag/Htag";
import Ptag from "../Ptag/Ptag";
import { ICurrencyInfoDisplayProps } from "./CurrencyInfoDisplay.props";
import styles from './CurrencyInfoDisplay.module.css'

const CurrencyInfoDisplay: FC<ICurrencyInfoDisplayProps> = ({
  headerText,
  result,
  
}) => {
  return (
    <span className={styles.currency_info_wrapper}>
      <Htag tag="h2">{headerText}</Htag>
      <Ptag size="medium">{result}</Ptag>
    </span>
  );
};

export default CurrencyInfoDisplay;
