import { FC, useState } from "react";
import { ICurrencyRateCardProps } from "./CurrencyRateCard.props";
import useLastBaseCurrency from "../../../hooks/useLastCurrency/useLastBaseCurrency/useLastBaseCurrency";
import Button from "../../../components/Button/Button";
import { useGetLatestRatesQuery } from "../../../services/ExchangeRateQuery";
import CurrencySelect from "../../../components/CurrencySelect/CurrencySelect";
import CurrencyInfoDisplay from "../../../components/CurrencyInfoDisplay/CurrencyInfoDisplay";
import styles from "./CurrencyRateCard.module.css";
import Ptag from "../../../components/Ptag/Ptag";
import { Link } from "react-router-dom";
import { routers } from "../../../helpers/routers/routers";

const CurrencyRateCard: FC<ICurrencyRateCardProps> = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<{
    nameCurrency: null | string;
    valueCurrency: null | number;
  }>({
    nameCurrency: null,
    valueCurrency: null,
  });
  const lastBaseCurrency = useLastBaseCurrency();
  const { data, error, isLoading, refetch } = useGetLatestRatesQuery(
    { baseCurrency: lastBaseCurrency },
    { skip: !lastBaseCurrency }
  );

  const isSuccess = data?.result === "success";

  const currencyData = data?.conversion_rates;

  if (!currencyData) {
    return;
  }
  const currency = Object.entries(currencyData);

  const handleCurrencySelect = (code: string) => {
    setSelectedCurrency({
      nameCurrency: code,
      valueCurrency: currencyData[code],
    });
  };

  const getConversionRates = () => {
    if (lastBaseCurrency) {
      refetch();
    }
  };

  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.cart_header_wrapper}>
        <CurrencyInfoDisplay
          headerText="Ваша валюта:"
          result={lastBaseCurrency}
        />
        <span>
          <Link to={routers.convert}>
            <Ptag size="medium">Для количества перейдите по ссылки</Ptag>
          </Link>
        </span>
      </div>

      {isLoading && <div>Загружаем валюту...</div>}
      {isSuccess && (
        <div className={styles.conclusion_currency_wrapper}>
          {lastBaseCurrency && <span>1 {lastBaseCurrency} = </span>}
          <span>
            {selectedCurrency.nameCurrency} {selectedCurrency.valueCurrency}
          </span>
        </div>
      )}
      {error && <div>Произошла ошибка</div>}
      <span className={styles.conclusion_currency_wrapper}>
        Хочу купить
        {}
        <CurrencySelect
          options={currency}
          type="text"
          onSelect={handleCurrencySelect}
        />
      </span>
      <span className={styles.conclusion_currency_wrapper}>
        Для обновления запроса нажмите
        <Button onClick={getConversionRates}>Запрос</Button>
      </span>
    </div>
  );
};

export default CurrencyRateCard;
