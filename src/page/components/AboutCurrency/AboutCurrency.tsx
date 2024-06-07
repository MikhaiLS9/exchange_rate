import { FC } from "react";
import { useGetSupportedCodesQuery } from "../../../services/ExchangeRateQuery";
import Ptag from "../../../components/Ptag/Ptag";
import styles from './AboutCurrency.module.css'

const AboutCurrency: FC = () => {
  const { data, isError, isLoading } = useGetSupportedCodesQuery("");
  console.log(data);

  return (
    <div className={styles.currency_wrapper}>
      {isError && <div>Произошла ошибка</div>}
      {isLoading && <div>Идет загрузка ...</div>}
      {data?.supported_codes.map(([code, name]) => (
        <div key={code} className={styles.codes}>
          <Ptag size={"medium"}>Валюта : {code}</Ptag>
          <Ptag size={"medium"}>Расшифровка : {name}</Ptag>
        </div>
      ))}
    </div>
  );
};

export default AboutCurrency;
