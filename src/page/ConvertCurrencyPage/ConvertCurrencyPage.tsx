import { FC } from "react";
import WithAuth from "../../HOC/WithAuth/WithAuth";
import CurrencyInfoDisplay from "../../components/CurrencyInfoDisplay/CurrencyInfoDisplay";
import LinkTag from "../../components/LinkTag/LinkTag";
import Ptag from "../../components/Ptag/Ptag";
import { routers } from "../../helpers/routers/routers";
import useLastAmountCurrency from "../../hooks/useLastCurrency/useLastAmountCurrency/useLastAmountCurrency";
import useLastBaseCurrency from "../../hooks/useLastCurrency/useLastBaseCurrency/useLastBaseCurrency";
import useLastTargetCurrency from "../../hooks/useLastCurrency/useLastTargetCurrency/useLastTargetCurrency";
import { useGetConversionRateQuery } from "../../services/ExchangeRateQuery";
import styles from "./ConvertCurrencyPage.module.css";
import { IConvertCurrencyPageProps } from "./ConvertCurrencyPage.props";

const ConvertCurrencyPage: FC<IConvertCurrencyPageProps> = WithAuth(({ isAuthenticated }) => {
  const lastAmountCurrency = useLastAmountCurrency();
  const lastBaseCurrency = useLastBaseCurrency();
  const lastTargetCurrency = useLastTargetCurrency();
  const { data, error, isLoading } = useGetConversionRateQuery(
    {
      baseCurrency: lastBaseCurrency,
      targetCurrency: lastTargetCurrency,
      amount: lastAmountCurrency,
    },
    { skip: !lastBaseCurrency || !lastTargetCurrency || !lastAmountCurrency }
  );
  return (
    <>
      {!isAuthenticated ? (
        <div className={styles.not_authenticated}>
          Пожалуйста{" "}
          <LinkTag appearance="ghostXl" href={routers.login}>
            зайдите
          </LinkTag>{" "}
          или
          <LinkTag appearance="ghostXl" href={routers.register}>
            зарегистрируйтесь
          </LinkTag>
        </div>
      ) : (
        <div className={styles.page_wrapper}>
          {isLoading && <div>Загружаем ...</div>}
          {error && <div>Произошла Ошибка.</div>}
          {!error && data && (
            <>
              <CurrencyInfoDisplay
                headerText="Ваша валюта"
                result={lastBaseCurrency}
              />
              <CurrencyInfoDisplay
                headerText="Получить валюту"
                result={lastTargetCurrency}
              />
            </>
          )}

          {data && (
            <div className={styles.resultWrapper}>
              <Ptag size="medium">
                <span className={styles.highlight}>
                  {lastAmountCurrency}шт.
                </span>{" "}
                {lastBaseCurrency} =
                <span className={styles.highlight}>
                  {lastTargetCurrency} {data?.conversion_result}
                </span>
              </Ptag>
            </div>
          )}
        </div>
      )}
    </>
  );
});

export default ConvertCurrencyPage;
