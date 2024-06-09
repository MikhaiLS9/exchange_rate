import { FC, memo } from "react";
import Htag from "../Htag/Htag";
import Ptag from "../Ptag/Ptag";
import { ICurrencyInfoDisplayProps } from "./CurrencyInfoDisplay.props";
import styles from "./CurrencyInfoDisplay.module.css";

const InfoDisplay: FC<ICurrencyInfoDisplayProps> = ({ headerText, result }) => {
  return (
    <div className={styles.currency_info_wrapper}>
      <Htag tag="h2">{headerText}</Htag>
      <Ptag size="medium">{result}</Ptag>
    </div>
  );
};
const CurrencyInfoDisplay = memo(InfoDisplay);
export default CurrencyInfoDisplay;
