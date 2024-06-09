import { FC,} from "react";
import { IExchangeRateInfoProps } from "./ExchangeRateInfo.props";
import ConvertRatePair from "../ConvertRatePair/ConvertRatePair";
import { useGetSupportedCodesQuery } from "../../../services/ExchangeRateQuery";
import CurrencySelect from "../../../components/CurrencySelect/CurrencySelect";
import { useLocation } from "react-router-dom";
import { routers } from "../../../helpers/routers/routers";
import {
  addBaseCurrency,
  clearCurrency,
} from "../../../store/userProfileCurrency";
import { useAppDispatch } from "../../../hooks/reduxHooks/reduxHooks";
import Button from "../../../components/Button/Button";
import useLastBaseCurrency from "../../../hooks/useLastCurrency/useLastBaseCurrency/useLastBaseCurrency";
import WithAuth from "../../../HOC/WithAuth/WithAuth";
import CurrencyInfoDisplay from "../../../components/CurrencyInfoDisplay/CurrencyInfoDisplay";
import Htag from "../../../components/Htag/Htag";
import styles from "./ExchangeRateInfo.module.css";

const ExchangeRateInfo: FC<IExchangeRateInfoProps> = WithAuth(
  ({ isAuthenticated }) => {
    const { data, error, isLoading } = useGetSupportedCodesQuery("");
    const location = useLocation();
    const dispatch = useAppDispatch();

    const lastBaseCurrency = useLastBaseCurrency();

    const isSuccess = data?.result === "success";

   
    const handleCurrencySelect = (code: string) => {
      dispatch(addBaseCurrency(code));
    };

    const clearUserCurrency = () => {
      dispatch(clearCurrency());
    };

    return (
      <>
        {isLoading && <div>Loading ...</div>}
        {error && <div>Произошла ошибка</div>}
        <div className={styles.info_wrapper}>
          {isAuthenticated && location.pathname === routers.convert ? (
            <ConvertRatePair />
          ) : (
            <>
              <Htag tag="h2">Выберите валюту</Htag>

              <CurrencyInfoDisplay
                headerText="Ваша валюта"
                result={lastBaseCurrency}
              />
              <div className={styles.input_wrapper}>
                {isSuccess && (
                  <CurrencySelect
                    type="text"
                    options={data?.supported_codes}
                    onSelect={handleCurrencySelect}
                   
                  />
                )}
                
                <Button onClick={clearUserCurrency}>Clear</Button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
);

export default ExchangeRateInfo;
